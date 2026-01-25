'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useRef } from 'react';
import content from '../../../public/data/featured-section.json';

// Register plugins safely
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
}

export default function StatsSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const { stats_section, stat_items } = content;


  useGSAP(() => {
    // 1. SAFETY CHECK
    if (!pathRef.current) return;

    // 2. Get path length
    const length = pathRef.current.getTotalLength();

    // 3. Reset line to hidden state
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
        markers: false,
      }
    });

    // 4. Animate the Line (Draw it from thin to thick)
    tl.to(pathRef.current, {
      strokeDashoffset: 0,
      duration: 5,
      ease: 'none'
    });

    // 5. Animate stroke width from thin to thick separately
    tl.to(pathRef.current, {
      strokeWidth: 6,
      duration: 5,
      ease: 'none'
    }, 0);

    // 6. Move the Dot (Synced)
    tl.to('.moving-dot', {
      motionPath: {
        path: pathRef.current,
        align: pathRef.current,
        alignOrigin: [0.5, 0.5],
      },
      duration: 5,
      ease: 'none'
    }, 0);

    // 7. Reveal Cards
    tl.fromTo('.anim-item-1', { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.5 }, 0.1);
    tl.fromTo('.anim-item-2', { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.5 }, 1.3);
    tl.fromTo('.anim-item-3', { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.5 }, 2.6);
    tl.fromTo('.anim-item-4', { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.5 }, 3.9);

  }, { scope: containerRef });


  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[1600px] bg-[#FFFBF9] overflow-hidden pt-24 flex flex-col items-center"
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

      {/* MAIN CONTENT AREA */}
      <div className="relative w-full max-w-[1472px] mx-auto h-[1474px]">

        {/* --- 1. BACKGROUND IMAGE --- */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <Image
            src="/assets/images/Stats.svg"
            alt="Background"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>

        {/* --- 2. PINK GLOW --- */}
        <div
          className="absolute pointer-events-none -z-20 top-[-20%] left-[-20%] w-[140%] h-[120%]"
          style={{
            background: 'radial-gradient(circle at 40% 40%, rgba(255, 200, 180, 0.4), transparent 60%)',
            filter: 'blur(150px)',
            transform: 'translateZ(0)',
          }}
        />

        {/* --- 3. SVG LAYER --- */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 1472 1478"
            fill="none"
          >
            {/* THE PATH */}
            <path
              ref={pathRef}
              className="anim-path"
              d="M0 3C193.306 3 384.719 41.1261 563.31 115.202C741.901 189.277 904.173 297.851 1040.86 434.725C1177.55 571.598 1285.98 734.091 1359.95 912.925C1388.23 981.278 1411.25 1051.51 1428.92 1123"
              stroke="#FF8A65"
              strokeWidth="5"
              fill="none"
            />

            {/* THE MOVING DOT ONLY */}
             <g className="moving-dot">
                {/* Outer Ring - Changed fill to transparent */}
                <circle cx="0" cy="0" r="24" stroke="#FF8A65" strokeWidth="1" fill="transparent" />
                
                {/* Inner Solid Dot */}
                <circle cx="0" cy="0" r="8" fill="#FF8A65" />
             </g>

          </svg>
        </div>

        {/* --- 4. CARDS --- */}
        <div className="anim-item-1 absolute top-[5%] left-0 md:left-[6%] max-w-[25rem] z-10">
          <CleanCard content={stat_items[0]} />
        </div>

        <div className="anim-item-2 absolute top-[27%] left-[25%] md:left-[32%] max-w-[25rem] z-10">
          <CleanCard content={stat_items[1]} />
        </div>

        <div className="anim-item-3 absolute top-[50%] left-[55%] md:left-[57%] max-w-[25rem] z-10">
          <CleanCard content={stat_items[2]} />
        </div>

        <div className="anim-item-4 absolute top-[75%] left-[75%] md:left-[67%] max-w-[25rem] z-10">
          <CleanCard content={stat_items[3]} />
        </div>

      </div>
    </section>
  );
}

type StatItem = (typeof content)['stat_items'][number];

type CleanCardProps = {
  content: StatItem;
};

function CleanCard({ content }: CleanCardProps) {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="w-12 h-12 flex items-center justify-center text-gray-900">
        <Image src="/assets/icons/servicesIcon1.svg" width={40} height={40} className="w-10 h-10" alt="icon-featured"></Image>
      </div>
      <div>
        <h3 className="text-[21px] font-bold text-[#030712] mb-2" style={{ fontFamily: 'Nohemi, sans-serif' }}>
          {content.title}
        </h3>
        <p className="text-[16px] text-[#030712] leading-relaxed font-[400]" style={{ fontFamily: 'Public Sans, sans-serif' }}>
          {content.description}
        </p>
      </div>
    </div>
  );
}
