'use client';

import reviewsData from '@/../public/data/reviews.json';
import { ReviewCard } from '@/components/cards';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

export default function ReviewsSection() {
    const sliderRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<gsap.core.Tween | null>(null);

    useEffect(() => {
        if (!sliderRef.current) return;

        const slider = sliderRef.current;
        const firstCard = slider.querySelector('.review-card');
        if (!firstCard) return;

        const cardWidth = firstCard.clientWidth;
        const gap = 40;
        const totalWidth = (cardWidth + gap) * reviewsData.length;

        // Clone reviews for seamless loop
        const firstClone = slider.innerHTML;
        slider.innerHTML = firstClone + firstClone;

        // GSAP animation - right to left
        animationRef.current = gsap.to(slider, {
            x: -totalWidth,
            duration: 110,
            ease: 'none',
            repeat: -1,
            modifiers: {
                x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
            },
        });

        // Pause on hover
        slider.addEventListener('mouseenter', () => {
            animationRef.current?.pause();
        });

        slider.addEventListener('mouseleave', () => {
            animationRef.current?.resume();
        });

        return () => {
            animationRef.current?.kill();
        };
    }, []);

    return (
        <section className="w-full px-4 lg:px-12 py-24 lg:py-30 bg-[#F8F8F7] overflow-hidden">
            <div className="max-w-[1472px] mx-auto">
                {/* Top Section - Kicker and Title */}
                <div className="flex flex-col items-center gap-4 mb-24">
                    {/* Kicker */}
                    <p
                        className="text-[#EA7B69] text-sm leading-5 tracking-[0.75px] uppercase font-bold"
                        style={{ fontFamily: 'Public Sans, sans-serif' }}
                    >
                        • CLIENT LOVE
                    </p>

                    {/* Title */}
                    <div className="text-center">
                        <h2
                            className="text-[48px] leading-[56px] font-medium text-[#030712]"
                            style={{ fontFamily: 'Nohemi, sans-serif' }}
                        >
                            <span
                                className="italic block leading-[50px] tracking-tighter font-serif"
                            >
                                Trusted by Founders
                            </span>
                            Who Dare to Build the Future
                        </h2>
                    </div>
                </div>

                {/* Bottom Section - Text and Slider */}
                <div className="flex flex-col lg:flex-row gap-24 md:gap-16 items-center">
                    {/* Left Container - Text */}
                    <div className="lg:w-[300px] flex-shrink-0 hidden lg:block">
                        <h3
                            className="text-[48px] leading-[56px] font-medium text-[#030712] mb-6"
                            style={{ fontFamily: 'Nohemi, sans-serif' }}
                        >
                            Love From Our{' '}
                            <span className="italic font-serif" style={{ letterSpacing: -0.5 }}>
                                Client
                            </span>
                        </h3>
                        <p
                            className="text-lg leading-7 text-[#030712]"
                            style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 400 }}
                        >
                            Empowering you to take charge of your financial future with
                            intuitive tools and personalized insights.
                        </p>
                    </div>

                    {/* Right Container - Slider */}
                    <div className="flex-1 overflow-hidden max-w-[calc(332px*3+80px)]">
                        {/* Slider */}
                        <div ref={sliderRef} className="flex gap-10 items-stretch">
                            {reviewsData.map((review, index) => (
                                <div key={index} className="review-card flex">
                                    <ReviewCard
                                        title={review.headline}
                                        description={review.content}
                                        reviewerName={review.author.name}
                                        designation={review.author.role}
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
