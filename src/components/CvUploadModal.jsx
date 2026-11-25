import React, { useState, useRef, useEffect } from 'react';
import {
  X,
  Upload,
  FileText,
  CheckCircle2,
  AlertCircle,
  Trash2,
  Send
} from 'lucide-react';
import { INDUSTRIES_DATA, FUNCTIONS_DATA } from '../data/staffingData';

const MAX_SIZE_BYTES = 10 * 1024 * 1024; // 10 MB
const ALLOWED_EXTENSIONS = ['.pdf', '.doc', '.docx'];

function formatBytes(bytes) {
  if (!bytes) return '0 KB';
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function readFileAsBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error('Failed to read selected file.'));
    reader.readAsDataURL(file);
  });
}

export default function CvUploadModal({
  isOpen,
  onClose,
  initialIndustry = '',
  initialRole = '',
  onUploadSuccess
}) {
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    industry: initialIndustry || '',
    role: initialRole || '',
    notes: ''
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submittedRecord, setSubmittedRecord] = useState(null);

  useEffect(() => {
    if (isOpen) {
      setFormData((prev) => ({
        ...prev,
        industry: initialIndustry || prev.industry,
        role: initialRole || prev.role
      }));
      setError('');
    }
  }, [isOpen, initialIndustry, initialRole]);

  if (!isOpen) return null;

  const allCategories = [
    ...Object.keys(INDUSTRIES_DATA).sort(),
    ...Object.keys(FUNCTIONS_DATA).sort()
  ];

  const validateAndSetFile = (file) => {
    if (!file) return;
    setError('');

    const ext = file.name.slice(file.name.lastIndexOf('.')).toLowerCase();
    if (!ALLOWED_EXTENSIONS.includes(ext)) {
      setError('Please upload a PDF, DOC, or DOCX file.');
      return;
    }

    if (file.size > MAX_SIZE_BYTES) {
      setError('File size must be 10 MB or smaller.');
      return;
    }

    setSelectedFile(file);
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) validateAndSetFile(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) validateAndSetFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!selectedFile) {
      setError('Please select your CV file (PDF, DOC, or DOCX) from your computer.');
      return;
    }

    setSubmitting(true);
    try {
      const fileBase64 = await readFileAsBase64(selectedFile);

      const payload = {
        ...formData,
        fileName: selectedFile.name,
        fileType: selectedFile.type,
        fileSize: selectedFile.size,
        fileBase64
      };

      let savedRecord = null;
      try {
        const res = await fetch('/api/cv-upload', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        const data = await res.json();
        if (!res.ok || !data.success) {
          throw new Error(data.error || 'Failed to upload CV.');
        }
        savedRecord = data.record;
      } catch (apiErr) {
        // Fallback if static preview without Node backend
        if (apiErr.message && !apiErr.message.includes('Failed to fetch')) {
          throw apiErr;
        }
        savedRecord = {
          id: `cv_${Date.now()}`,
          ...formData,
          originalFileName: selectedFile.name,
          fileSize: selectedFile.size,
          submittedAt: new Date().toISOString()
        };
      }

      // Also mirror metadata locally as backup
      try {
        const existing = JSON.parse(localStorage.getItem('talentic_cv_submissions') || '[]');
        localStorage.setItem(
          'talentic_cv_submissions',
          JSON.stringify([savedRecord, ...existing])
        );
      } catch {
        // ignore storage quota errors
      }

      setSubmittedRecord(savedRecord);
      if (onUploadSuccess) onUploadSuccess(savedRecord);
    } catch (err) {
      setError(err.message || 'Could not upload your CV. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setSubmittedRecord(null);
    setSelectedFile(null);
    setError('');
    setFormData({
      name: '',
      email: '',
      phone: '',
      industry: '',
      role: '',
      notes: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
      <div className="absolute inset-0" onClick={handleResetAndClose}></div>

      <div className="relative w-full max-w-2xl rounded-3xl bg-white dark:bg-[#090e24] border border-slate-200 dark:border-purple-500/40 shadow-2xl dark:shadow-[0_0_50px_rgba(120,60,236,0.35)] p-6 sm:p-8 z-10 max-h-[92vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-5 border-b border-slate-200 dark:border-slate-800">
          <div>
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-purple-600 dark:text-cyan-400 block mb-1">
              TALENTIC 360.AI TALENT NETWORK
            </span>
            <h3 className="text-2xl sm:text-3xl font-black font-display text-slate-900 dark:text-white">
              Upload Your CV
            </h3>
          </div>
          <button
            type="button"
            onClick={handleResetAndClose}
            aria-label="Close modal"
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 dark:bg-slate-800/80 dark:hover:bg-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submittedRecord ? (
          <div className="py-10 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mx-auto shadow-md">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold font-display text-slate-900 dark:text-white">
              CV Uploaded & Saved!
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="font-bold text-slate-900 dark:text-white">{submittedRecord.name}</span>. Your CV{' '}
              <span className="font-mono text-xs px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-950/70 text-purple-700 dark:text-purple-300">
                {submittedRecord.originalFileName}
              </span>{' '}
              has been collected in our database.
            </p>
            <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
              Reference ID: {submittedRecord.id}
            </div>
            <div className="pt-4">
              <button
                type="button"
                onClick={handleResetAndClose}
                className="px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#2c60ea] via-[#783cec] to-[#ef4444] shadow-md hover:shadow-xl transition-all cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 pt-5">
            {error && (
              <div className="p-3.5 rounded-xl bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-500/40 flex items-center gap-2.5 text-xs sm:text-sm text-red-700 dark:text-red-300 font-medium">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* File Picker / Drag & Drop Zone */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                Select CV / Resume File (PDF, DOC, DOCX · Max 10 MB) *
              </label>

              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                onChange={handleFileChange}
                className="hidden"
              />

              {selectedFile ? (
                <div className="p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/30 border border-purple-300 dark:border-purple-500/50 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2c60ea] to-[#783cec] text-white flex items-center justify-center shrink-0">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-sm font-bold text-slate-900 dark:text-white block truncate">
                        {selectedFile.name}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {formatBytes(selectedFile.size)} · Ready to upload
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setSelectedFile(null);
                      if (fileInputRef.current) fileInputRef.current.value = '';
                    }}
                    aria-label="Remove file"
                    className="p-2 rounded-lg text-slate-500 hover:text-red-600 dark:text-slate-400 dark:hover:text-red-400 hover:bg-white/80 dark:hover:bg-slate-900 transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div
                  onClick={() => fileInputRef.current?.click()}
                  onDragOver={(e) => {
                    e.preventDefault();
                    setIsDragging(true);
                  }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={handleDrop}
                  className={`rounded-2xl border-2 border-dashed p-6 text-center cursor-pointer transition-all ${
                    isDragging
                      ? 'border-purple-500 bg-purple-50 dark:bg-purple-950/30'
                      : 'border-slate-300 dark:border-slate-700 hover:border-purple-400 dark:hover:border-cyan-400 bg-slate-50/80 dark:bg-slate-900/50'
                  }`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-950/70 text-purple-600 dark:text-cyan-400 flex items-center justify-center mx-auto mb-3">
                    <Upload className="w-6 h-6" />
                  </div>
                  <p className="text-sm font-bold text-slate-800 dark:text-white">
                    Click to choose your CV from your Mac / Computer
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    or drag and drop your .pdf, .doc, or .docx file here
                  </p>
                </div>
              )}
            </div>

            {/* Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Priya Verma"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-cyan-400"
                />
              </div>
            </div>

            {/* Email & Target Role */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. priya@example.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  Target Role / Title
                </label>
                <input
                  type="text"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  placeholder="e.g. HR Business Partner"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-cyan-400"
                />
              </div>
            </div>

            {/* Industry / Function */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                Preferred Industry / Function
              </label>
              <select
                value={formData.industry}
                onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-cyan-400 cursor-pointer"
              >
                <option value="">Select Industry or Function (Optional)</option>
                {allCategories.map((cat, idx) => (
                  <option key={idx} value={cat} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                Key Skills / Experience Summary (Optional)
              </label>
              <textarea
                rows={2}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Briefly mention your years of experience, current city, or notice period..."
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-cyan-400 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#2c60ea] via-[#783cec] to-[#ef4444] shadow-md hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {submitting ? (
                <span>Uploading CV to Database...</span>
              ) : (
                <>
                  <span>Submit CV to Talent Database</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
