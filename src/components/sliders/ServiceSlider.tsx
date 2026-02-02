// 'use client';

// import gsap from 'gsap';
// import Image from 'next/image';
// import { useEffect, useRef } from 'react';

// interface Service {
//     id: number;
//     name: string;
//     icon: string;
// }

// interface ServiceSliderProps {
//     services: Service[];
// }

// export default function ServiceSlider({ services }: ServiceSliderProps) {
//     const sliderRef = useRef<HTMLDivElement>(null);
//     const animationRef = useRef<gsap.core.Tween | null>(null);

//     useEffect(() => {
//         if (!sliderRef.current) return;

//         const slider = sliderRef.current;
//         const firstItem = slider.querySelector('.service-item');
//         if (!firstItem) return;

//         const slideWidth = firstItem.clientWidth;
//         const gap = 16; // gap-4 = 16px
//         const itemWidthWithGap = slideWidth + gap;
//         const totalWidth = itemWidthWithGap * services.length;

//         // Clone services for seamless loop
//         const firstClone = slider.innerHTML;
//         slider.innerHTML = firstClone + firstClone;

//         // Set initial position to negative totalWidth for LTR animation
//         gsap.set(slider, { x: -totalWidth });

//         // GSAP animation - left to right (from negative to 0)
//         animationRef.current = gsap.to(slider, {
//             x: 0,
//             duration: 35,
//             ease: 'none',
//             repeat: -1,
//             modifiers: {
//                 x: (x) => {
//                     const xVal = parseFloat(x);
//                     return `${((xVal % totalWidth) + totalWidth) % totalWidth - totalWidth}px`;
//                 },
//             },
//         });

//         return () => {
//             animationRef.current?.kill();
//         };
//     }, [services]);

//     return (
//         <div className="overflow-hidden w-full">
//             <div ref={sliderRef} className="flex gap-4">
//                 {services.map((service) => (
//                     <div
//                         key={service.id}
//                         className="service-item flex-shrink-0 flex items-center justify-center gap-4 py-3 px-4 md:py-6 md:px-7  border border-[#E8E6E6] rounded-[56px] text-center"
//                     >
//                         <div className="relative flex h-6 w-6 flex-shrink-0 items-center justify-center">
//                             <Image
//                                 src={service.icon}
//                                 alt={service.name}
//                                 fill
//                                 className="object-contain"
//                                 sizes="24px"
//                             />
//                         </div>
//                         <span className="text-xl md:text-3xl font-normal whitespace-nowrap -mb-1" style={{ fontFamily: 'Nohemi, sans-serif' }}>
//                             {service.name}
//                         </span>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }


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
    const animationRef = useRef<gsap.core.Tween | null>(null);

    // 1. Create a double list for the seamless loop
    // We render this directly in JSX instead of using innerHTML
    const duplicatedServices = [...services, ...services];

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        // 2. Kill old animation to prevent memory leaks/speedups on re-render
        if (animationRef.current) {
            animationRef.current.kill();
        }

        // 3. The Animation Logic (Left to Right)
        // We start at -50% (showing the second half) and move to 0% (showing the first half)
        // Since both halves are identical, the snap back to -50% is invisible.
        
        // Initial setup
        gsap.set(slider, { xPercent: -20 });

        animationRef.current = gsap.to(slider, {
            xPercent: 0, // Move to the right until the start aligns
            duration: 35, // Adjusted speed (slower is usually better for reading)
            ease: 'none',
            repeat: -1,
        });

        // Hover effect: Pause on hover (Optional, remove if unwanted)
        const onMouseEnter = () => animationRef.current?.timeScale(0);
        const onMouseLeave = () => animationRef.current?.timeScale(1);

        slider.addEventListener('mouseenter', onMouseEnter);
        slider.addEventListener('mouseleave', onMouseLeave);

        return () => {
            animationRef.current?.kill();
            slider.removeEventListener('mouseenter', onMouseEnter);
            slider.removeEventListener('mouseleave', onMouseLeave);
        };
    }, [services]);

    return (
        <div className="overflow-hidden w-full py-8">
            {/* 4. Added w-max to force items into a single horizontal line (prevents wrapping) */}
            <div ref={sliderRef} className="flex gap-4 w-max">
                {duplicatedServices.map((service, index) => (
                    <div
                        // Using index in key because we have duplicate IDs now
                        key={`${service.id}-${index}`}
                        className="service-item flex-shrink-0 flex items-center justify-center gap-4 py-3 px-4 md:py-6 md:px-7 border border-[#E8E6E6] rounded-[56px] text-center bg-white"
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
                            className="text-xl md:text-3xl font-normal whitespace-nowrap -mb-1"
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