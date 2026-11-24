export const siteData = {
  brand: {
    name: "TALENTIC 360.AI",
    legalName: "TALENTIC 360.AI LLP",
    tagline: "Market Leader in Training Solutions",
    heroHeading: "Comprehensive Training & Apprenticeship Programs",
    heroSubtext: "Transforming talent through innovative programs across academic, vocational, corporate, and government sectors. Your trusted partner for workforce excellence.",
    modelBadge: "Neural Network Processing AI Model",
    badgeFeature: "Mindful Strategy for MNCs & Corporates",
  },

  navLinks: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Academic", href: "#academic" },
    { label: "Vocational", href: "#vocational" },
    { label: "Corporate", href: "#corporate" },
    { label: "Government", href: "#government" },
    { label: "Contact", href: "#contact" }
  ],

  metrics: [
    { value: "10,000+", label: "Trained Professionals", icon: "Users", desc: "Equipped with cutting-edge industry skills" },
    { value: "500+", label: "Corporate Partners", icon: "Building2", desc: "Top MNCs & leading manufacturing hubs" },
    { value: "95%", label: "Placement Rate", icon: "TrendingUp", desc: "Track record of career and talent transformations" }
  ],

  about: {
    title: "About TALENTIC 360.AI LLP",
    summary: "We are market leaders in comprehensive training and apprenticeship programs, dedicated to transforming talent across academic, vocational, corporate, and government sectors.",
    positioning: {
      headline: "Our Unique Positioning",
      paragraph1: "TALENTIC 360.AI LLP stands as the preferred training partner for MNCs, Corporates, and large manufacturers. Our mindful strategy combines cutting-edge methodologies with deep industry insights to deliver workforce solutions that drive real business impact.",
      paragraph2: "We don't just train—we transform. Our comprehensive approach ensures that every program aligns with your organizational goals, creating a sustainable talent pipeline that fuels growth and innovation."
    },
    pillars: [
      {
        id: "mindful-strategy",
        title: "Mindful Strategy",
        tag: "Tailored Architecture",
        description: "Tailored solutions for MNCs, Corporates, and large manufacturers with strategic workforce development.",
        icon: "BrainCircuit",
        color: "cyan"
      },
      {
        id: "market-leadership",
        title: "Market Leadership",
        tag: "Recognized Standards",
        description: "Industry-leading training programs recognized for excellence and innovation across multiple sectors.",
        icon: "Award",
        color: "purple"
      },
      {
        id: "proven-results",
        title: "Proven Results",
        tag: "Measurable Impact",
        description: "Track record of transforming talent and delivering measurable outcomes for our partners.",
        icon: "Target",
        color: "pink"
      },
      {
        id: "expert-team",
        title: "Expert Team",
        tag: "Industry Mentors",
        description: "Dedicated professionals with deep industry expertise and commitment to your success.",
        icon: "UserCheck",
        color: "blue"
      }
    ]
  },

  programs: [
    {
      id: "academic",
      name: "Academic Programs",
      prefix: "Academic ",
      suffix: "Programs",
      description: "Empowering students with industry-ready skills through comprehensive academic training programs that seamlessly integrate theoretical knowledge with practical application.",
      buttonText: "Explore Academic Programs",
      color: "from-blue-600 via-indigo-600 to-purple-600",
      accent: "cyan",
      badge: "Universities & Colleges",
      items: [
        {
          title: "Higher Education Partnerships",
          description: "Collaborative programs with universities and colleges to bridge the gap between academic learning and industry requirements.",
          icon: "GraduationCap"
        },
        {
          title: "Skill Enhancement Courses",
          description: "Specialized courses designed to complement academic curriculum with practical, industry-relevant skills.",
          icon: "BookOpen"
        },
        {
          title: "Student Apprenticeships",
          description: "Structured apprenticeship programs that provide students with hands-on experience while pursuing their degrees.",
          icon: "Users"
        },
        {
          title: "Certification Programs",
          description: "Industry-recognized certification courses that enhance employability and career prospects for students.",
          icon: "Award"
        }
      ]
    },
    {
      id: "vocational",
      name: "Vocational Programs",
      prefix: "Vocational ",
      suffix: "Programs",
      description: "Practical, industry-focused vocational training programs that equip individuals with the specialized skills needed to excel in their chosen trades and professions.",
      buttonText: "Explore Vocational Programs",
      color: "from-purple-600 to-pink-600",
      accent: "purple",
      badge: "Industry Certified Trades",
      items: [
        {
          title: "Technical Skills Training",
          description: "Hands-on training programs in specialized trades and technical skills aligned with industry standards and requirements.",
          icon: "Wrench"
        },
        {
          title: "Fast-Track Certifications",
          description: "Accelerated vocational courses designed to quickly upskill individuals for immediate employment opportunities.",
          icon: "Zap"
        },
        {
          title: "Trade Apprenticeships",
          description: "Comprehensive apprenticeship programs combining classroom instruction with on-the-job training in various trades.",
          icon: "Briefcase"
        },
        {
          title: "Career Advancement Programs",
          description: "Specialized programs for vocational professionals looking to advance their careers and expand their skill sets.",
          icon: "TrendingUp"
        }
      ]
    },
    {
      id: "corporate",
      name: "Corporate Programs",
      prefix: "Corporate ",
      suffix: "Programs",
      description: "Strategic corporate training solutions tailored for MNCs, corporates, and large manufacturers. Our mindful approach ensures alignment with your business objectives and long-term growth.",
      buttonText: "Explore Corporate Programs",
      color: "from-blue-600 to-cyan-600",
      accent: "blue",
      badge: "MNCs & Manufacturers",
      items: [
        {
          title: "Enterprise Training Solutions",
          description: "Customized training programs designed specifically for MNCs and large corporations to enhance workforce capabilities.",
          icon: "Building2"
        },
        {
          title: "Leadership Development",
          description: "Executive and leadership training programs that cultivate strategic thinking and management excellence.",
          icon: "Compass"
        },
        {
          title: "Innovation Workshops",
          description: "Interactive workshops focused on fostering innovation, creativity, and problem-solving skills in corporate teams.",
          icon: "Lightbulb"
        },
        {
          title: "Performance Optimization",
          description: "Data-driven programs designed to improve team productivity, efficiency, and overall business performance.",
          icon: "TrendingUp"
        }
      ]
    },
    {
      id: "government",
      name: "Government Programs",
      prefix: "Government ",
      suffix: "Programs",
      description: "Partnership programs with government bodies to support national skill development initiatives, policy implementation, and public sector workforce enhancement.",
      buttonText: "Explore Government Programs",
      color: "from-emerald-600 to-teal-600",
      accent: "cyan",
      badge: "Skill India & Public Sector",
      items: [
        {
          title: "Public Sector Training",
          description: "Specialized training programs for government employees focused on efficiency, governance, and public service excellence.",
          icon: "Landmark"
        },
        {
          title: "Policy Implementation Support",
          description: "Training initiatives aligned with government policies and schemes to ensure effective implementation and outcomes.",
          icon: "ShieldCheck"
        },
        {
          title: "Skill India Programs",
          description: "Collaborative programs supporting national skill development missions and government-led employment initiatives.",
          icon: "Award"
        },
        {
          title: "Community Development",
          description: "Training programs designed to support grassroots development and community empowerment initiatives.",
          icon: "HeartHandshake"
        }
      ]
    },
    {
      id: "postgraduate",
      name: "Post-Graduate Programs",
      prefix: "Post-Graduate ",
      suffix: "Programs",
      description: "Advanced learning programs for post-graduates seeking specialized knowledge, research opportunities, and professional excellence in their chosen fields.",
      buttonText: "Explore Post-Graduate Programs",
      color: "from-indigo-600 to-purple-600",
      accent: "purple",
      badge: "Mastery & Executive",
      items: [
        {
          title: "Advanced Specializations",
          description: "Post-graduate level programs offering deep expertise in specialized domains and emerging industry sectors.",
          icon: "BrainCircuit"
        },
        {
          title: "Research & Development",
          description: "Programs focused on research methodologies, innovation, and cutting-edge technological advancements.",
          icon: "Cpu"
        },
        {
          title: "Professional Excellence",
          description: "Advanced training for professionals seeking to achieve mastery and leadership in their respective fields.",
          icon: "Award"
        },
        {
          title: "Executive Education",
          description: "High-impact programs designed for senior professionals and executives pursuing continuous learning.",
          icon: "GraduationCap"
        }
      ]
    },
    {
      id: "volunteering",
      name: "Volunteering Programs",
      prefix: "Volunteering ",
      suffix: "Programs",
      description: "Make a difference while developing valuable skills. Our volunteering programs combine social impact with professional development and community engagement.",
      buttonText: "Explore Volunteering Programs",
      color: "from-pink-600 to-rose-600",
      accent: "pink",
      badge: "Community & Sustainability",
      items: [
        {
          title: "Community Service Training",
          description: "Programs designed to train volunteers in effective community service and social impact initiatives.",
          icon: "Heart"
        },
        {
          title: "NGO Partnerships",
          description: "Collaborative volunteering programs with NGOs focused on skill development and community empowerment.",
          icon: "HeartHandshake"
        },
        {
          title: "Youth Volunteering",
          description: "Structured programs engaging youth in meaningful volunteer work while developing leadership and social skills.",
          icon: "Users"
        },
        {
          title: "Sustainability Initiatives",
          description: "Environmental and sustainability-focused volunteering programs promoting eco-conscious practices and awareness.",
          icon: "Globe"
        }
      ]
    },
    {
      id: "remote",
      name: "Remote Programs",
      prefix: "Remote ",
      suffix: "Programs",
      description: "Learn from anywhere with our flexible remote training programs. Access world-class education and skill development without geographical limitations.",
      buttonText: "Explore Remote Programs",
      color: "from-teal-600 to-cyan-600",
      accent: "cyan",
      badge: "100% Borderless Learning",
      items: [
        {
          title: "Online Training Courses",
          description: "Comprehensive online training programs accessible from anywhere, designed for flexible learning and skill development.",
          icon: "Laptop"
        },
        {
          title: "Virtual Workshops",
          description: "Interactive virtual workshops and webinars featuring industry experts and hands-on learning experiences.",
          icon: "Video"
        },
        {
          title: "Self-Paced Learning",
          description: "Flexible self-paced courses that allow learners to progress at their own speed while maintaining quality outcomes.",
          icon: "Clock"
        },
        {
          title: "Hybrid Programs",
          description: "Blended learning programs combining online flexibility with occasional in-person sessions for optimal engagement.",
          icon: "Layers"
        }
      ]
    }
  ],

  whyChooseUs: [
    {
      title: "Market Leadership",
      description: "Recognized as the leading provider of comprehensive training and apprenticeship programs across multiple sectors.",
      icon: "Trophy",
      accent: "cyan"
    },
    {
      title: "Innovative Approach",
      description: "Cutting-edge training methodologies combining technology, practical application, and industry best practices.",
      icon: "Zap",
      accent: "pink"
    },
    {
      title: "Proven Track Record",
      description: "Thousands of successful placements and career transformations backed by industry partnerships and recognition.",
      icon: "CheckCircle2",
      accent: "purple"
    },
    {
      title: "Expert Faculty",
      description: "Learn from industry professionals and subject matter experts with real-world experience and deep domain knowledge.",
      icon: "GraduationCap",
      accent: "cyan"
    },
    {
      title: "Career Growth",
      description: "Structured pathways for career advancement with ongoing support, mentorship, and placement assistance.",
      icon: "Compass",
      accent: "pink"
    },
    {
      title: "Quality Assurance",
      description: "Industry-recognized certifications and rigorous quality standards ensuring excellent learning outcomes.",
      icon: "ShieldCheck",
      accent: "purple"
    }
  ],

  contactInfo: {
    email: "info@talentic360.ai",
    phone: "+91 7083509072",
    displayPhone: "+91 7083509072",
    location: "India",
    address: "Pride Purple Square, Kalewadi Phata, Wakad, Pune 411057",
    inquiryOffice: "Office No. 303, Pride Purple Square, Kalewadi Phata, Wakad, Pune 411057",
    corporateOffice: "Office No. 314, Pride Purple Square, Kalewadi Phata, Wakad, Pune 411057",
    hours: [
      { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
      { day: "Saturday", time: "10:00 AM - 4:00 PM" },
      { day: "Sunday", time: "Closed" }
    ]
  },

  officeHours: {
    weekdays: "9:00 AM - 6:00 PM",
    saturday: "10:00 AM - 4:00 PM",
    sunday: "Closed"
  },

  compliance: [
    { label: "WCAG 2.1 AA", status: "Compliant" },
    { label: "SSL Secure", status: "256-Bit" },
    { label: "High Performance", status: "99.9% Uptime" },
    { label: "Open Source Tech", status: "Modern Stack" }
  ],

  techStack: [
    "React 18",
    "Tailwind CSS",
    "Framer Motion Ready",
    "shadcn/ui",
    "Lucide Icons",
    "Vite 6"
  ]
};
