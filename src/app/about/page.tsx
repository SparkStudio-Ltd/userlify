'use client';

import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { AboutTopSection, AboutWhyChooseSection, CTASection, OurTeamSection } from '@/components/sections';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

export default function AboutPage() {
  const aboutTopRef = useRef<HTMLDivElement>(null);
  const ourTeamRef = useRef<HTMLDivElement>(null);
  const aboutWhyChooseRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate AboutTopSection
    if (aboutTopRef.current) {
      gsap.fromTo(
        aboutTopRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
        }
      );
    }

    // Animate OurTeamSection
    if (ourTeamRef.current) {
      gsap.fromTo(
        ourTeamRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          ease: 'power3.out',
        }
      );
    }

    // Animate AboutWhyChooseSection
    if (aboutWhyChooseRef.current) {
      gsap.fromTo(
        aboutWhyChooseRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.4,
          ease: 'power3.out',
        }
      );
    }

    // Animate CTASection
    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.6,
          ease: 'power3.out',
        }
      );
    }
  }, []);

  return (
    <>
      <Header />
      <div ref={aboutTopRef}>
        <AboutTopSection />
      </div>
      <div ref={ourTeamRef}>
        <OurTeamSection />
      </div>
      <div ref={aboutWhyChooseRef}>
        <AboutWhyChooseSection />
      </div>
      <div ref={ctaRef}>
        <CTASection />
      </div>
      <Footer />
    </>
  );
}
