'use client';

import clientsData from '@/../public/data/clients.json';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { FaArrowRight, FaLinkedinIn } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const serviceTypes = [
  'UI/UX Design',
  'Mobile Design',
  'Web Design',
  'Product Design',
  'Brand Design',
  'SaaS Design',
  'E-commerce Design',
];

const expertiseAreas = [
  'Automobile Technology',
  'IoT Platforms',
  'Port Automation System',
  'Anty Money Laundering System',
  'Microfinance Application',
];

export default function ContactUsSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);

  const [selectedService, setSelectedService] = useState(
    typeof window !== 'undefined' ? sessionStorage.getItem('contactService') || '' : ''
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

  useEffect(() => {
    // Animate header
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Animate left card
    if (leftCardRef.current) {
      gsap.fromTo(
        leftCardRef.current,
        {
          x: -80,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: leftCardRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Animate right card
    if (rightCardRef.current) {
      gsap.fromTo(
        rightCardRef.current,
        {
          x: 80,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: rightCardRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  const handleServiceSelect = (service: string) => {
    setSelectedService(service);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('contactService', service);
    }
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission locally for now
    console.log('Form submitted:', { ...formData, service: selectedService });
  };

  // Get first 5 clients for logo display
  const displayClients = clientsData.slice(0, 5);

  return (
    <section className="w-full overflow-hidden bg-[#F8F8F7] py-24 lg:py-30 px-4 lg:px-12">
      <div className="mx-auto max-w-[1472px]">
        {/* Header */}
        <div
          ref={headerRef}
          className="mb-10 flex flex-col items-center gap-4 text-center md:mb-16"
        >
          <p
            className="text-sm uppercase tracking-[0.75px] text-primary md:leading-5"
            style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 700 }}
          >
            • CONTACT US
          </p>

          {/* <h2 className="text-[24px] text-[#030712] md:text-[48px] md:leading-[56px]">
            <span
              className="italic"
              style={{ fontFamily: 'Instrument Serif, serif', fontWeight: 400 }}
            >
              Turn Your Product Idea
            </span>
            <br />
            <span style={{ fontFamily: 'Nohemi, sans-serif', fontWeight: 500 }}>
              into a Beautiful Reality
            </span>
          </h2> */}
          <h2
                            className="text-center text-[48px] leading-tight md:leading-[56px] font-medium text-[#030712]"
                            style={{ fontFamily: 'Nohemi, sans-serif' }}
                        >
                            <span className="italic inline font-serif tracking-tighter">
                                Turn Your Product Idea{' '}
                            </span>
                             into a Beautiful Reality
                        </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Left Card - 40% (2 columns) */}
          <div
            ref={leftCardRef}
            className="flex flex-col rounded-3xl border border-[#E8E6E6] bg-gradient-to-br from-white via-white to-[#FFF5F3] p-6 md:p-10 lg:col-span-2"
          >
            {/* Profile Section */}
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center gap-2 md:gap-4">
                <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-full border border-[#E8E6E6] md:h-28 md:w-28">
                  <Image
                    src="/assets/images/Alamin-Hossain.png"
                    alt="Alamin Hossain"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <h3
                    className="text-base leading-tight text-[#030712] md:text-[21px]"
                    style={{ fontFamily: 'Nohemi, sans-serif', fontWeight: 500 }}
                  >
                    Alamin Hossain
                  </h3>
                  <p
                    className="mt-1 text-[12px] leading-tight text-[#766A68] md:text-[13px]"
                    style={{ fontFamily: 'Public Sans, sans-serif' }}
                  >
                    Founder at Userlify
                  </p>
                </div>
              </div>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF5FC] text-[#0A66C2] transition-colors hover:bg-[#0A66C2] hover:text-white"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>

            {/* Description */}
            <p
              className="textsm leading-7 text-[#030712] md:text-[18px]"
              style={{ fontFamily: 'Public Sans, sans-serif' }}
            >
              A growing creative UI/UX design agency dedicated to helping startups
              transform ideas into user-centered digital products.
            </p>

            {/* Expertise Areas */}
            <div className="mb-auto mt-20">
              <ul className="space-y-3">
                {expertiseAreas.map((area, index) => (
                  <li
                    key={index}
                    className="text-sm italic leading-7 text-[#766A68] md:text-[18px]"
                    style={{ fontFamily: 'Public Sans, sans-serif' }}
                  >
                    • {area}
                  </li>
                ))}
              </ul>
            </div>

            {/* Client Logos */}
            <div className="flex flex-wrap items-center gap-6 border-t border-[#E8E6E6] pt-8">
              {displayClients.map((client) => (
                <div key={client.id} className="relative h-4 w-auto md:h-8">
                  <Image
                    src={client.logo_url}
                    alt={client.name}
                    width={80}
                    height={32}
                    className="h-full w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Form - 60% (3 columns) */}
          <div
            ref={rightCardRef}
            className="flex flex-col rounded-3xl border border-[#E8E6E6] bg-white p-10 lg:col-span-3"
          >
            {/* Form Header */}
            <div className="mb-8 text-center">
              <h3
                className="text-xl leading-tight text-primary md:text-[30px]"
                style={{ fontFamily: 'Nohemi, sans-serif', fontWeight: 400 }}
              >
                Your Future
              </h3>
              <h3
                className="text-xl leading-tight text-[#030712] md:text-[30px]"
                style={{ fontFamily: 'Nohemi, sans-serif', fontWeight: 400 }}
              >
                Website Starts Here
              </h3>
            </div>

            {/* Service Type Buttons */}
            <div className="mb-10 flex flex-wrap items-center justify-center gap-2 md:justify-start md:gap-3">
              {serviceTypes.map((service) => (
                <button
                  key={service}
                  type="button"
                  onClick={() => handleServiceSelect(service)}
                  className={`rounded-full border px-5 py-2 text-sm transition-all md:px-9 md:py-4 md:text-[18px] ${
                    selectedService === service
                      ? 'border-primary bg-primary text-white'
                      : 'border-[#E8E6E6] bg-[#F8F8F7] text-[#030712] hover:border-primary/50'
                  }`}
                  style={{ fontFamily: 'Public Sans, sans-serif' }}
                >
                  {service}
                </button>
              ))}
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Name Field - Full Width */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-sm text-[#32201D] md:text-[16px]"
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
                  className="rounded-lg border border-[#D8D5D4] bg-[#F8F8F7] px-3 py-2 text-sm text-[#766A68] transition-colors placeholder:text-[#766A68] focus:border-primary focus:outline-none md:px-5 md:py-4 md:text-[18px]"
                  style={{ fontFamily: 'Public Sans, sans-serif' }}
                  required
                />
              </div>

              {/* Email and Phone - Two Column */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm text-[#32201D] md:text-[16px]"
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
                    className="rounded-lg border border-[#D8D5D4] bg-[#F8F8F7] px-3 py-2 text-sm text-[#766A68] transition-colors placeholder:text-[#766A68] focus:border-primary focus:outline-none md:px-5 md:py-4 md:text-[18px]"
                    style={{ fontFamily: 'Public Sans, sans-serif' }}
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="phone"
                    className="text-sm text-[#32201D] md:text-[16px]"
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
                    className="rounded-lg border border-[#D8D5D4] bg-[#F8F8F7] px-3 py-2 text-sm text-[#766A68] transition-colors placeholder:text-[#766A68] focus:border-primary focus:outline-none md:px-5 md:py-4 md:text-[18px]"
                    style={{ fontFamily: 'Public Sans, sans-serif' }}
                    required
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-sm text-[#32201D] md:text-[16px]"
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
                  className="resize-none rounded-lg border border-[#D8D5D4] bg-[#F8F8F7] px-3 py-2 text-sm text-[#766A68] transition-colors placeholder:text-[#766A68] focus:border-primary focus:outline-none md:px-5 md:py-4 md:text-[18px]"
                  style={{ fontFamily: 'Public Sans, sans-serif' }}
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="flex flex-col items-center gap-4 pt-6">
                <button
                  type="submit"
                  className="flex w-fit items-center gap-3 rounded-full bg-primary px-4 py-2 text-sm text-white transition-all hover:bg-primary-600 hover:shadow-lg active:scale-95 md:px-8 md:py-4 md:text-[18px]"
                  style={{ fontFamily: 'Public Sans, sans-serif' }}
                >
                  Send Message
                  <FaArrowRight size={16} />
                </button>

                {/* Success Message */}
                <p
                  className="text-sm text-[#32201D] md:text-[16px]"
                  style={{ fontFamily: 'Public Sans, sans-serif' }}
                >
                  We'll get back to you within 12 hours!
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
