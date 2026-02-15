'use client';

import { ArrowUpRight } from '@/components/icons';
import SliderSection from '@/components/sections/SliderSection';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const floatingTags = [
  { text: 'App Design', position: 'left-[27%] top-[12%]' },
  { text: 'Development', position: 'right-[42%] top-[12%]' },
  { text: 'Web Design', position: 'right-[23%] top-[30%]' },
];

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const tagsRef = useRef<HTMLDivElement[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);
  const tagFactorsRef = useRef<{ x: number; y: number; duration: number }[]>([]);

  // Refs for the new background orbs
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(headingRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      // Tags animation with stagger
      gsap.from(tagsRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        delay: 0.3,
      });

      //  Background Orbs Floating Animation (Moving Gradient)
      gsap.to(orb1Ref.current, {
        x: -50,
        y: 50,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to(orb2Ref.current, {
        x: 50,
        y: -50,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1,
      });

      // CTA animation
      gsap.from(ctaRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.6,
      });

      if (tagFactorsRef.current.length === 0) {
        tagFactorsRef.current = [
          { x: 0.07, y: 0.05, duration: 0.45 }, // App Design: follows
          { x: -0.06, y: 0.08, duration: 0.32 }, // Development: opposes X, faster
          { x: 0.05, y: -0.07, duration: 0.58 }, // Web Design: opposes Y, slower
        ];
      }

      const handleMouseMove = (e: MouseEvent) => {
        if (!heroRef.current) return;

        const rect = heroRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const offsetX = e.clientX - centerX;
        const offsetY = e.clientY - centerY;

        tagsRef.current.forEach((tag, index) => {
          if (!tag) return;
          const factors = tagFactorsRef.current[index] ?? { x: 0.05, y: 0.05, duration: 0.4 };
          gsap.to(tag, {
            x: offsetX * factors.x,
            y: offsetY * factors.y,
            duration: factors.duration,
            ease: 'power2.out',
            overwrite: 'auto',
          });
        });
      };

      const handleMouseLeave = () => {
        tagsRef.current.forEach((tag) => {
          if (!tag) return;
          gsap.to(tag, {
            x: 0,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            overwrite: 'auto',
          });
        });
      };

      heroRef.current?.addEventListener('mousemove', handleMouseMove);
      heroRef.current?.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        heroRef.current?.removeEventListener('mousemove', handleMouseMove);
        heroRef.current?.removeEventListener('mouseleave', handleMouseLeave);
      };
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="bg-white relative overflow-hidden w-full pb-16 pt-11 md:pb-18  md:pt-24 px-0">
      <div>
        <div ref={orb1Ref} className="absolute -top-[20%] -right-[10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full opacity-40 pointer-events-none" 
        style={{
          background: '#E86A54',
          filter: 'blur(120px)',
          transform: 'translateZ(0)',
        }}
        />

        {/* Bottom Left Moving Gradient */}
        <div
          ref={orb2Ref}
          className="absolute -bottom-[20%] -left-[10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full opacity-40 pointer-events-none"
          style={{
            background: '#E86A54',
            filter: 'blur(120px)',
            transform: 'translateZ(0)',
          }}
        />

        <Container className="relative">
          <div className="flex min-h-[430px] md:min-h-[492px] flex-col items-center justify-center mx-auto text-center">
            {/* Floating Tags */}
            <div className="absolute inset-0 hidden lg:block">
              {floatingTags.map((tag, index) => (
                <div
                  key={tag.text}
                  ref={(el) => {
                    if (el) tagsRef.current[index] = el;
                  }}
                  className={`tag absolute z-30 ${tag.position}`}
                >
                  {tag.text}
                </div>
              ))}
            </div>

            {/* Main heading */}
            <h1
              ref={headingRef}
              className="max-w-4xl font-heading text-display-1 font-medium leading-tight text-accent-950 md:text-display-1"
            >
              Design Agency <span className="md:block">Turning Startup Ideas </span>
              <span className="md:block">
                into <span className="font-serif italic text-primary">Real Products</span>
              </span>
            </h1>

            {/* CTA Buttons */}
            <div ref={ctaRef} className="mt-8 md:mt-12 flex flex-col gap-4 sm:flex-row sm:gap-6">
              <Button href="/get-quote" variant="primary" size="lg">
                Start Your Project
                <ArrowUpRight className="h-5 w-5" />
              </Button>
              <Button href="/case-study" variant="secondary" size="lg">
                View Our Work
                <ArrowUpRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </Container>
      </div>
       <SliderSection />

    </section>
  );
}




