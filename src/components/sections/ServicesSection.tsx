'use client';

import servicesData from '@/../public/data/services.json';
import { ServiceCard } from '@/components/cards';
import { ArrowUpRight } from '@/components/icons';
import { Button } from '@/components/ui';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function ServicesSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Refs for background elements
    const starRef1 = useRef(null);
    const starRef2 = useRef(null);
    const blobRef = useRef(null);

    useGSAP(() => {
        // ---------------------------------------------------------
        // 1. BACKGROUND DECORATION ANIMATIONS
        // ---------------------------------------------------------
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

        // ---------------------------------------------------------
        // 2. CARD REVEAL ANIMATION (Blur <-> Clear)
        // ---------------------------------------------------------

        const cards = gsap.utils.toArray('.card-item');

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
            className="relative w-full bg-[#030712] py-32 px-4 md:px-8 lg:px-12 min-h-screen text-white"
        >
            {/* BACKGROUND LAYERS */}

            <div className="max-w-[1472px] mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

                    {/* LEFT CONTENT (Sticky) */}
                    {/* Added 'h-fit' to ensure it takes only necessary height for sticky calculation */}
                    <div className="lg:w-1/2 flex flex-col justify-start lg:sticky lg:top-64 h-fit">
                       
                        {/* Title */}
                    <h2
                        className="text-[48px] leading-[56px] font-medium  text-white md:w-[34rem]"
                        style={{ fontFamily: 'Nohemi, sans-serif' }}
                    >
                        Design Agency Turning {' '}
                        <span className="italic font-serif ">Startup Ideas into Real</span>
                    </h2>
                        <p
                            className="text-gray-300 text-lg leading-relaxed mb-8"
                            style={{ fontFamily: 'Public Sans, sans-serif' }}
                        >
                            We're proud to have designed apps and digital experiences
                            that are live on the Play Store and App Store. Each project
                            reflects our passion for usability, creativity, and
                            measurable business growth.
                        </p>
                        <div>
                            <Button href="/get-quote" variant="primary" size="lg">
                                Start Your Project
                                <ArrowUpRight className="h-5 w-5" />
                            </Button>

                        </div>
                    </div>

                    {/* RIGHT CONTENT (Scrolling List) */}
                    <div ref={containerRef} className="lg:w-1/2 w-full flex flex-col gap-8">
                        {servicesData.cards.map((card) => (
                            <div
                                key={card.id}
                                className="card-item w-full"
                            >
                                <div className="transition-colors duration-300">
                                    <ServiceCard
                                        title={card.title}
                                        icon={card.icon}
                                        description={card.description}
                                        tags={card.tags}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}