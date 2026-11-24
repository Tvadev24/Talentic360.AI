import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { siteData } from '../data/content';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: 'Academic Programs',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const programs = [
    'Academic Programs',
    'Vocational Programs',
    'Corporate Programs',
    'Government Programs',
    'Post-Graduate Programs',
    'Volunteering Programs',
    'Remote Programs'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Save submission to local storage like talentic360ai.in
      try {
        const existing = JSON.parse(localStorage.getItem('talentic_submissions') || '[]');
        localStorage.setItem('talentic_submissions', JSON.stringify([{ id: Date.now(), ...formData, date: new Date().toISOString() }, ...existing]));
      } catch (err) {
        // ignore
      }
    }, 600);
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="relative py-24 bg-white/70 dark:bg-[#050713]/70 backdrop-blur-[2px] transition-colors duration-200 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-600/10 dark:bg-cyan-600/15 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 dark:bg-purple-600/15 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-slate-900 dark:text-white mb-4">
            Get in <span className="bg-gradient-to-r from-[#2c60ea] via-[#783cec] to-[#ef4444] bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            Ready to transform your career or workforce? Contact us today to discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Information & Office Hours */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Details Card */}
            <div className="p-7 sm:p-8 rounded-3xl bg-slate-50 dark:bg-[#0a0e22]/90 border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-xl">
              <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                {/* Email */}
                <a 
                  href="mailto:info@talentic360.ai" 
                  className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-cyan-400/60 transition-all group shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform shadow-md">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 dark:text-slate-500 font-medium block">Email</span>
                    <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-cyan-300 transition-colors">
                      {siteData.contactInfo.email}
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a 
                  href="tel:+917083509072"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-purple-400 dark:hover:border-purple-400/60 transition-all group shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform shadow-md">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 dark:text-slate-500 font-medium block">Phone</span>
                    <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                      {siteData.contactInfo.phone}
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-white shrink-0 shadow-md">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 dark:text-slate-500 font-medium block">Location</span>
                    <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                      India
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block mt-0.5">
                      Pride Purple Square, Wakad, Pune 411057
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours Card */}
            <div className="p-7 sm:p-8 rounded-3xl bg-slate-50 dark:bg-[#0a0e22]/90 border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-xl">
              <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-indigo-600 dark:text-cyan-400" />
                Office Hours
              </h3>

              <div className="space-y-3">
                {siteData.contactInfo.hours.map((slot, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center justify-between text-sm py-1.5 border-b border-slate-200/80 dark:border-slate-800/80 last:border-0"
                  >
                    <span className="text-slate-600 dark:text-slate-400 font-medium">{slot.day}</span>
                    <span className={`font-mono font-bold ${
                      slot.time === 'Closed' ? 'text-rose-600 dark:text-rose-400' : 'text-indigo-600 dark:text-cyan-400'
                    }`}>
                      {slot.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-[#0a0e22]/90 border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-xl">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    Thank you, <span className="font-semibold text-slate-900 dark:text-white">{formData.name || 'valued partner'}</span>. We have received your inquiry for <span className="font-semibold text-indigo-600 dark:text-cyan-400">{formData.program}</span> and will contact you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', program: 'Academic Programs', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-indigo-400 transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Full Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-cyan-400 text-sm transition-all"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. rahul@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-cyan-400 text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-cyan-400 text-sm transition-all"
                      />
                    </div>
                  </div>

                  {/* Program Interest */}
                  <div>
                    <label htmlFor="program" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                      Program Interest
                    </label>
                    <select
                      id="program"
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-cyan-400 text-sm transition-all cursor-pointer"
                    >
                      <option value="" disabled>Select a program</option>
                      {programs.map((prog, idx) => (
                        <option key={idx} value={prog} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
                          {prog}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your organization's goals or training requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-cyan-400 text-sm transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#2c60ea] via-[#783cec] to-[#ef4444] shadow-md hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
