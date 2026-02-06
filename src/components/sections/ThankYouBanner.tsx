'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';


export default function ThankYouBannerSection() {

    return (
        <main className="flex min-h-[845px]  px-4 md:px-8 lg:px-12 w-full items-center bg-white">
            <section className="flex  w-full items-center justify-center gap-16">
                <div className="flex  w-full max-w-[1472px] flex-col items-center gap-16 rounded-[40px] bg-[#F8F8F7] py-24 sm:py-24 px-4 md:px-8 lg:px-12">
                    <div className="flex h-[150px] w-[150px] md-h-[208px] md-w-[208px] items-center justify-center rounded-full bg-white p-10">
                        <Image
                            src="/assets/icons/checkmark-badgeSvg.svg"
                            alt="Success"
                            width={128}
                            height={128}
                        />
                    </div>
                    <div className="flex w-full flex-col items-center gap-10 text-center">
                        <h1
                            className="text-[40px] leading-[48px] text-[#2A0E63] sm:text-[48px] sm:leading-[56px] lg:text-[60px] lg:leading-[64px]"
                            style={{ fontFamily: 'Nohemi, sans-serif', fontWeight: 500 }}
                        >
                            Thanks for Reaching Out to Userlify
                        </h1>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <Link
                                href="/case-study"
                                className="flex items-center gap-3 rounded-full bg-primary px-6 py-3 text-[16px] text-white transition-all hover:bg-primary-600 hover:shadow-lg active:scale-95"
                                style={{ fontFamily: 'Public Sans, sans-serif' }}
                            >
                                View Our Work
                                <FaArrowRight size={14} />
                            </Link>
                            <Link
                                href="/"
                                className="rounded-full border border-[#D8D5D4] bg-white px-6 py-3 text-[16px] text-[#2A0E63] transition-all hover:border-primary hover:text-primary"
                                style={{ fontFamily: 'Public Sans, sans-serif' }}
                            >
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
