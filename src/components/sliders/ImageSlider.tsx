'use client';

import gsap from 'gsap';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

interface ImageSlide {
  id: number;
  image: string;
  alt: string;
}

interface ImageSliderProps {
  slides: ImageSlide[];
}

export default function ImageSlider({ slides }: ImageSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);

  // 1. Create 4 copies of the list. 
  const repeatedSlides = [...slides, ...slides, ...slides, ...slides];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const ctx = gsap.context(() => {
      // 2. Calculate the exact width of ONE original set
      const oneSetWidth = slides.length * 320;

      gsap.to(slider, {
        x: -oneSetWidth, // Move left exactly one set's width
        duration: 25,    
        ease: 'none',
        repeat: -1,      // Infinite loop
      });
    }, sliderRef);

    return () => ctx.revert();
  }, [slides]);

  return (
    <div className="w-full overflow-hidden pt-0 md:pt-8">
      <div ref={sliderRef} className="flex flex-nowrap w-max gap-[40px]">
        {repeatedSlides.map((slide, index) => (
          <div key={`${slide.id}-${index}`} className="slide-item flex-shrink-0 py-6">
            <div className="relative h-[392px] w-[280px] overflow-hidden rounded-[24px]">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                className="object-cover"
                sizes="280px"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 'use client';

// import gsap from 'gsap';
// import Image from 'next/image';
// import { useEffect, useRef } from 'react';

// interface ImageSlide {
//   id: number;
//   image: string;
//   alt: string;
// }

// interface ImageSliderProps {
//   slides: ImageSlide[];
// }

// export default function ImageSlider({ slides }: ImageSliderProps) {
//   const sliderRef = useRef<HTMLDivElement>(null);

//   // 1. Create 4 copies of the list for a safe buffer
//   const repeatedSlides = [...slides, ...slides, ...slides, ...slides];

//   useEffect(() => {
//     const slider = sliderRef.current;
//     if (!slider) return;

//     const ctx = gsap.context(() => {
//       // 2. Calculate the exact width of ONE original set
//       // Image (280) + Margin (40) = 320px
//       const oneSetWidth = slides.length * 320;

//       gsap.to(slider, {
//         x: -oneSetWidth, // Move left exactly one set's width
//         duration: 2,    // Adjust speed (2 was extremely fast, 20 is smoother)
//         ease: 'none',
//         repeat: -1,      // Infinite loop
//         force3D: true,   // Forces GPU acceleration to prevent pixel jitter
//       });
//     }, sliderRef);

//     return () => ctx.revert();
//   }, [slides]);

//   return (
//     <div className="w-full overflow-hidden pt-0 md:pt-8">
//       {/* FIX 1: Removed 'gap-[40px]' 
//          FIX 2: Added 'flex-nowrap' and 'w-max'
//       */}
//       <div ref={sliderRef} className="flex flex-nowrap w-max">
//         {repeatedSlides.map((slide, index) => (
//           <div 
//             key={`${slide.id}-${index}`} 
//             // FIX 3: Added 'mr-[40px]' 
//             // Now every item carries its own spacing, making the math perfect.
//             className="slide-item mr-[40px] flex-shrink-0 py-6"
//           >
//             <div className="relative h-[392px] w-[280px] overflow-hidden rounded-[24px]">
//               <Image
//                 src={slide.image}
//                 alt={slide.alt}
//                 fill
//                 className="object-cover"
//                 sizes="280px"
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }