'use client';

import clientsData from '@/../public/data/clients.json';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import ContactForm from './ContactForm';

gsap.registerPlugin(ScrollTrigger);

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

  // Get first 5 clients for logo display
  const displayClients = clientsData.slice(0, 5);

  return (
    <section className="w-full overflow-hidden bg-[#F8F8F7] px-4 py-24 lg:px-12 lg:py-30">
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
          <h2
            className="text-center text-[48px] font-medium leading-tight text-[#030712] md:leading-[56px]"
            style={{ fontFamily: 'Nohemi, sans-serif' }}
          >
            <span className="block font-serif italic tracking-tighter">
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
          <div ref={rightCardRef} className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
