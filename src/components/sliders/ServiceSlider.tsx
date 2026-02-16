


'use client';

import gsap from 'gsap';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

interface Service {
  id: number;
  name: string;
  icon: string;
}

interface ServiceSliderProps {
  services: Service[];
}

export default function ServiceSlider({ services }: ServiceSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);

  // 1. Quadruple the list to create a safe buffer
  const repeatedServices = [...services, ...services, ...services, ...services];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const ctx = gsap.context(() => {
      // 2. The Animation Logic (Right Direction)
      // We start shifted left (-25%) and move to 0.
      // Because we used 'margin' instead of 'gap', -25% is EXACTLY the width of one set.
      
      gsap.fromTo(
        slider,
        {
          xPercent: -25, // Start showing the 2nd set
        },
        {
          xPercent: 0,   // Move right until we hit the 1st set
          duration: 30,  
          ease: 'none',
          repeat: -1,
          force3D: true, // Forces GPU acceleration for smoother frames
        }
      );

      // Pause on hover
      const animation = gsap.getTweensOf(slider)[0];
      slider.addEventListener('mouseenter', () => animation.pause());
      slider.addEventListener('mouseleave', () => animation.play());
    }, sliderRef);

    return () => ctx.revert();
  }, [services]);

  return (
    <div className="w-full overflow-hidden py-8">
      {/* CRITICAL FIX: 
        1. Removed 'gap-4' (which causes the math error).
        2. Added 'flex-nowrap' and 'w-max' to keep it in a line.
      */}
      <div ref={sliderRef} className="flex w-max flex-nowrap">
        {repeatedServices.map((service, index) => (
          <div
            key={`${service.id}-${index}`}
            // CRITICAL FIX: Added 'mr-4' here.
            // Every item now owns its spacing, making the total width perfectly divisible.
            className="mr-4 service-item flex flex-shrink-0 items-center justify-center gap-4 rounded-[56px] border border-[#E8E6E6] bg-white px-4 py-3 text-center md:px-7 md:py-6"
          >
            <div className="relative flex h-6 w-6 flex-shrink-0 items-center justify-center">
              <Image
                src={service.icon}
                alt={service.name}
                fill
                className="object-contain"
                sizes="24px"
              />
            </div>
            <span
              className="-mb-1 whitespace-nowrap text-xl font-normal md:text-3xl"
              style={{ fontFamily: 'Nohemi, sans-serif' }}
            >
              {service.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}