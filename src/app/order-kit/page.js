'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowLeft, 
  faUserDoctor, 
  faCheckCircle, 
  faShieldHalved,
  faBoxOpen,
  faSpinner,
  faHouse,
  faCommentDots
} from '@fortawesome/free-solid-svg-icons';

const SAMPLE_PACKAGES = [
  {
    id: 'starter',
    name: 'Post-Op Emergency Pack',
    qty: '3x 50ml Bottles',
    desc: 'Ideal for critical care triage and initial patient trial evaluation.',
    tag: 'MOST REQUESTED'
  },
  {
    id: 'clinic-batch',
    name: 'Full Clinical Practice Batch',
    qty: '10x 50ml Bottles + Pipettes',
    desc: 'For multi-practitioner surgical centers and emergency hospitals.',
    tag: 'CLINIC LEVEL'
  }
];

export default function OrderKitPage() {
  const [selectedPack, setSelectedPack] = useState('starter');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    practitionerName: '',
    clinicName: '',
    email: '',
    shippingAddress: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate clinical order processing delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  // Replace with your support phone number in international format (e.g., 1234567890)
  const whatsappNumber = '1234567890'; 
  const whatsappMessage = encodeURIComponent(
    `Hello, I have a question regarding my clinical sample order for ${formData.clinicName || 'my clinic'}.`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <main className="min-h-screen bg-[#0C0D0E] text-white py-12 px-4 sm:px-6 relative overflow-hidden font-sans">
      {/* Ambient background glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[#0052CC]/15 blur-[120px] top-0 left-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        
        {/* Back navigation */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition text-xs sm:text-sm mb-8"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>Back to Product Overview</span>
        </Link>

        {submitted ? (
          /* Thank You & Order Confirmation State */
          <div className="p-8 sm:p-12 rounded-3xl bg-[#121417] border border-[#FF7A00]/40 text-center space-y-6 shadow-2xl animate-fade-in">
            
            {/* Circular Checkmark Badge */}
            <div className="relative inline-flex items-center justify-center my-2">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#FF7A00]/10 border-2 border-[#FF7A00] flex items-center justify-center animate-bounce">
                <FontAwesomeIcon icon={faCheckCircle} className="text-[#FF7A00] text-4xl sm:text-5xl" />
              </div>
            </div>

            <div className="space-y-2">
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">Order Successfully Placed!</h1>
              <p className="text-gray-300 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
                Thank you, <span className="text-white font-semibold">{formData.practitionerName}</span>. Your sample request for <span className="text-[#FF7A00] font-semibold">{formData.clinicName}</span> has been verified and dispatched to our logistics team.
              </p>
            </div>

            {/* Order Summary Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#181B20] border border-white/5 max-w-md mx-auto text-left text-xs text-gray-400 space-y-2">
              <p><strong className="text-gray-200">Selected Package:</strong> {SAMPLE_PACKAGES.find(p => p.id === selectedPack)?.name}</p>
              <p><strong className="text-gray-200">Destination Address:</strong> {formData.shippingAddress}</p>
              <p><strong className="text-gray-200">Confirmation Sent To:</strong> {formData.email}</p>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/" 
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 font-bold text-sm transition flex items-center justify-center gap-2 border border-white/10"
              >
                <FontAwesomeIcon icon={faHouse} />
                <span>Return to Home</span>
              </Link>

              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-sm transition flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20"
              >
                <FontAwesomeIcon icon={faCommentDots} className="text-lg" />
                <span>Questions? Chat on WhatsApp</span>
              </a>
            </div>

          </div>
        ) : (
          /* Order Form State */
          <div className="p-6 sm:p-10 rounded-3xl bg-[#121417]/90 border border-white/10 backdrop-blur-xl shadow-2xl space-y-8">
            
            {/* Form Header */}
            <div className="space-y-2 border-b border-white/10 pb-6">
              <div className="inline-flex items-center gap-2 text-[#0052CC] font-mono text-xs font-bold uppercase tracking-wider">
                <FontAwesomeIcon icon={faShieldHalved} />
                <span>Veterinary Practitioner Verification</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold">Request Clinical Starter Kit</h1>
              <p className="text-gray-400 text-xs sm:text-sm">
                Complimentary sample kits reserved exclusively for licensed DVMs and accredited veterinary practices.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Package Selection */}
              <div className="space-y-3">
                <label className="text-xs font-mono text-gray-300 uppercase tracking-wider block">
                  Select Evaluation Kit <span className="text-[#FF7A00]">*</span>
                </label>
                <div className="grid sm:grid-cols-2 gap-4">
                  {SAMPLE_PACKAGES.map((pkg) => (
                    <div 
                      key={pkg.id}
                      onClick={() => setSelectedPack(pkg.id)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                        selectedPack === pkg.id 
                          ? 'bg-[#1F232B] border-[#FF7A00] shadow-[0_0_20px_rgba(255,122,0,0.15)]' 
                          : 'bg-[#181B20] border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <FontAwesomeIcon icon={faBoxOpen} className={selectedPack === pkg.id ? 'text-[#FF7A00]' : 'text-gray-500'} />
                          <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-white/10 text-gray-300">
                            {pkg.tag}
                          </span>
                        </div>
                        <h2 className="font-bold text-sm text-white">{pkg.name}</h2>
                        <p className="text-xs font-semibold text-[#0052CC] my-1">{pkg.qty}</p>
                        <p className="text-[11px] text-gray-400 leading-relaxed">{pkg.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Practitioner Credentials */}
              <div>
                <label className="text-xs font-semibold text-gray-300 block mb-1">
                  Practitioner Name (DVM) <span className="text-[#FF7A00]">*</span>
                </label>
                <input 
                  type="text" 
                  required 
                  placeholder="Dr. Jane Doe, DVM"
                  value={formData.practitionerName}
                  onChange={(e) => setFormData({...formData, practitionerName: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-[#181B20] border border-white/10 text-sm text-white focus:outline-none focus:border-[#0052CC] transition"
                />
              </div>

              {/* Practice Details */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-gray-300 block mb-1">
                    Clinic / Hospital Name <span className="text-[#FF7A00]">*</span>
                  </label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Metropolitan Veterinary Hospital"
                    value={formData.clinicName}
                    onChange={(e) => setFormData({...formData, clinicName: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-[#181B20] border border-white/10 text-sm text-white focus:outline-none focus:border-[#0052CC] transition"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-300 block mb-1">
                    Work Email Address <span className="text-[#FF7A00]">*</span>
                  </label>
                  <input 
                    type="email" 
                    required 
                    placeholder="dr.doe@metrovets.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-[#181B20] border border-white/10 text-sm text-white focus:outline-none focus:border-[#0052CC] transition"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-300 block mb-1">
                  Clinic Shipping Address <span className="text-[#FF7A00]">*</span>
                </label>
                <textarea 
                  required 
                  rows={2}
                  placeholder="100 Medical Plaza, Suite 400, City, State, ZIP"
                  value={formData.shippingAddress}
                  onChange={(e) => setFormData({...formData, shippingAddress: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-[#181B20] border border-white/10 text-sm text-white focus:outline-none focus:border-[#0052CC] transition resize-none"
                />
              </div>

              {/* Order Submit Button */}
              <button 
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-[#FF7A00] hover:bg-[#FF7A00]/90 font-bold transition shadow-lg shadow-[#FF7A00]/25 flex items-center justify-center gap-2 text-base active:scale-98 disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <FontAwesomeIcon icon={faSpinner} className="animate-spin text-lg" />
                    <span>Processing Order...</span>
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faUserDoctor} />
                    <span>Submit Clinical Sample Order</span>
                  </>
                )}
              </button>

            </form>
          </div>
        )}

      </div>
    </main>
  );
}