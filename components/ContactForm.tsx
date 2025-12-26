import React, { useState } from 'react';

interface ContactFormProps {
  onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    phone: '',
    email: '',
    services: [] as string[],
    referral: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const servicesList = [
    'Process improvements', 
    'AI audit', 
    'Custom voice agent or chatbot', 
    'Custom website', 
    'Website restyle', 
    'Done for you automations', 
    'Creative and/or storytelling AI consultation'
  ];

  const referralSources = [
    'LinkedIn', 
    'Google Search', 
    'Referral', 
    'Social Media', 
    'Advertisement', 
    'Newsletter',
    'Event/Conference',
    'Other'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate back-end saving
    const submissions = JSON.parse(localStorage.getItem('epiphany_submissions') || '[]');
    submissions.push({ ...formData, date: new Date().toISOString() });
    localStorage.setItem('epiphany_submissions', JSON.stringify(submissions));

    // Simulated email notification
    console.log('NOTIFYING: info@epiphanyunltld.com — New Submission from:', formData.email);
    
    setSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 2500);
  };

  const toggleService = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service) 
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  if (submitted) {
    return (
      <div className="fixed inset-0 z-[300] bg-black/95 backdrop-blur-3xl flex items-center justify-center p-4">
        <div className="text-center animate-in zoom-in duration-500">
          <div className="w-24 h-24 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-blue-500/30 shadow-[0_0_50px_rgba(59,130,246,0.3)]">
            <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
          </div>
          <h2 className="text-4xl font-geist font-bold mb-4 tracking-tighter">Engagement Received</h2>
          <p className="text-white/60 text-lg">Your epiphany is currently being drafted by our strategy team.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[250] bg-black/80 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto">
      <div className="glass-card w-full max-w-2xl rounded-[3rem] p-8 md:p-12 border-white/10 relative my-12 shadow-2xl">
        <button onClick={onClose} className="absolute top-8 right-8 text-white/30 hover:text-white transition-colors">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        <div className="mb-10">
          <h2 className="text-3xl font-geist font-light tracking-tighter mb-2">Request a <span className="text-blue-400 font-semibold">Strategic Consultation</span></h2>
          <p className="text-white/40 text-sm">Tell us about your business goals and where you need clarity.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-white/30 uppercase tracking-widest ml-1">Company</label>
              <input 
                required
                type="text" 
                placeholder="Your Company" 
                className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-6 focus:ring-2 focus:ring-blue-500/40 outline-none transition-all placeholder:text-white/10"
                value={formData.company}
                onChange={e => setFormData({...formData, company: e.target.value})}
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-white/30 uppercase tracking-widest ml-1">Contact Name</label>
              <input 
                required
                type="text" 
                placeholder="Full Name" 
                className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-6 focus:ring-2 focus:ring-blue-500/40 outline-none transition-all placeholder:text-white/10"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-white/30 uppercase tracking-widest ml-1">Phone (Optional)</label>
              <input 
                type="tel" 
                placeholder="+1 (555) 000-0000" 
                className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-6 focus:ring-2 focus:ring-blue-500/40 outline-none transition-all placeholder:text-white/10"
                value={formData.phone}
                onChange={e => setFormData({...formData, phone: e.target.value})}
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-white/30 uppercase tracking-widest ml-1">Email Address</label>
              <input 
                required
                type="email" 
                placeholder="hello@company.com" 
                className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-6 focus:ring-2 focus:ring-blue-500/40 outline-none transition-all placeholder:text-white/10"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-white/5">
            <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Primary Interest Area(s)</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {servicesList.map(service => (
                <label key={service} className="flex items-center gap-3 p-4 rounded-2xl border border-white/5 hover:bg-white/5 cursor-pointer transition-all group relative overflow-hidden">
                  <input 
                    type="checkbox" 
                    className="w-5 h-5 rounded border-white/20 bg-transparent text-blue-500 focus:ring-0 focus:ring-offset-0 transition-all cursor-pointer z-10"
                    checked={formData.services.includes(service)}
                    onChange={() => toggleService(service)}
                  />
                  <span className={`text-sm transition-colors z-10 ${formData.services.includes(service) ? 'text-white font-medium' : 'text-white/40 group-hover:text-white/70'}`}>
                    {service}
                  </span>
                  {formData.services.includes(service) && <div className="absolute inset-0 bg-blue-500/10 pointer-events-none" />}
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-2 pt-4 border-t border-white/5">
            <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">How did you hear about us?</label>
            <div className="relative">
              <select 
                required
                className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-6 outline-none focus:ring-2 focus:ring-blue-500/40 transition-all appearance-none text-white/80"
                value={formData.referral}
                onChange={e => setFormData({...formData, referral: e.target.value})}
              >
                <option value="" disabled className="bg-black text-white/20">Select Option</option>
                {referralSources.map(source => (
                  <option key={source} value={source} className="bg-black text-white">{source}</option>
                ))}
              </select>
              <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-30">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full h-16 bg-white text-black font-black rounded-2xl hover:bg-white/90 transition-all uppercase tracking-widest text-sm shadow-xl shadow-white/5 active:scale-[0.98]"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;