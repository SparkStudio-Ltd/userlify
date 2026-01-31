

'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
    const slider1Ref = useRef<HTMLDivElement>(null);
    const slider2Ref = useRef<HTMLDivElement>(null);
    const slider3Ref = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const getGap = (slider: HTMLDivElement) => {
                const styles = window.getComputedStyle(slider);
                const gap = styles.rowGap || styles.gap || '0px';
                const parsed = parseFloat(gap);
                return Number.isNaN(parsed) ? 0 : parsed;
            };

            const animateSlider = (slider: HTMLDivElement, direction: 'up' | 'down') => {
                const firstChild = slider.children[0] as HTMLElement;
                const gap = getGap(slider);
                const itemHeight = firstChild.offsetHeight + gap;
                const halfLength = slider.children.length / 2;
                
                const yFrom = direction === 'down' ? 0 : -(itemHeight * halfLength);
                const yTo = direction === 'down' ? -(itemHeight * halfLength) : 0;

                gsap.fromTo(
                    slider,
                    { y: yFrom },
                    {
                        y: yTo,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top bottom',
                            end: 'bottom top',
                            scrub: 1,
                        },
                    }
                );
            };

            if (slider1Ref.current && sectionRef.current) animateSlider(slider1Ref.current, 'down');
            if (slider2Ref.current && sectionRef.current) animateSlider(slider2Ref.current, 'up');
            if (slider3Ref.current && sectionRef.current) animateSlider(slider3Ref.current, 'down');

        }, sectionRef);

        const handleResize = () => ScrollTrigger.refresh();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            ctx.revert();
        };
    }, []);

    const images = Array(6).fill('/assets/images/cta_slider_image.png');

    return (
        <section
            ref={sectionRef}
            // FIXED: Changed 48px to 16px in the calculation.
            // This pulls the content left by 32px to match your header logo alignment.
            // Formula: max(16px, (Screen_Width - Container_Width) / 2 + Base_Padding)
            className="w-full bg-primary overflow-hidden flex items-center pt-12 pb-0 sm:py-20 lg:py-0 lg:min-h-[720px] pl-0 lg:pl-[max(48px,calc((100%-1472px)/2))] pr-0"
        >
            <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-12 items-center">
                
                {/* Left Section */}
                <div className="flex flex-col gap-10 lg:gap-8 w-full lg:w-[45%] max-w-[560px] lg:max-w-none pr-4 md:pr-12 lg:pr-0 px-4 lg:pl-0">
                    <div className="flex flex-col gap-4">
                        <p
                            className="text-white text-base sm:text-lg leading-7 tracking-[-0.4px]"
                            style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 500 }}
                        >
                            • Let&apos;s Work
                        </p>

                        <h2
                            className="text-white text-[48px] leading-[1.15] lg:leading-[56px] tracking-[-0.5px]"
                            style={{ fontFamily: 'Nohemi, sans-serif', fontWeight: 500 }}
                        >
                            Ready to Build a Product{' '}
                            <span className="italic font-serif md:block">
                                Your Users Will Love?
                            </span>
                        </h2>

                        <p
                            className="text-white text-sm sm:text-base leading-6"
                            style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 400 }}
                        >
                            Have a project in mind? Let&apos;s make it happen.
                        </p>
                    </div>

                    <div className="mt-4">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 bg-white text-[#030712] py-3 sm:py-[18px] px-6 sm:px-8 rounded-full hover:opacity-90 transition-opacity"
                            style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 500 }}
                        >
                            <span className="text-base sm:text-lg leading-7">Contact Us</span>
                            <Image
                                src="/assets/icons/arrow_right.svg"
                                alt="Arrow"
                                width={20}
                                height={20}
                            />
                        </Link>
                    </div>
                </div>

                {/* Right Section - Animated Sliders */}
                {/* Ensure right side touches edge by using full remaining width */}
                <div className="w-full lg:w-[55%] flex gap-4 sm:gap-6 lg:gap-8 h-[420px] sm:h-[520px] lg:h-[720px] overflow-hidden">
                    <div className="flex-1 overflow-hidden">
                        <div ref={slider1Ref} className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
                            {images.map((src, index) => (
                                <div
                                    key={`slider1-${index}`}
                                    className="relative w-full rounded-2xl sm:rounded-[28px] lg:rounded-[32px] overflow-hidden flex-shrink-0"
                                    style={{ aspectRatio: '0.91 / 1' }}
                                >
                                    <Image src={src} alt="CTA" fill className="object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 overflow-hidden">
                        <div ref={slider2Ref} className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
                            {images.map((src, index) => (
                                <div
                                    key={`slider2-${index}`}
                                    className="relative w-full rounded-2xl sm:rounded-[28px] lg:rounded-[32px] overflow-hidden flex-shrink-0"
                                    style={{ aspectRatio: '0.91 / 1' }}
                                >
                                    <Image src={src} alt="CTA" fill className="object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="hidden sm:block flex-1 overflow-hidden">
                        <div ref={slider3Ref} className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
                            {images.map((src, index) => (
                                <div
                                    key={`slider3-${index}`}
                                    className="relative w-full rounded-2xl sm:rounded-[28px] lg:rounded-[32px] overflow-hidden flex-shrink-0"
                                    style={{ aspectRatio: '0.91 / 1' }}
                                >
                                    <Image src={src} alt="CTA" fill className="object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}