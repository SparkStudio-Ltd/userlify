'use client';

import gsap from 'gsap';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import ContactForm from './ContactForm';

const locations = [
  { id: 1, city: 'Philadelphia, USA' },
  { id: 2, city: 'Uttara, Dhaka' },
];

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    icon: '/assets/icons/facebook_icon.svg',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com',
    icon: '/assets/icons/twitter_icon.svg',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: '/assets/icons/linkedin_icon.svg',
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: '/assets/icons/instagram_icon.svg',
  },
];

export default function ContactPageContent() {
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

  return (
    <main className="w-full overflow-hidden bg-white px-4 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-32 md:px-8 md:pb-20 md:pt-40 lg:px-12 lg:pb-[120px] lg:pt-[216px]">
      {/* Two Column Layout */}
      <div className="mx-auto grid w-full max-w-[1472px] grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-5">
        {/* Left Card - 40% (2 columns) */}
        <div ref={leftCardRef} className="flex flex-col lg:col-span-2">
          <div
            ref={headerRef}
            className="flex max-w-full flex-col gap-4 lg:max-w-[520px]"
          >
            <p
              className="text-sm uppercase tracking-[0.75px] text-primary"
              style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 700 }}
            >
              • CONTACT
            </p>

            <h2
              className="text-6xl leading-[1.15] tracking-[-0.5px] text-[#2A0E63] lg:leading-[56px]"
              style={{ fontFamily: 'Nohemi, sans-serif', fontWeight: 500 }}
            >
              Let's Take the{' '}
              <span className="font-serif italic md:block">First Step Together</span>
            </h2>
          </div>

          <div className="mt-8 grid gap-6 sm:mt-10 sm:gap-8 md:mt-12 md:gap-10 lg:mt-14">
            <div className="flex gap-6 sm:grid-cols-2 sm:gap-8 md:grid md:gap-10">
              {locations.map((location, index) => (
                <div key={location.id} className="flex flex-col gap-3">
                  <div className="flex h-10 w-10 items-center justify-center">
                    <Image
                      src="/assets/icons/locationContact.svg"
                      alt=""
                      width={40}
                      height={40}
                    />
                  </div>
                  <div>
                    <p
                      className="text-[21px] text-[#030712]"
                      style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 600 }}
                    >
                      Location {index + 1}
                    </p>
                    <p
                      className="mt-1 text-[16px] leading-6 text-[#030712]"
                      style={{ fontFamily: 'Public Sans, sans-serif' }}
                    >
                      {location.city}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-1">
              <div className="flex flex-col gap-3">
                <div className="flex h-10 w-10 items-center justify-center">
                  <Image
                    src="/assets/icons/mailContact.svg"
                    alt=""
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <p
                    className="text-[21px] text-[#030712]"
                    style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 600 }}
                  >
                    Email
                  </p>
                  <p
                    className="mt-1 text-[16px] leading-6 text-[#030712]"
                    style={{ fontFamily: 'Public Sans, sans-serif' }}
                  >
                    support@userlify.com
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-8">
                <p
                  className="text-[21px] text-[#030712]"
                  style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 600 }}
                >
                  Social Media
                </p>
                <div className="flex items-center gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-11 w-11 items-center justify-center rounded-xl border border-[#D9DADE] bg-[#ECEDEE] transition-colors hover:border-transparent hover:bg-[#E86A54]"
                    >
                      <Image
                        src={social.icon}
                        alt={social.name}
                        width={20}
                        height={20}
                        className="brightness-0 transition-all group-hover:brightness-0 group-hover:invert"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form - 60% (3 columns) */}
        <div ref={rightCardRef} className="lg:col-span-3">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
