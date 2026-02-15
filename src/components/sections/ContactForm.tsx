'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const serviceTypes = [
  'UI/UX Design',
  'Mobile Design',
  'Web Design',
  'Product Design',
  'Brand Design',
  'SaaS Design',
  'E-commerce Design',
];

export default function ContactForm() {
  const router = useRouter();

  const [selectedServices, setSelectedServices] = useState<string[]>(
    typeof window !== 'undefined'
      ? JSON.parse(sessionStorage.getItem('contactServices') || '[]')
      : []
  );
  const [formData, setFormData] = useState({
    name:
      typeof window !== 'undefined' ? sessionStorage.getItem('contactName') || '' : '',
    email:
      typeof window !== 'undefined' ? sessionStorage.getItem('contactEmail') || '' : '',
    phone:
      typeof window !== 'undefined' ? sessionStorage.getItem('contactPhone') || '' : '',
    message:
      typeof window !== 'undefined' ? sessionStorage.getItem('contactMessage') || '' : '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleServiceSelect = (service: string) => {
    setSelectedServices((prev) => {
      const isSelected = prev.includes(service);
      const updated = isSelected ? prev.filter((s) => s !== service) : [...prev, service];

      if (typeof window !== 'undefined') {
        sessionStorage.setItem('contactServices', JSON.stringify(updated));
      }

      return updated;
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (typeof window !== 'undefined') {
      sessionStorage.setItem(
        `contact${name.charAt(0).toUpperCase() + name.slice(1)}`,
        value
      );
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate that at least one service is selected
    if (selectedServices.length === 0) {
      setErrorMessage('Please select at least one service type');
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Call our internal API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          services: selectedServices,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      // Success - clear form and session storage
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setSelectedServices([]);

      if (typeof window !== 'undefined') {
        sessionStorage.removeItem('contactName');
        sessionStorage.removeItem('contactEmail');
        sessionStorage.removeItem('contactPhone');
        sessionStorage.removeItem('contactMessage');
        sessionStorage.removeItem('contactServices');
      }

      // Redirect to thank-you page after a brief delay
      setTimeout(() => {
        router.push('/thank-you');
      }, 1500);
    } catch (error) {
      setSubmitStatus('error');
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('Failed to send message. Please try again later.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col rounded-2xl border border-[#E8E6E6] bg-white p-6 sm:rounded-3xl sm:p-8 md:p-10">
      {/* Form Header */}
      <div className="mb-6 text-center sm:mb-8">
        <h3
          className="text-[24px] leading-tight text-primary sm:text-[28px] md:text-[30px]"
          style={{ fontFamily: 'Nohemi, sans-serif', fontWeight: 400 }}
        >
          Your Future
        </h3>
        <h3
          className="text-[24px] leading-tight text-[#030712] sm:text-[28px] md:text-[30px]"
          style={{ fontFamily: 'Nohemi, sans-serif', fontWeight: 400 }}
        >
          Website Starts Here
        </h3>
      </div>

      {/* Service Type Buttons */}
      <div className="mb-6 flex flex-wrap justify-center gap-2 sm:mb-8 sm:gap-3 md:mb-10 md:justify-start">
        {serviceTypes.map((service) => (
          <button
            key={service}
            type="button"
            onClick={() => handleServiceSelect(service)}
            className={`rounded-full border px-4 py-3 text-[14px] transition-all duration-300 ease-in-out sm:px-6 sm:py-4 sm:text-[16px] md:px-9 md:text-[18px] ${
              selectedServices.includes(service)
                ? 'border-primary bg-primary text-white'
                : 'border-[#E8E6E6] bg-[#F8F8F7] text-[#030712] hover:border-primary hover:bg-primary hover:text-white'
            }`}
            style={{ fontFamily: 'Public Sans, sans-serif' }}
          >
            {service}
          </button>
        ))}
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* Name Field */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-[16px] text-[#32201D]"
            style={{ fontFamily: 'Public Sans, sans-serif' }}
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="John Smith"
            className="rounded-lg border border-[#D8D5D4] bg-[#F8F8F7] px-5 py-4 text-[18px] text-[#766A68] transition-colors placeholder:text-[#766A68] focus:border-primary focus:outline-none"
            style={{ fontFamily: 'Public Sans, sans-serif' }}
            required
          />
        </div>

        {/* Email and Phone */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-[16px] text-[#32201D]"
              style={{ fontFamily: 'Public Sans, sans-serif' }}
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="john@example.com"
              className="rounded-lg border border-[#D8D5D4] bg-[#F8F8F7] px-5 py-4 text-[18px] text-[#766A68] transition-colors placeholder:text-[#766A68] focus:border-primary focus:outline-none"
              style={{ fontFamily: 'Public Sans, sans-serif' }}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="phone"
              className="text-[16px] text-[#32201D]"
              style={{ fontFamily: 'Public Sans, sans-serif' }}
            >
              Phone/ Whatsapp
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="(713) 123-4567"
              className="rounded-lg border border-[#D8D5D4] bg-[#F8F8F7] px-5 py-4 text-[18px] text-[#766A68] transition-colors placeholder:text-[#766A68] focus:border-primary focus:outline-none"
              style={{ fontFamily: 'Public Sans, sans-serif' }}
              required
            />
          </div>
        </div>

        {/* Message Field */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="text-[16px] text-[#32201D]"
            style={{ fontFamily: 'Public Sans, sans-serif' }}
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="How can we assist you?"
            rows={5}
            className="resize-none rounded-lg border border-[#D8D5D4] bg-[#F8F8F7] px-5 py-4 text-[18px] text-[#766A68] transition-colors placeholder:text-[#766A68] focus:border-primary focus:outline-none"
            style={{ fontFamily: 'Public Sans, sans-serif' }}
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex flex-col items-center gap-4 pt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex w-fit items-center gap-3 rounded-full bg-primary px-8 py-4 text-[18px] text-white transition-all hover:bg-primary-600 hover:shadow-lg active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
            style={{ fontFamily: 'Public Sans, sans-serif' }}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
            {!isSubmitting && <FaArrowRight size={16} />}
          </button>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <p
              className="text-[16px] text-green-600"
              style={{ fontFamily: 'Public Sans, sans-serif' }}
            >
              ✓ Message sent successfully! We'll get back to you within 12 hours.
            </p>
          )}
          {submitStatus === 'error' && (
            <p
              className="text-[16px] text-red-600"
              style={{ fontFamily: 'Public Sans, sans-serif' }}
            >
              ✗ {errorMessage}
            </p>
          )}
          {submitStatus === 'idle' && !isSubmitting && (
            <p
              className="text-[16px] text-[#32201D]"
              style={{ fontFamily: 'Public Sans, sans-serif' }}
            >
              We'll get back to you within 12 hours!
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
