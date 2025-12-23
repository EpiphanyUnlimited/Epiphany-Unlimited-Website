import React from 'react';

interface LegalOverlayProps {
  type: 'privacy' | 'terms';
  onClose: () => void;
}

const LegalOverlay: React.FC<LegalOverlayProps> = ({ type, onClose }) => {
  return (
    <div className="fixed inset-0 z-[150] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4">
      <div className="glass-card w-full max-w-3xl max-h-[80vh] overflow-y-auto rounded-[2.5rem] p-8 sm:p-12 relative border-white/10">
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {type === 'privacy' ? (
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-geist font-light mb-8">Privacy Policy</h2>
            <p className="text-white/60 mb-6 italic">Effective Date: January 1, 2024</p>
            <div className="space-y-8 text-white/70">
              <section>
                <h3 className="text-white font-semibold mb-2 uppercase tracking-widest text-xs">Information We Collect</h3>
                <p>We collect information that you provide directly to us when you use our services, including contact information and strategic inquiries. This is used solely to provide and improve our consulting excellence.</p>
              </section>
              <section>
                <h3 className="text-white font-semibold mb-2 uppercase tracking-widest text-xs">How We Use Your Data</h3>
                <p>Your data is processed to generate strategic insights, manage our engagement, and ensure the security of our FormWiz and AI tools. We never sell your personal information to third parties.</p>
              </section>
              <section>
                <h3 className="text-white font-semibold mb-2 uppercase tracking-widest text-xs">Security</h3>
                <p>We implement industry-standard administrative, technical, and physical safeguards to protect the confidentiality and integrity of your information.</p>
              </section>
            </div>
          </div>
        ) : (
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-geist font-light mb-8">Terms of Service</h2>
            <p className="text-white/60 mb-6 italic">Last Updated: January 1, 2024</p>
            <div className="space-y-8 text-white/70">
              <section>
                <h3 className="text-white font-semibold mb-2 uppercase tracking-widest text-xs">1. Engagement</h3>
                <p>By accessing the Epiphany Unlimited platform, you agree to be bound by these terms. Our services are provided as strategic advice; final business implementation remains the responsibility of the client.</p>
              </section>
              <section>
                <h3 className="text-white font-semibold mb-2 uppercase tracking-widest text-xs">2. Intellectual Property</h3>
                <p>All methodologies, frameworks, and tools provided by Epiphany Unlimited remain the exclusive intellectual property of the firm. Clients are granted a limited license for internal use only.</p>
              </section>
              <section>
                <h3 className="text-white font-semibold mb-2 uppercase tracking-widest text-xs">3. Limitation of Liability</h3>
                <p>Epiphany Unlimited shall not be liable for any consequential or indirect damages arising from the use of our consulting tools or generated strategies.</p>
              </section>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LegalOverlay;