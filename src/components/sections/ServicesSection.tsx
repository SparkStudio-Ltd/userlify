'use client';

import servicesData from '@/../public/data/services.json';
import { ServiceCard } from '@/components/cards';
import { Button } from '@/components/ui';
import gsap from 'gsap';
import { Observer } from 'gsap/Observer';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, Observer);

export default function ServicesSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const leftSectionRef = useRef<HTMLDivElement>(null);
    const cardsContainerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);
    const timelineRef = useRef<gsap.core.Timeline | null>(null);
    const observerRef = useRef<Observer | null>(null);
    const animatingRef = useRef(false);

    useEffect(() => {
        if (!sectionRef.current || !cardsContainerRef.current) return;

        const cards = cardsRef.current.filter(Boolean);
        if (cards.length === 0) return;

        const time = 0.5;

        // Progressive enhancement - initial card positioning
        gsap.set(cards, {
            y: (index) => 20 * index,
            transformOrigin: 'center top',
        });

        // Create the timeline
        const tl = gsap.timeline({ paused: true });
        timelineRef.current = tl;

        // Build timeline for each card
        cards.forEach((card, index) => {
            if (index === 0) return; // Skip first card

            tl.add(`card${index + 1}`);

            // Scale down previous card
            tl.to(cards[index - 1], {
                scale: 0.85 + index * 0.05,
                duration: time,
            });

            // Bring in current card from bottom
            tl.from(
                card,
                {
                    y: () => window.innerHeight,
                    duration: time,
                },
                '<'
            );
        });

        tl.add(`card${cards.length + 1}`);

        // Function to tween to next/previous label
        function tweenToLabel(direction: string | null, isScrollingDown: boolean) {
            if (
                (!tl.nextLabel() && isScrollingDown) ||
                (!tl.previousLabel() && !isScrollingDown)
            ) {
                observerRef.current?.disable();
                return;
            }
            if (!animatingRef.current && direction) {
                animatingRef.current = true;
                tl.tweenTo(direction, { onComplete: () => { animatingRef.current = false; } });
            }
        }

        // Create Observer
        const cardsObserver = Observer.create({
            wheelSpeed: -1,
            onDown: () => {
                tweenToLabel(tl.previousLabel(), false);
            },
            onUp: () => {
                tweenToLabel(tl.nextLabel(), true);
            },
            tolerance: 10,
            preventDefault: true,
            onEnable(self: Observer) {
                const savedScroll = self.scrollY();
                const restoreScroll = () => self.scrollY(savedScroll);
                (self as Observer & { _restoreScroll?: () => void })._restoreScroll = restoreScroll;
                document.addEventListener('scroll', restoreScroll, {
                    passive: false,
                });
            },
            onDisable: (self: Observer) => {
                const restoreScroll = (self as Observer & { _restoreScroll?: () => void })._restoreScroll;
                if (restoreScroll) {
                    document.removeEventListener('scroll', restoreScroll);
                }
            },
        });

        cardsObserver.disable();
        observerRef.current = cardsObserver;

        // ScrollTrigger to enable Observer
        ScrollTrigger.create({
            trigger: cardsContainerRef.current,
            pin: true,
            start: 'top 20%',
            end: '+=100',
            onEnter: () => {
                if (cardsObserver.isEnabled) return;
                cardsObserver.enable();
            },
            onEnterBack: () => {
                if (cardsObserver.isEnabled) return;
                cardsObserver.enable();
            },
        });

        // Make left section sticky
        if (leftSectionRef.current) {
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: 'top top',
                end: 'bottom bottom',
                pin: leftSectionRef.current,
                pinSpacing: false,
            });
        }

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
            cardsObserver.kill();
            tl.kill();
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="w-full bg-black py-32 px-4 md:px-8 lg:px-16 min-h-screen"
        >
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-24">
                    {/* Left Section - Text Content */}
                    <div className="lg:w-1/2">
                        <div ref={leftSectionRef} className="lg:sticky lg:top-20">
                            <h2 className="text-white text-5xl font-bold mb-6 leading-tight">
                                Design Agency Turning <br />
                                <span className="italic font-serif">
                                    Startup Ideas into Real
                                </span>
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
                                <Button variant="primary" href="#">
                                    Start Your Project
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Stacking Cards */}
                    <div className="lg:w-1/2 relative">
                        <div ref={cardsContainerRef} className="cards-container">
                            {servicesData.cards.map((card, index) => (
                                <div
                                    key={card.id}
                                    ref={(el) => {
                                        if (el) cardsRef.current[index] = el;
                                    }}
                                    className="card-item will-change-transform absolute top-0 left-0 w-full"
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
            </div>
        </section>
    );
}
