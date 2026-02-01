'use client';

import faqData from '@/../public/data/faq.json';
import FAQItemContact from '@/components/cards/FAQItemContact';
import { ArrowUpRight } from '@/components/icons';
import { Button } from '@/components/ui';
import Image from 'next/image';
import { useState } from 'react';

export default function FAQSectionContact() {
    const [openIndex, setOpenIndex] = useState<number>(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className="w-full py-16 lg:py-32 px-4 lg:px-12 bg-neutral-50">
            <div className="max-w-[1472px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    {/* Left Section */}
                    <div className="w-full  flex flex-col gap-10">
                        {/* Kicker */}
                        <div className='flex flex-col gap-4 '>
                            <p
                                className="text-[#EA7B69] text-sm leading-5 tracking-[0.75px] uppercase font-bold"
                                style={{ fontFamily: 'Public Sans, sans-serif' }}
                            >
                                • FAQ'S
                            </p>

                            {/* Title */}
                            <h2
                                className="text-[48px] leading-[56px] text-[#030712]"
                                style={{ fontFamily: 'Nohemi, sans-serif', fontWeight: 500 }}
                            >
                                Your <span className='text-primary'>Web Design</span> Questions,{' '}
                                <span className="italic font-serif">
                                    Answered
                                </span>
                            </h2>

                            {/* Description */}
                            <p
                                className="text-base leading-6 text-[#030712] tracking-[-0.25px]"
                                style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 400 }}
                            >
                                Have a project in mind? Let's make it happen.
                            </p>
                        </div>

                        {/* Button */}
                        <div className='gap-3'>
                            <Button
                                variant="primary"
                                size="lg"
                                href="/portfolio"
                                className="group text-lg py-[18px] px-8"
                            >
                                Contact Us
                                <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                            </Button>
                        </div>

                        {/* Image */}
                        <div className="relative w-full h-[512px] rounded-[24px] overflow-hidden">
                            <Image
                                src="/assets/images/faq_image.png"
                                alt="FAQ"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Section - FAQ Accordion */}
                    <div className="w-full flex flex-col gap-6 items-end">
                        {faqData.faq.map((faq: { question: string; answer: string }, index: number) => (
                            <FAQItemContact
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openIndex === index}
                                onToggle={() => handleToggle(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
