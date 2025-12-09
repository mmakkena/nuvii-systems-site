'use client';

import { useState } from 'react';

export default function DemoForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // HubSpot Forms API configuration
      const HUBSPOT_PORTAL_ID = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;
      const HUBSPOT_FORM_ID = process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID;

      if (!HUBSPOT_PORTAL_ID || !HUBSPOT_FORM_ID) {
        console.error('HubSpot configuration missing. Please set NEXT_PUBLIC_HUBSPOT_PORTAL_ID and NEXT_PUBLIC_HUBSPOT_FORM_ID in .env.local');
        // For development, just show success message
        setSubmitted(true);
        setIsSubmitting(false);
        return;
      }

      // Split name into first and last name
      const nameParts = formData.name.trim().split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || firstName;

      // Submit to HubSpot Forms API
      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fields: [
              {
                objectTypeId: "0-1",
                name: "firstname",
                value: firstName
              },
              {
                objectTypeId: "0-1",
                name: "lastname",
                value: lastName
              },
              {
                objectTypeId: "0-1",
                name: "email",
                value: formData.email
              },
              {
                objectTypeId: "0-1",
                name: "company",
                value: formData.organization
              },
              {
                objectTypeId: "0-1",
                name: "jobtitle",
                value: formData.role
              }
            ],
            context: {
              pageUri: typeof window !== 'undefined' ? window.location.href : '',
              pageName: "Enterprise Demo Request - nuviisystems.com"
            }
          })
        }
      );

      if (response.ok) {
        console.log('Demo request submitted successfully to HubSpot');
        setSubmitted(true);
      } else {
        const error = await response.json();
        console.error('HubSpot submission failed:', error);
        alert('Submission failed. Please try again or contact us directly at support@nuvii.ai');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('An error occurred. Please try again or contact us directly at support@nuvii.ai');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="text-green-600 text-5xl mb-4">✓</div>
        <h3 className="text-2xl font-bold text-nuvii-text mb-4">
          Thanks — your request has been received.
        </h3>
        <p className="text-lg text-foreground-accent mb-6">
          Our team will review your request and follow up to schedule an enterprise-focused demo covering deployment, security, and workflow fit.
        </p>
        <p className="text-foreground-accent">
          While you wait, explore evaluation APIs →{' '}
          <a href="https://nuvii.ai" target="_blank" rel="noopener noreferrer" className="text-nuvii-blue hover:underline font-semibold">
            nuvii.ai
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
      <div className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-nuvii-text mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nuvii-blue focus:border-transparent outline-none transition-all"
            placeholder="Your full name"
          />
        </div>

        {/* Work Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-nuvii-text mb-2">
            Work Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nuvii-blue focus:border-transparent outline-none transition-all"
            placeholder="you@company.com"
          />
        </div>

        {/* Organization */}
        <div>
          <label htmlFor="organization" className="block text-sm font-semibold text-nuvii-text mb-2">
            Organization *
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            required
            value={formData.organization}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nuvii-blue focus:border-transparent outline-none transition-all"
            placeholder="Your organization name"
          />
        </div>

        {/* Role */}
        <div>
          <label htmlFor="role" className="block text-sm font-semibold text-nuvii-text mb-2">
            Role *
          </label>
          <select
            id="role"
            name="role"
            required
            value={formData.role}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nuvii-blue focus:border-transparent outline-none transition-all bg-white"
          >
            <option value="">Select your role</option>
            <option value="engineer">Engineer</option>
            <option value="cdi">CDI</option>
            <option value="rcm">RCM</option>
            <option value="cto">CTO</option>
            <option value="security">Security</option>
            <option value="exec">Executive</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Request Enterprise Demo'}
        </button>
      </div>
    </form>
  );
}
