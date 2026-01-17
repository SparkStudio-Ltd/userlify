'use client';

import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function CTASection() {
    const slider1Ref = useRef<HTMLDivElement>(null);
    const slider2Ref = useRef<HTMLDivElement>(null);
    const slider3Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Slider 1 - Top to Bottom
        if (slider1Ref.current) {
            const slider = slider1Ref.current;
            const firstChild = slider.children[0] as HTMLElement;
            const gap = 32; // 32px gap
            const itemHeight = firstChild.offsetHeight + gap;
            const halfLength = slider.children.length / 2;

            gsap.set(slider, { y: 0 });

            gsap.to(slider, {
                y: -(itemHeight * halfLength),
                duration: 30,
                ease: 'none',
                repeat: -1,
                onRepeat: function () {
                    gsap.set(slider, { y: 0 });
                },
            });
        }

        // Slider 2 - Bottom to Top
        if (slider2Ref.current) {
            const slider = slider2Ref.current;
            const firstChild = slider.children[0] as HTMLElement;
            const gap = 32;
            const itemHeight = firstChild.offsetHeight + gap;
            const halfLength = slider.children.length / 2;

            gsap.set(slider, { y: -(itemHeight * halfLength) });

            gsap.to(slider, {
                y: 0,
                duration: 30,
                ease: 'none',
                repeat: -1,
                onRepeat: function () {
                    gsap.set(slider, { y: -(itemHeight * halfLength) });
                },
            });
        }

        // Slider 3 - Top to Bottom
        if (slider3Ref.current) {
            const slider = slider3Ref.current;
            const firstChild = slider.children[0] as HTMLElement;
            const gap = 32;
            const itemHeight = firstChild.offsetHeight + gap;
            const halfLength = slider.children.length / 2;

            gsap.set(slider, { y: 0 });

            gsap.to(slider, {
                y: -(itemHeight * halfLength),
                duration: 30,
                ease: 'none',
                repeat: -1,
                onRepeat: function () {
                    gsap.set(slider, { y: 0 });
                },
            });
        }
    }, []);

    // Generate multiple copies for seamless loop
    const images = Array(6).fill('/assets/images/cta_slider_image.png');

    return (
        <section className="w-full h-[720px] bg-primary overflow-hidden flex items-center">
            <div className="w-full flex flex-col lg:flex-row gap-10 items-center h-full">
                {/* Left Section */}
                <div
                    className="flex flex-col gap-10 lg:gap-8"
                    style={{
                        marginLeft: 'calc((100vw - 1472px) / 2)',
                        marginRight: 'auto'
                    }}
                >
                    <div className='flex flex-col gap-4'>
                        {/* Kicker */}
                        <p
                            className="text-white text-lg leading-7 tracking-[-0.4px]"
                            style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 500 }}
                        >
                            • Let&apos;s Work
                        </p>

                        {/* Title */}
                        <h2
                            className="text-white text-[48px] leading-[56px] tracking-[-0.5px] "
                            style={{ fontFamily: 'Nohemi, sans-serif', fontWeight: 500 }}
                        >
                            Ready to Build a Product{' '}
                            <span className="italic font-serif block">
                                Your Users Will Love?
                            </span>
                        </h2>

                        {/* Description */}
                        <p
                            className="text-white text-base leading-6"
                            style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 400 }}
                        >
                            Have a project in mind? Let&apos;s make it happen.
                        </p>
                    </div>

                    {/* Button */}
                    <div className="mt-4">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 bg-white text-[#030712] py-[18px] px-8 rounded-full hover:opacity-90 transition-opacity"
                            style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 500 }}
                        >
                            <span className="text-lg leading-7">Contact Us</span>
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
                <div className="w-full lg:w-[55%] flex gap-8 h-[720px] overflow-hidden">
                    {/* Slider 1 - Top to Bottom */}
                    <div className="flex-1 overflow-hidden">
                        <div ref={slider1Ref} className="flex flex-col gap-8">
                            {images.map((src, index) => (
                                <div
                                    key={`slider1-${index}`}
                                    className="relative w-full rounded-[32px] overflow-hidden flex-shrink-0"
                                    style={{ aspectRatio: '0.91 / 1' }}
                                >
                                    <Image
                                        src={src}
                                        alt="CTA Image"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Slider 2 - Bottom to Top */}
                    <div className="flex-1 overflow-hidden">
                        <div ref={slider2Ref} className="flex flex-col gap-8">
                            {images.map((src, index) => (
                                <div
                                    key={`slider2-${index}`}
                                    className="relative w-full rounded-[32px] overflow-hidden flex-shrink-0"
                                    style={{ aspectRatio: '0.91 / 1' }}
                                >
                                    <Image
                                        src={src}
                                        alt="CTA Image"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Slider 3 - Top to Bottom */}
                    <div className="flex-1 overflow-hidden">
                        <div ref={slider3Ref} className="flex flex-col gap-8">
                            {images.map((src, index) => (
                                <div
                                    key={`slider3-${index}`}
                                    className="relative w-full rounded-[32px] overflow-hidden flex-shrink-0"
                                    style={{ aspectRatio: '0.91 / 1' }}
                                >
                                    <Image
                                        src={src}
                                        alt="CTA Image"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
