'use client';

import whyChooseUsData from '@/../public/data/why-choose-us-card.json';
import { WhyChooseUsCard } from '@/components/cards';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUsSection() {
    const titleRef = useRef<HTMLDivElement>(null);
    const row1Ref = useRef<HTMLDivElement>(null);
    const row2Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Animate title container
        if (titleRef.current) {
            gsap.fromTo(
                titleRef.current,
                {
                    y: 60,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        }

        // Animate first row
        if (row1Ref.current) {
            gsap.fromTo(
                row1Ref.current.children,
                {
                    y: 80,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: row1Ref.current,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        }

        // Animate second row
        if (row2Ref.current) {
            gsap.fromTo(
                row2Ref.current.children,
                {
                    y: 80,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: row2Ref.current,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        }

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <section className="w-full py-[120px] bg-white">
            <div className="max-w-[1472px] mx-auto px-4">
                {/* Title Container */}
                <div ref={titleRef} className="flex flex-col items-center gap-4 mb-24">
                    {/* Kicker */}
                    <p
                        className="text-[#EA7B69] text-sm leading-5 tracking-[0.75px] uppercase font-bold"
                        style={{ fontFamily: 'Public Sans, sans-serif' }}
                    >
                        • WHY CHOOSE US?
                    </p>

                    {/* Title */}
                    <h2
                        className="text-[48px] leading-[56px] font-medium text-center text-[#030712]"
                        style={{ fontFamily: 'Nohemi, sans-serif' }}
                    >
                        A Design Partner Who{' '}
                        <span className="italic font-serif block">Understands Startups</span>
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="flex flex-col gap-6">
                    {/* First Row: 35% + 35% + 30% */}
                    <div ref={row1Ref} className="flex flex-col lg:flex-row gap-6">
                        <div className="w-full lg:w-[35%]">
                            <WhyChooseUsCard
                                title={whyChooseUsData[0].title}
                                description={whyChooseUsData[0].description}
                                icon={whyChooseUsData[0].icon}
                                variant={whyChooseUsData[0].variant as 'default' | 'highlight'}
                            />
                        </div>
                        <div className="w-full lg:w-[35%]">
                            <WhyChooseUsCard
                                title={whyChooseUsData[1].title}
                                description={whyChooseUsData[1].description}
                                icon={whyChooseUsData[1].icon}
                                variant={whyChooseUsData[1].variant as 'default' | 'highlight'}
                            />
                        </div>
                        <div className="w-full lg:w-[30%]">
                            <WhyChooseUsCard
                                title={whyChooseUsData[2].title}
                                description={whyChooseUsData[2].description}
                                icon={whyChooseUsData[2].icon}
                                variant={whyChooseUsData[2].variant as 'default' | 'highlight'}
                            />
                        </div>
                    </div>

                    {/* Second Row: 25% + 25% + 50% */}
                    <div ref={row2Ref} className="flex flex-col lg:flex-row gap-6">
                        <div className="w-full lg:w-[25%]">
                            <WhyChooseUsCard
                                title={whyChooseUsData[3].title}
                                description={whyChooseUsData[3].description}
                                icon={whyChooseUsData[3].icon}
                                variant={whyChooseUsData[3].variant as 'default' | 'highlight'}
                            />
                        </div>
                        <div className="w-full lg:w-[25%]">
                            <WhyChooseUsCard
                                title={whyChooseUsData[4].title}
                                description={whyChooseUsData[4].description}
                                icon={whyChooseUsData[4].icon}
                                variant={whyChooseUsData[4].variant as 'default' | 'highlight'}
                            />
                        </div>
                        <div className="w-full lg:w-[50%]">
                            <WhyChooseUsCard
                                title={whyChooseUsData[5].title}
                                description={whyChooseUsData[5].description}
                                icon={whyChooseUsData[5].icon}
                                variant={whyChooseUsData[5].variant as 'default' | 'highlight'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
