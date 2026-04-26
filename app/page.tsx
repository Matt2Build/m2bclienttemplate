'use client';

import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [demoMode, setDemoMode] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      const data = await res.json();
      
      if (data.demo) {
        setDemoMode(true);
      }
      
      setSubmitted(true);
    } catch (err) {
      console.error('Submit failed:', err);
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-dirt via-brand-earth/90 to-brand-dark text-white">
        <div className="text-center p-8 max-w-2xl">
          <h1 className="text-5xl font-bold mb-6">
            Matt2Build Client Template
          </h1>
          <p className="text-xl text-gray-300 mb-4">
            Next.js 14 + Tailwind + Supabase Starter
          </p>
          <p className="text-gray-400">
            A ready-to-use foundation for booking systems, dashboards, and business websites.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-brand-dark mb-12 text-center">
            Template Features
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-brand-dark mb-2">Next.js 14</h3>
              <p className="text-gray-600">App Router with TypeScript and API routes pre-configured.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-brand-dark mb-2">Supabase Ready</h3>
              <p className="text-gray-600">Client setup for auth, database, and real-time subscriptions.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-brand-dark mb-2">Tailwind + UI</h3>
              <p className="text-gray-600">Utility-first CSS with custom brand colors and components.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-brand-dark mb-2">API Routes</h3>
              <p className="text-gray-600">Example booking endpoints with error handling and validation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Booking Form */}
      <section className="py-24 bg-white">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-brand-dark mb-4 text-center">
            Demo Booking Form
          </h2>
          <p className="text-gray-500 text-center mb-8">
            This form works out of the box. Configure Supabase to save real data.
          </p>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                {demoMode ? 'Demo Submission Received' : 'Booking Submitted!'}
              </h3>
              <p className="text-green-700">
                {demoMode 
                  ? 'In demo mode, no data is saved. Add Supabase env vars to enable real storage.'
                  : 'Your booking has been saved to the database.'
                }
              </p>
              <button 
                onClick={() => { setSubmitted(false); setDemoMode(false); }}
                className="mt-4 btn-secondary"
              >
                Submit Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                  placeholder="555-1234"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service</label>
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="consultation">Consultation</option>
                  <option value="website">Website Build</option>
                  <option value="workflow">Workflow Setup</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                  rows={3}
                  placeholder="Any additional details..."
                />
              </div>
              
              <button type="submit" className="w-full btn-primary py-4">
                Submit Booking
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-brand-dark text-white text-center">
        <p className="text-gray-400">
          Built by <a href="https://matt2build.com" className="text-brand-gold hover:underline">Matt2Build</a>
        </p>
      </footer>
    </main>
  );
}
