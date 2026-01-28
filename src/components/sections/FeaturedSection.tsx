'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useRef } from 'react';
import content from '../../../public/data/featured-section.json';
import CleanCard from '@/components/cards/CleanCard';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
}

export default function StatsSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const { stats_section, stat_items } = content;

  useGSAP(() => {
    if (!pathRef.current) return;

    const length = pathRef.current.getTotalLength();

    gsap.set(pathRef.current, {
      strokeDasharray: length,
      strokeDashoffset: length,
      autoAlpha: 1,
      strokeWidth: 0.5
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 40%',
        end: 'bottom 100%',
        scrub: 1.5,
      }
    });

    tl.to(pathRef.current, {
      strokeDashoffset: 0,
      duration: 5,
      ease: 'none'
    });

    tl.to(pathRef.current, {
      strokeWidth: 6,
      duration: 5,
      ease: 'none'
    }, 0);

    tl.to('.moving-dot', {
      motionPath: {
        path: pathRef.current,
        align: pathRef.current,
        alignOrigin: [0.5, 0.5],
      },
      duration: 5,
      ease: 'none'
    }, 0);

    // Reveal Cards
    tl.fromTo('.anim-item-1', { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.5 }, 0.1);
    tl.fromTo('.anim-item-2', { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.5 }, 1.3);
    tl.fromTo('.anim-item-3', { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.5 }, 2.6);
    tl.fromTo('.anim-item-4', { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.5 }, 3.9);

  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#FFFBF9] overflow-hidden py-24 px-4 md:px-12 flex flex-col items-center"
    >
      {/* HEADER */}
      <div className="text-center z-20 mb-12 relative px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          {stats_section.heading}
        </h2>
        <p className="text-2xl md:text-3xl font-serif italic text-gray-800">
          {stats_section.subheading}
        </p>
      </div>

      {/* MAIN CONTENT AREA - Matches the SVG Viewbox aspect ratio */}
      <div className="relative w-full max-w-[1472px] mx-auto aspect-[1472/1478]">
        
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

// ... CleanCard component remains the same
