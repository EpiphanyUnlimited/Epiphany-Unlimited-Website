import React, { useState, useEffect } from 'react';

const AdminDashboard: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [submissions, setSubmissions] = useState<any[]>([]);

  useEffect(() => {
    if (isAuthenticated) {
      const data = JSON.parse(localStorage.getItem('epiphany_submissions') || '[]');
      setSubmissions(data.reverse());
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'vision2024') {
      setIsAuthenticated(true);
    } else {
      alert('Unauthorized access.');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 z-[400] bg-black flex items-center justify-center p-4">
        <div className="glass-card w-full max-w-md rounded-3xl p-10 border-white/10 text-center">
          <h2 className="text-2xl font-bold mb-6">Admin Access Required</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="password" 
              placeholder="Enter Access Key"
              className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-6 text-center focus:ring-2 focus:ring-blue-500 transition-all"
              value={password}
              onChange={e => setPassword(e.target.value)}
              autoFocus
            />
            <button className="w-full h-14 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-500 transition-all">
              Unlock Dashboard
            </button>
            <button type="button" onClick={onClose} className="text-white/40 text-sm hover:text-white">Cancel</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[400] bg-[#000810] overflow-y-auto p-4 md:p-12 selection:bg-blue-500/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-geist font-bold tracking-tighter">Strategic <span className="text-blue-400">Hub</span></h2>
            <p className="text-white/40">Inbound engagement leads</p>
          </div>
          <button onClick={onClose} className="px-6 h-12 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all font-bold text-sm">
            Exit Dashboard
          </button>
        </div>

        {submissions.length === 0 ? (
          <div className="text-center py-40 opacity-20">
            <p className="text-2xl">No strategic leads found.</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {submissions.map((s, i) => (
              <div key={i} className="glass-card rounded-3xl p-8 border-white/10 group hover:border-blue-500/30 transition-all">
                <div className="flex flex-col md:flex-row justify-between gap-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">{s.company}</h3>
                    <p className="text-white/60 font-medium">{s.name} • <span className="text-blue-400">{s.email}</span></p>
                    {s.phone && <p className="text-xs text-white/30">{s.phone}</p>}
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-white/20 uppercase tracking-widest font-bold mb-4">{new Date(s.date).toLocaleString()}</p>
                    <div className="flex flex-wrap gap-2 justify-end">
                      {s.services.map((svc: string) => (
                        <span key={svc} className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-[10px] font-bold">
                          {svc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-white/5 flex justify-between items-center">
                  <span className="text-xs text-white/30">Referral: <span className="text-white/60">{s.referral}</span></span>
                  <div className="flex gap-4">
                    <a href={`mailto:${s.email}`} className="text-blue-400 text-xs font-bold hover:underline">Reply Now →</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;