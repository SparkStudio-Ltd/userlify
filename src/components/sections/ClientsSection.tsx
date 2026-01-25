'use client';

import clientsData from '@/../public/data/clients.json';
import gsap from 'gsap';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function ClientsSection() {
    const sliderRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<gsap.core.Tween | null>(null);

    useEffect(() => {
        if (!sliderRef.current) return;

        const slider = sliderRef.current;

        // Calculate width for seamless loop
        const logoWidth = 150; // Width of each logo
        const gap = 100; // Gap between logos
        const totalWidth = (logoWidth + gap) * clientsData.length;

        // GSAP animation - left to right
        animationRef.current = gsap.fromTo(
            slider,
            { x: -totalWidth },
            {
                x: 0,
                duration: 40,
                ease: 'none',
                repeat: -1,
            }
        );

        // Pause on hover
        const handleMouseEnter = () => {
            animationRef.current?.pause();
        };

        const handleMouseLeave = () => {
            animationRef.current?.resume();
        };

        slider.addEventListener('mouseenter', handleMouseEnter);
        slider.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            animationRef.current?.kill();
            slider.removeEventListener('mouseenter', handleMouseEnter);
            slider.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <section className="w-full py-[120px] bg-white">
            <div className="max-w-[1472px] h-[280px] mx-auto px-4">
                {/* Top Section - Kicker and Title */}
                <div className="flex flex-col items-center gap-4 mb-24">
                    {/* Kicker */}
                    <p
                        className="text-[#EA7B69] text-sm leading-5 tracking-[0.75px] uppercase font-bold"
                        style={{ fontFamily: 'Public Sans, sans-serif' }}
                    >
                        • CLIENT LOGO
                    </p>

                    {/* Title */}
                    <h2
                        className="text-[48px] leading-[56px] font-medium text-center text-[#030712] max-w-[618px]"
                        style={{ fontFamily: 'Nohemi, sans-serif' }}
                    >
                        <span className="italic font-serif">
                            Startups and Brands
                        </span>{' '}
                        Who Rely on Userlify
                    </h2>
                </div>

                {/* Logo Slider Container */}
                <div className="flex items-center overflow-hidden">
                    {/* Slider */}
                    <div
                        ref={sliderRef}
                        className="flex items-center gap-[100px]"
                    >
                        {/* First set of logos */}
                        {clientsData.map((client, index) => (
                            <div
                                key={`first-${client.id}-${index}`}
                                className="client-logo flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                                style={{ width: '150px' }}
                            >
                                <Image
                                    src={client.logo_url}
                                    alt={client.name}
                                    width={150}
                                    height={60}
                                    className="object-contain"
                                />
                            </div>
                        ))}
                        {/* Second set of logos for seamless loop */}
                        {clientsData.map((client, index) => (
                            <div
                                key={`second-${client.id}-${index}`}
                                className="client-logo flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                                style={{ width: '150px' }}
                            >
                                <Image
                                    src={client.logo_url}
                                    alt={client.name}
                                    width={150}
                                    height={60}
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
