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

    useEffect(() => {
        if (!sliderRef.current) return;

        const slider = sliderRef.current;
        const firstItem = slider.querySelector('.service-item');
        if (!firstItem) return;

        const slideWidth = firstItem.clientWidth;
        const gap = 16; // gap-4 = 16px
        const itemWidthWithGap = slideWidth + gap;
        const totalWidth = itemWidthWithGap * services.length;

        // Clone services for seamless loop
        const firstClone = slider.innerHTML;
        slider.innerHTML = firstClone + firstClone;

        // Set initial position to negative totalWidth for LTR animation
        gsap.set(slider, { x: -totalWidth });

        // GSAP animation - left to right (from negative to 0)
        animationRef.current = gsap.to(slider, {
            x: 0,
            duration: 35,
            ease: 'none',
            repeat: -1,
            modifiers: {
                x: (x) => {
                    const xVal = parseFloat(x);
                    return `${((xVal % totalWidth) + totalWidth) % totalWidth - totalWidth}px`;
                },
            },
        });

        return () => {
            animationRef.current?.kill();
        };
    }, [services]);

    return (
        <div className="overflow-hidden w-full">
            <div ref={sliderRef} className="flex gap-4">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="service-item flex-shrink-0 flex items-center gap-4 py-6 px-7 border border-[#E8E6E6] rounded-[56px]"
                    >
                        <div className="relative w-6 h-6 flex-shrink-0">
                            <Image
                                src={service.icon}
                                alt={service.name}
                                fill
                                className="object-contain"
                                sizes="24px"
                            />
                        </div>
                        <span className="text-[30px] font-normal whitespace-nowrap" style={{ fontFamily: 'Nohemi, sans-serif' }}>
                            {service.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
