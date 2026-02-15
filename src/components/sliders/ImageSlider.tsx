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
  const animationRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;
    const slideWidth = slider.querySelector('.slide-item')?.clientWidth || 0;
    const totalWidth = slideWidth * slides.length;

    // Clone slides for seamless loop
    const firstClone = slider.innerHTML;
    slider.innerHTML = firstClone + firstClone;

    // GSAP animation - right to left (x from 0 to negative)
    animationRef.current = gsap.to(slider, {
      x: -totalWidth,
      duration: 30,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
      },
    });

    return () => {
      animationRef.current?.kill();
    };
  }, [slides]);

  return (
    <div className="w-full overflow-hidden pt-0 md:pt-8">
      <div ref={sliderRef} className="flex gap-[40px]">
        {slides.map((slide) => (
          <div key={slide.id} className="slide-item flex-shrink-0 py-6">
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
