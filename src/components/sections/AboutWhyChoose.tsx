'use client';

import servicesData from '@/../public/data/about-why-choose-us.json';
import { AboutChooseCard } from '@/components/cards';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useRef } from 'react';

export default function AboutWhyChooseSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Refs for background elements
    const starRef1 = useRef(null);
    const starRef2 = useRef(null);
    const blobRef = useRef(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        // 1. BACKGROUND DECORATION ANIMATIONS

        gsap.to(starRef1.current, {
            scale: 1.2,
            opacity: 1,
            duration: 0.5,
            ease: "power1.inOut",
            yoyo: true,
            repeat: -1
        });

        gsap.to(starRef2.current, {
            rotation: 360,
            duration: 20,
            ease: "linear",
            repeat: -1,
            transformOrigin: "50% 50%"
        });

        gsap.to(blobRef.current, {
            keyframes: {
                "0%": { x: 0, y: 0 },
                "25%": { x: -8, y: -8 },
                "50%": { x: -15, y: -15 },
                "75%": { x: -8, y: 8 },
                "100%": { x: 0, y: 0 }
            },
            duration: 5,
            ease: "none",
            repeat: -1
        });

        // 2. CARD REVEAL ANIMATION (Blur <-> Clear)

        const cards = gsap.utils.toArray<HTMLElement>('.card-item', sectionRef.current || undefined);

        // Ensure cards are visible even if ScrollTrigger fails to initialize.
        gsap.set(cards, { opacity: 1, filter: "none", y: 0 });

        cards.forEach((card) => {
            gsap.fromTo(card as Element,
                {
                    filter: "blur(20px)",
                    opacity: 0,
                    y: 100 // Start 100px lower
                },
                {
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                    ease: "power3.out",
                    immediateRender: false,
                    scrollTrigger: {
                        trigger: card as Element,
                        start: "top 85%", // Animation starts when card hits 85% of viewport
                        end: "top 55%",   // Animation ends when card hits 55% of viewport
                        scrub: 1,         // Tie animation to scroll (reverse on scroll up)
                        toggleActions: "play reverse play reverse"
                    }
                }
            );
        });

    }, { scope: sectionRef });

    return (
        <section
            ref={sectionRef}
            className="relative w-full bg-white py-12 md:py-32 px-4 md:px-8 lg:px-12 min-h-screen text-white"
        >
            {/* BACKGROUND LAYERS */}

            <div className="max-w-[1472px] mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

                    {/* LEFT CONTENT (Scrolling List) */}
                    <div ref={containerRef} className="lg:w-1/2 w-full flex flex-col gap-8 order-2 lg:order-1">
                        {servicesData.cards.map((card) => (
                            <div
                                key={card.id}
                                className="card-item w-full"
                            >
                                <div className="transition-colors duration-300">
                                    <AboutChooseCard
                                        title={card.title}
                                        icon={card.icon}
                                        description={card.description}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT CONTENT (Sticky) */}

                    <div className="lg:w-1/2 flex flex-col justify-start pt-4 lg:sticky lg:top-64 h-fit order-1 lg:order-2">
                        {/* Top Section */}
                        <div className="flex flex-col gap-16">
                            <div>
                                {/* Kicker */}
                                <p
                                    className="text-[#EA7B69] text-sm leading-5 tracking-[0.75px] uppercase font-bold"
                                    style={{ fontFamily: 'Public Sans, sans-serif' }}
                                >
                                    • Why choose us?
                                </p>

                                {/* Title */}
                                <h2
                                    className="text-[48px] leading-[56px] font-medium text-[#030712] max-w-[800px]"
                                    style={{ fontFamily: 'Nohemi, sans-serif' }}
                                >
                                    A Design Partner Who{' '}
                                    <span className="italic font-serif block">
                                        Understands Startups
                                    </span>
                                </h2>
                            </div>
                            <Image src='/assets/images/about_why_choose_us.png' width={688} height={458} alt='why_choose_us'/>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
