import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const DB_DIR = path.resolve(process.cwd(), 'database');
const UPLOADS_DIR = path.join(DB_DIR, 'uploads');
const DB_FILE = path.join(DB_DIR, 'cv-database.json');
const MAX_FILE_BYTES = 10 * 1024 * 1024; // 10 MB

function ensureStorage() {
  if (!fs.existsSync(DB_DIR)) {
    fs.mkdirSync(DB_DIR, { recursive: true });
  }
  if (!fs.existsSync(UPLOADS_DIR)) {
    fs.mkdirSync(UPLOADS_DIR, { recursive: true });
  }
  if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify([], null, 2), 'utf-8');
  }
}

function readDatabase() {
  ensureStorage();
  try {
    const raw = fs.readFileSync(DB_FILE, 'utf-8');
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeDatabase(records) {
  ensureStorage();
  fs.writeFileSync(DB_FILE, JSON.stringify(records, null, 2), 'utf-8');
}

function sendJson(res, statusCode, payload) {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(payload));
}

function attachCvMiddleware(middlewares) {
  // POST /api/cv-upload
  middlewares.use('/api/cv-upload', (req, res, next) => {
    if (req.method !== 'POST') {
      return next();
    }

    const chunks = [];
    let totalBytes = 0;
    const maxBodyBytes = 16 * 1024 * 1024; // ~16MB JSON for 10MB base64 file

    req.on('data', (chunk) => {
      totalBytes += chunk.length;
      if (totalBytes > maxBodyBytes) {
        sendJson(res, 413, { success: false, error: 'File payload too large (max 10 MB).' });
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });

    req.on('end', () => {
      try {
        const body = JSON.parse(Buffer.concat(chunks).toString('utf-8'));
        const {
          name,
          email,
          phone,
          industry = '',
          role = '',
          notes = '',
          fileName,
          fileType = '',
          fileSize = 0,
          fileBase64
        } = body;

        if (!name || !email || !phone || !fileName || !fileBase64) {
          return sendJson(res, 400, {
            success: false,
            error: 'Name, email, phone, and CV file are required.'
          });
        }

        const ext = path.extname(fileName).toLowerCase();
        if (!['.pdf', '.doc', '.docx'].includes(ext)) {
          return sendJson(res, 400, {
            success: false,
            error: 'Only PDF, DOC, and DOCX files are allowed.'
          });
        }

        const base64Data = fileBase64.includes(',') ? fileBase64.split(',')[1] : fileBase64;
        const fileBuffer = Buffer.from(base64Data, 'base64');

        if (fileBuffer.length === 0 || fileBuffer.length > MAX_FILE_BYTES) {
          return sendJson(res, 400, {
            success: false,
            error: 'CV file must be between 1 byte and 10 MB.'
          });
        }

        ensureStorage();

        const id = `cv_${Date.now()}_${crypto.randomBytes(3).toString('hex')}`;
        const safeBaseName = path.basename(fileName).replace(/[^a-zA-Z0-9._-]/g, '_');
        const storedFileName = `${id}_${safeBaseName}`;
        const filePath = path.join(UPLOADS_DIR, storedFileName);

        fs.writeFileSync(filePath, fileBuffer);

        const record = {
          id,
          name: String(name).trim(),
          email: String(email).trim(),
          phone: String(phone).trim(),
          industry: String(industry).trim(),
          role: String(role).trim(),
          notes: String(notes).trim(),
          originalFileName: path.basename(fileName),
          storedFileName,
          fileSize: fileBuffer.length || Number(fileSize),
          fileType: String(fileType),
          submittedAt: new Date().toISOString()
        };

        const records = readDatabase();
        records.unshift(record);
        writeDatabase(records);

        return sendJson(res, 200, { success: true, record });
      } catch (err) {
        console.error('CV Upload Error:', err);
        return sendJson(res, 500, {
          success: false,
          error: 'Failed to process CV upload.'
        });
      }
    });
  });

  // GET /api/cv-list
  middlewares.use('/api/cv-list', (req, res, next) => {
    if (req.method !== 'GET') {
      return next();
    }
    const records = readDatabase();
    return sendJson(res, 200, { success: true, records });
  });

  // GET /api/cv-download?file=...
  middlewares.use('/api/cv-download', (req, res, next) => {
    if (req.method !== 'GET') {
      return next();
    }
    try {
      const url = new URL(req.url, 'http://localhost');
      const requestedFile = url.searchParams.get('file');
      if (!requestedFile) {
        return sendJson(res, 400, { success: false, error: 'Missing file parameter.' });
      }

      const safeFile = path.basename(requestedFile);
      const targetPath = path.join(UPLOADS_DIR, safeFile);

      if (!targetPath.startsWith(UPLOADS_DIR) || !fs.existsSync(targetPath)) {
        return sendJson(res, 404, { success: false, error: 'CV file not found.' });
      }

      res.statusCode = 200;
      res.setHeader('Content-Disposition', `attachment; filename="${safeFile}"`);
      res.setHeader('Content-Type', 'application/octet-stream');
      fs.createReadStream(targetPath).pipe(res);
    } catch {
      return sendJson(res, 500, { success: false, error: 'Download failed.' });
    }
  });
}

export function cvApiPlugin() {
  return {
    name: 'talentic-cv-api',
    configureServer(server) {
      attachCvMiddleware(server.middlewares);
    },
    configurePreviewServer(server) {
      attachCvMiddleware(server.middlewares);
    }
  };
}
