'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  '1.Discovery',
  '2.Strategy',
  '3.Design',
  '4.Development',
  '5.Testing',
  '6.Launch',
  '7.Get support',
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current || !stepsContainerRef.current) return;

      const container = stepsContainerRef.current;
      const containerHeight = container.scrollHeight;
      const sectionHeight = 860;

      // Start position: container is below, so first step appears at bottom
      const startY = sectionHeight - 150; // First step starts near bottom
      // End position: last step exits at top
      const endY = -(containerHeight - 150);
      const totalDistance = startY - endY;

      // Set initial position - steps start below
      gsap.set(container, { y: startY });

      // Animate from bottom to top
      gsap.to(container, {
        y: endY,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${totalDistance * 1.2}`,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });
    },
    { scope: sectionRef, dependencies: [] }
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#030712]"
      style={{ height: '860px' }}
    >
      <div className="relative h-full w-full">
        <div
          ref={stepsContainerRef}
          className="absolute left-1/2 top-0 flex -translate-x-1/2 flex-col items-center gap-2"
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className="whitespace-nowrap font-heading text-primary"
              style={{
                fontSize: 'clamp(3rem, 7.5vw, 7.5rem)',
                lineHeight: 1.2,
              }}
            >
              {step}
            </div>
          ))}
        </div>
      </div>

      {/* Fade gradient overlays */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[45%] bg-gradient-to-b from-[#000000] via-[#000000] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[45%] bg-gradient-to-t from-[#000000] via-[#000000] to-transparent" />
    </section>
  );
}
