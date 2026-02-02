'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import content from '../../../public/data/featured-section.json'; // Adjust path if needed
import CleanCard from '@/components/cards/CleanCard';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
}

export default function StatsSection() {
  // We use a main container for the section
  const mainContainerRef = useRef<HTMLElement | null>(null);
  
  // Refs specific to Desktop Animation
  const desktopWrapperRef = useRef<HTMLDivElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  
  // Refs specific to Mobile Animation
  const mobileWrapperRef = useRef<HTMLDivElement | null>(null);

  const { stats_section, stat_items } = content;

  // --- DESKTOP ANIMATION LOGIC ---
  useGSAP(() => {
    if (!pathRef.current || !desktopWrapperRef.current) return;

    // Only run this logic if we are roughly in desktop view or just let ScrollTrigger handle it
    // Note: matchMedia in GSAP is great, but scoping to the desktop wrapper works too.
    
    const length = pathRef.current.getTotalLength();

    gsap.set(pathRef.current, {
      strokeDasharray: length,
      strokeDashoffset: length,
      autoAlpha: 1,
      strokeWidth: 0.5
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: desktopWrapperRef.current, // Trigger based on the desktop wrapper
        start: 'top 40%',
        end: 'bottom 100%',
        scrub: 1.5,
      }
    });

    tl.to(pathRef.current, { strokeDashoffset: 0, duration: 5, ease: 'none' });
    tl.to(pathRef.current, { strokeWidth: 6, duration: 5, ease: 'none' }, 0);
    
    tl.to('.moving-dot', {
      motionPath: {
        path: pathRef.current,
        align: pathRef.current,
        alignOrigin: [0.5, 0.5],
      },
      duration: 5,
      ease: 'none'
    }, 0);

    // Reveal Cards (Desktop)
    tl.fromTo('.anim-item-1', { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.5 }, 0.1);
    tl.fromTo('.anim-item-2', { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.5 }, 1.3);
    tl.fromTo('.anim-item-3', { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.5 }, 2.6);
    tl.fromTo('.anim-item-4', { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.5 }, 3.9);

  }, { scope: desktopWrapperRef }); // Scope specifically to desktop wrapper


  // --- MOBILE ANIMATION LOGIC (Simple Fade Up) ---
  useGSAP(() => {
    if(!mobileWrapperRef.current) return;

    // Simple stagger reveal for mobile cards
    const mobileCards = gsap.utils.toArray('.mobile-card');
    
    gsap.fromTo(mobileCards, 
      { autoAlpha: 0, y: 50 },
      {
        autoAlpha: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: mobileWrapperRef.current,
          start: 'top 75%',
        }
      }
    );
  }, { scope: mobileWrapperRef });


  return (
    <section
      ref={mainContainerRef}
      className="relative w-full bg-[#F8F8F7] overflow-hidden px-4 lg:px-12 md:px-8 py-24 lg:py-30 flex flex-col items-center"
    >
      
      {/* --- SHARED HEADER (Visible on both) --- */}
      <div className="flex flex-col items-center gap-4 mb-16 lg:mb-24">
        <p
          className="text-[#EA7B69] text-sm leading-5 tracking-[0.75px] uppercase font-bold"
          style={{ fontFamily: 'Public Sans, sans-serif' }}
        >
          • Stats
        </p>

        <h2
          className="text-[36px] lg:text-[48px] leading-[44px] lg:leading-[56px] font-medium text-center text-[#030712]"
          style={{ fontFamily: 'Nohemi, sans-serif' }}
        >
          Real Products, Real Impact {' '}
          <span className="italic font-serif block">Designed by Userlify</span>
        </h2>
      </div>

      {/* ============================================== */}
      {/* 📱 MOBILE VIEW (Visible below lg breakpoint)   */}
      {/* ============================================== */}
      <div 
        ref={mobileWrapperRef}
        className="block lg:hidden w-full max-w-md flex flex-col gap-6"
      >
        {stat_items.map((item, index) => (
          <div key={index} className="mobile-card w-full">
             {/* We can add a connecting line visual here if desired, otherwise just stacked cards */}
             <CleanCard content={item} />
          </div>
        ))}
      </div>


      {/* ============================================== */}
      {/* 🖥️ DESKTOP VIEW (Visible lg and up)            */}
      {/* ============================================== */}
      <div 
        ref={desktopWrapperRef}
        className="hidden lg:block relative w-full max-w-[1472px] mx-auto aspect-[1472/1478]"
      >
        {/* --- 1. UNIFIED SVG LAYER --- */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 1472 1478"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Background Image inside SVG to ensure perfect alignment */}
            <image 
              href="/assets/images/Stats.svg" 
              width="1472" 
              height="1478" 
              opacity="0.5"
            />

            {/* THE PATH */}
            <path
              ref={pathRef}
              className="anim-path"
              d="M0 3C193.306 3 384.719 41.1261 563.31 115.202C741.901 189.277 904.173 297.851 1040.86 434.725C1177.55 571.598 1285.98 734.091 1359.95 912.925C1388.23 981.278 1411.25 1051.51 1428.92 1123"
              stroke="#FF8A65"
              strokeWidth="5"
              fill="none"
            />

            {/* THE MOVING DOT */}
            <g className="moving-dot">
              <circle cx="0" cy="0" r="24" stroke="#FF8A65" strokeWidth="1" fill="transparent" />
              <circle cx="0" cy="0" r="8" fill="#FF8A65" />
            </g>
          </svg>
        </div>

        {/* --- 2. CARDS (Positioned using % to stay anchored to the curve) --- */}
        <div className="anim-item-1 absolute top-[5%] left-[5%] max-[1200px]:left-[0]  max-w-[26rem] z-10">
          <CleanCard content={stat_items[0]} />
        </div>

        <div className="anim-item-2 absolute top-[27%] left-[30%] max-[1200px]:top-[31%] max-[1200px]:left-[35%] max-w-[26rem] z-10">
          <CleanCard content={stat_items[1]} />
        </div>

        <div className="anim-item-3 absolute top-[50%] left-[55%] max-[1200px]:top-[55%] max-[1200px]:left-[5%] max-w-[26rem] z-10">
          <CleanCard content={stat_items[2]} />
        </div>

        <div className="anim-item-4 absolute top-[75%] left-[65%]  max-[1200px]:left-[58%] max-w-[26rem] z-10">
          <CleanCard content={stat_items[3]} />
        </div>
      </div>
    </section>
  );
}