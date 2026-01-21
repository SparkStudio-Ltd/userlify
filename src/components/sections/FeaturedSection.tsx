'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
// import Image from 'next/image'; // <--- Removed Image import
import content from '../../../public/data/featured-section.json';
import Image from 'next/image';

// Register plugins safely
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
}

export default function StatsSection() {
  const containerRef = useRef(null);
  const pathRef = useRef(null);
  const { stats_section, stat_items } = content;

  useGSAP(() => {
    // 1. SAFETY CHECK: If path isn't found, stop to prevent errors
    if (!pathRef.current) return;

    // 2. Get the exact length of the path
    const length = pathRef.current.getTotalLength();

    // 3. Reset the line to be "Hidden" (dashed line with offset = length)
    gsap.set(pathRef.current, { 
      strokeDasharray: length, 
      strokeDashoffset: length,
      autoAlpha: 1 // Ensure it's visible CSS-wise
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 40%',      // Start animating when top of section is near middle of viewport
        end: 'bottom 90%',
        scrub: 1.5,            // Smooth scrubbing
        markers: false,        // Debug: set to true if you still don't see it
      }
    });

    // 4. Animate the Line (Draw it)
    tl.to(pathRef.current, { 
      strokeDashoffset: 0, 
      duration: 5, 
      ease: 'none' 
    });

    // 5. Animate the Dot (Follow the line)
    tl.to('.moving-dot', {
      motionPath: {
        path: pathRef.current,
        align: pathRef.current,
        alignOrigin: [0.5, 0.5],
      },
      duration: 5,
      ease: 'none'
    }, 0); // Start synced with line drawing

    // 6. Reveal Cards (Staggered)
    tl.fromTo('.anim-item-1', { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.5 }, 0.1);
    tl.fromTo('.anim-item-2', { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.5 }, 1.3);
    tl.fromTo('.anim-item-3', { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.5 }, 2.6);
    tl.fromTo('.anim-item-4', { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.5 }, 3.9);

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      className="relative w-full min-h-[1600px] bg-[#F8F8F7] overflow-hidden py-24 flex flex-col items-center"
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
      <div className="relative w-full max-w-[1472px] mx-auto h-[1500px]">
        {/* 1. NEW: BACKGROUND IMAGE LAYER */}
      {/* Placed at -z-30 to sit BEHIND the gradient */}
      <div className="absolute inset-0 -z-30 rounded-3xl overflow-hidden">
        <Image
          src="/assets/images/featured-section-bg.png"
          alt="Background"
          fill
          className="object-cover opacity-50" // Adjust opacity to blend with the background color
          priority   
        />
      </div>
        
     
        <div 
          className="absolute pointer-events-none -z-20 top-[-20%] left-[-20%] w-[140%] h-[120%]"
          style={{
            background: 'radial-gradient(circle at 40% 40%, rgba(255, 200, 180, 0.4), transparent 60%)',
            filter: 'blur(150px)', // Creates the soft, diffused effect
            transform: 'translateZ(0)', // Enables hardware acceleration for smoother rendering
          }}
        /> 

        {/* --- SVG LAYER --- */}
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
              style={{ opacity: 1 }}
            />

            {/* THE DOT */}
            <g className="moving-dot">
                <circle r="12" fill="#FF8A65" stroke="white" strokeWidth="4" />
            </g>

            {/* END DECORATION (Static) */}
            <g transform="translate(1405, 1100)">
               <circle cx="23.5" cy="23.5" r="23.5" stroke="#FF8A65" fill="white" fillOpacity="0.5" />
               <circle cx="23.5" cy="23.5" r="8" fill="#FF8A65"/>
            </g>
          </svg>
        </div>


        {/* --- CARDS ALIGNMENT --- */}
        {/* Item 1: Start of line */}
        <div className="anim-item-1 absolute top-[-2%] left-0 md:left-[2%] max-w-xs z-10">
          <CleanCard content={stat_items[0]} />
        </div>

        {/* Item 2: First Drop */}
        <div className="anim-item-2 absolute top-[18%] left-[25%] md:left-[35%] max-w-xs z-10">
          <CleanCard content={stat_items[1]} />
        </div>

        {/* Item 3: Second Drop */}
        <div className="anim-item-3 absolute top-[45%] left-[55%] md:left-[60%] max-w-xs z-10">
           <CleanCard content={stat_items[2]} />
        </div>

        {/* Item 4: Bottom End */}
        <div className="anim-item-4 absolute top-[75%] left-[65%] md:left-[75%] max-w-xs z-10">
           <CleanCard content={stat_items[3]} />
        </div>

      </div>
    </section>
  );
}

// Simple Clean Card
function CleanCard({ content }) {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="w-12 h-12 flex items-center justify-center text-gray-900">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {content.title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed font-medium">
          {content.description}
        </p>
      </div>
    </div>
  );
}