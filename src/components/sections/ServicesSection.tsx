'use client';

import servicesData from '@/../public/data/services.json';
import { ServiceCard } from '@/components/cards';
import { Button } from '@/components/ui';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function ServicesSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const cardsContainerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useGSAP(() => {
        const cards = cardsRef.current.filter(Boolean);
        if (!cards.length || !sectionRef.current) return;

        // Create the main stacking timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top top',
                end: `+=${cards.length * 1000}`, // Longer scroll for smoother stacking
                pin: true,
                scrub: true,
            },
        });

        // 1. Initial State: Only the first card is visible
        // We set initial opacity/y for all cards to match your Expertise logic
        gsap.set(cards, { opacity: 0, y: 100 });
        gsap.set(cards[0], { opacity: 1, y: 0 });

        // 2. Animate each additional card to stack on top of the previous one
        // This follows your slice(1) logic exactly
        cards.slice(1).forEach((card, index) => {
            tl.fromTo(
                card,
                { y: 400, opacity: 0 }, // Start deeper for a clearer "slide up"
                { 
                    y: 0, 
                    opacity: 1, 
                    duration: 0.75, 
                    ease: 'power2.out' 
                },
                (index + 1) * 0.5 // Staggered start time in the timeline
            );

            // Optional: Slight scale effect on the card underneath to add depth
            tl.to(cards[index], {
                scale: 0.95,
                opacity: 0.7,
                duration: 0.5
            }, "<"); 
        });

    }, { scope: sectionRef });

    return (
        <section
            ref={sectionRef}
            className="w-full bg-black py-32 px-4 md:px-8 lg:px-16 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto h-full">
                <div className="flex flex-col lg:flex-row gap-24 items-start h-full">
                    
                    {/* LEFT SECTION - Stays pinned and visible */}
                    <div className="lg:w-1/2 flex flex-col justify-start pt-10">
                        <h2 className="text-white text-5xl font-bold mb-6 leading-tight">
                            Design Agency Turning <br />
                            <span className="italic font-serif text-gray-400">
                                Startup Ideas into Real
                            </span>
                        </h2>
                        <p className="text-gray-300 text-lg mb-8 max-w-md">
                            We&apos;re proud to have designed apps and digital experiences
                            that are live on the Play Store and App Store.
                        </p>
                        <div>
                            <Button variant="primary" href="#">Start Your Project</Button>
                        </div>
                    </div>

                    {/* RIGHT-SECTION - The Card Deck */}
                    {/* Note: Fixed height h-[600px] is required for absolute children */}
                    <div className="lg:w-1/2 relative h-[600px] w-full" ref={cardsContainerRef}>
                        {servicesData.cards.map((card, index) => (
                            <div
                                key={card.id}
                                ref={(el) => { if (el) cardsRef.current[index] = el; }}
                                // Absolute top-0 is crucial so they all stack in one spot
                                className="card-item absolute top-0 left-0 w-full"
                                style={{ zIndex: index + 1 }}
                            >
                                <ServiceCard
                                    title={card.title}
                                    icon={card.icon}
                                    description={card.description}
                                    tags={card.tags}
                                />
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}