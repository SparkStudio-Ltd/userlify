'use client';

import { ArrowUpRight } from '@/components/icons';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const floatingTags = [
  { text: 'App Design', position: 'left-[27%] top-[20%]' },
  { text: 'Development', position: 'right-[42%] top-[22%]' },
  { text: 'Web Design', position: 'right-[23%] top-[33%]' },
];

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const tagsRef = useRef<HTMLDivElement[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);

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

      // Floating animation for tags
      tagsRef.current.forEach((tag, index) => {
        gsap.to(tag, {
          y: 'random(-8, 8)',
          duration: 'random(2, 3)',
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: index * 0.2,
        });
      });

      // CTA animation
      gsap.from(ctaRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.6,
      });

      // Anti-magnetic effect on mouse move
      const handleMouseMove = (e: MouseEvent) => {
        tagsRef.current.forEach((tag) => {
          if (!tag) return;

          const rect = tag.getBoundingClientRect();
          const tagCenterX = rect.left + rect.width / 2;
          const tagCenterY = rect.top + rect.height / 2;

          const distanceX = e.clientX - tagCenterX;
          const distanceY = e.clientY - tagCenterY;
          const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

          const maxDistance = 200; // pixels

          if (distance < maxDistance) {
            const force = (maxDistance - distance) / maxDistance;
            const moveX = -distanceX * force * 0.3;
            const moveY = -distanceY * force * 0.3;

            gsap.to(tag, {
              x: moveX,
              duration: 0.3,
              ease: 'power2.out',
              overwrite: 'auto',
            });
          } else {
            gsap.to(tag, {
              x: 0,
              duration: 0.5,
              ease: 'power2.out',
            });
          }
        });
      };

      window.addEventListener('mousemove', handleMouseMove);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="bg-gradient-hero relative overflow-hidden"
    >
      {/* Background gradient orb */}
      <div className="absolute -left-40 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-gradient-to-br from-primary-200/40 via-primary-100/20 to-transparent blur-3xl" />

      <Container className="relative">
        <div className="flex min-h-[694px] flex-col items-center justify-center mx-auto text-center">
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
            className="max-w-4xl font-heading text-display-2 font-medium leading-tight text-accent-950 md:text-display-1"
          >
            Design Agency <span className="block">Turning Startup Ideas</span>
            <span className="block">
              into <span className="font-serif italic text-primary">Real Products</span>
            </span>
          </h1>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="mt-12 flex flex-col gap-4 sm:flex-row sm:gap-6">
            <Button href="/get-quote" variant="primary" size="lg">
              Start Your Project
              <ArrowUpRight className="h-5 w-5" />
            </Button>
            <Button href="/case-study" variant="secondary" size="lg">
              View Our Work
              <ArrowUpRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile Tags */}
          <div className="mt-12 flex flex-wrap justify-center gap-3 lg:hidden">
            {floatingTags.map((tag) => (
              <div key={tag.text} className="tag">
                {tag.text}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
