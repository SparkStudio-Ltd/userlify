'use client';

import projectsData from '@/../public/data/projects.json';
import { ProjectCard } from '@/components/cards';
import { Footer, Header } from '@/components/layout';
import { ContactUsSection, CTASection } from '@/components/sections';
import ReviewSectionPortfolio from '@/components/sections/ReviewSectionPortfolio';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const categories = [
    'Dashboard Design',
    'Productivity Tool',
    'UI/UX Design',
    'Product Design',
];

const projectDetails = [
    { label: 'Industry', value: 'Tech' },
    { label: 'Location', value: 'California, CA' },
    { label: 'Founded', value: '2005' },
    { label: 'Company Size', value: 'Medium (10-50 employees)' },
    { label: 'Key Markets', value: 'Global' },
    { label: 'Growth Stage', value: 'Enterprise' },
    { label: 'Website', value: 'www.example.com' },
];

export default function PortfolioPage() {
    const heroRef = useRef<HTMLDivElement>(null);
    const breadcrumbRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const categoriesRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const detailsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Animate breadcrumb
        if (breadcrumbRef.current) {
            gsap.fromTo(
                breadcrumbRef.current,
                { y: -20, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    ease: 'power3.out',
                }
            );
        }

        // Animate title
        if (titleRef.current) {
            gsap.fromTo(
                titleRef.current,
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    delay: 0.2,
                    ease: 'power3.out',
                }
            );
        }

        // Animate categories
        if (categoriesRef.current) {
            gsap.fromTo(
                categoriesRef.current.children,
                { y: 20, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    delay: 0.4,
                    stagger: 0.1,
                    ease: 'power3.out',
                }
            );
        }

        // Animate main image
        if (imageRef.current) {
            gsap.fromTo(
                imageRef.current,
                { y: 60, opacity: 0, scale: 0.95 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    delay: 0.6,
                    ease: 'power3.out',
                }
            );
        }

        // Animate project details
        if (detailsRef.current) {
            gsap.fromTo(
                detailsRef.current.children,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    delay: 0.8,
                    stagger: 0.1,
                    ease: 'power3.out',
                }
            );
        }
    }, []);

    return (
        <>
            <Header />
            <main className="w-full bg-white">
                {/* Hero Section */}
                <section
                    ref={heroRef}
                    className="mx-auto max-w-[1216px] px-4 pt-32 pb-16 md:px-8 lg:px-16 lg:pt-40 lg:pb-24"
                >
                    {/* Breadcrumb */}
                    <div
                        ref={breadcrumbRef}
                        className="mb-6 flex items-center gap-2 text-sm lg:mb-8"
                    >
                        <Link
                            href="/"
                            className="font-public-sans text-[#766A68] transition-colors hover:text-primary"
                        >
                            HOME
                        </Link>
                        <span className="text-[#766A68]">/</span>
                        <Link
                            href="/case-study"
                            className="font-public-sans text-[#766A68] transition-colors hover:text-primary"
                        >
                            CASE STUDY
                        </Link>
                        <span className="text-[#766A68]">/</span>
                        <span className="font-public-sans font-medium text-[#030712]">
                            CASE STUDY DETAILS
                        </span>
                    </div>

                    {/* Title */}
                    <h1
                        ref={titleRef}
                        className="mb-6 max-w-5xl text-4xl leading-tight text-[#2A0E63] md:text-5xl lg:mb-8 lg:text-[60px] lg:leading-[64px] lg:tracking-[-0.8px]"
                        style={{ fontFamily: 'Nohemi, sans-serif', fontWeight: 500 }}
                    >
                        An AI-powered web app designed to support students in learning smarter
                    </h1>

                    {/* Categories and Badge Row */}
                    <div className="mb-10 flex items-center justify-between gap-4 lg:mb-12">
                        <div ref={categoriesRef} className="flex flex-wrap items-center gap-3">
                            {categories.map((category, index) => (
                                <span
                                    key={index}
                                    className="flex items-center gap-1 rounded-full border border-[#E8E6E6] bg-[#F8F8F7] px-4 py-2 text-[13px] leading-5 text-[#030712] transition-colors hover:border-primary/30"
                                    style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 400 }}
                                >
                                    {category}
                                </span>
                            ))}
                        </div>
                        <div className="relative flex-shrink-0 overflow-hidden rounded-lg lg:h-10 lg:w-40">
                            <Image
                                src="/assets/images/portfolio-top.png"
                                alt="Study Master"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Main Hero Image */}
                    <div
                        ref={imageRef}
                        className="relative mb-12 aspect-video w-full overflow-hidden rounded-2xl lg:mb-16 lg:rounded-3xl"
                    >
                        <Image
                            src="/assets/images/portfolio-img-1.png"
                            alt="Project showcase"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Project Details Grid */}
                    <div
                        ref={detailsRef}
                        className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-4"
                    >
                        {projectDetails.map((detail, index) => (
                            <div key={index} className="flex flex-col gap-2 border-l-[3px] border-[#E86A54 ]">
                                <p
                                    className="pl-3 text-xs tracking-wide text-[#030712] lg:text-sm"
                                    style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 400 }}
                                >
                                    {detail.label}
                                </p>
                                <p
                                    className="pl-3 text-base font-semibold text-[#030712] lg:text-lg"
                                    style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 600 }}
                                >
                                    {detail.value}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Project Overview Section */}
                    <div className="mt-16 lg:mt-24">
                        <h2
                            className="mb-6 text-3xl font-medium text-[#030712] md:text-4xl lg:mb-8 lg:text-5xl"
                            style={{ fontFamily: 'Nohemi, sans-serif', fontWeight: 500 }}
                        >
                            Project Overview
                        </h2>
                        <div className="space-y-4 text-base leading-relaxed text-[#030712] lg:text-[18px] lg:leading-[28px] lg:tracking-[-0.4px]">
                            <p style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 400 }}>
                                The client approached Userlify with an early-stage product idea and a need for a clear, scalable design system. Our goal was to translate the vision into a usable, visually consistent product ready for development and launch. The brief encompassed identify with an early-stage product idea and a need for a clear, scalable design system. The client approached Userlify with an early-stage product idea and a need for a clear, scalable design system. Our goal was to translate the vision into a usable, visually consistent product ready for development and launch.
                            </p>
                            <p style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 400 }}>
                                The client approached Userlify with an early-stage product idea and a need for a clear, scalable design system. Our goal was to translate the vision into a usable, visually consistent product ready for development and launch. The client approached Userlify with an early-stage product idea and a need for a clear, scalable design system. Our goal was to translate the vision into a usable, visually consistent product ready for development and launch.
                            </p>
                        </div>
                    </div>

                    {/* The Problem Section */}
                    <div className="mt-16 lg:mt-24">
                        <h2
                            className="mb-6 text-3xl font-medium text-[#030712] md:text-4xl lg:mb-8 lg:text-5xl"
                            style={{ fontFamily: 'Nohemi, sans-serif', fontWeight: 500 }}
                        >
                            The Problem
                        </h2>
                        <div className="mb-8 space-y-4 text-base leading-relaxed text-[#030712] lg:text-[18px] lg:leading-[28px] lg:tracking-[-0.4px]">
                            <p style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 400 }}>
                                The client approached Userlify with an early-stage product idea and a need for a clear, scalable design system. Our goal was to translate the vision into a usable, visually consistent product ready for development and launch. The client approached Userlify with an early-stage product idea and a need for a clear, scalable design system. Our goal was to translate the vision into a usable, visually consistent product ready for development and launch. The brief encompassed identify with an early-stage product idea and a need for a clear, scalable design system.
                            </p>
                        </div>
                        <h3
                            className="mb-4 text-xl font-semibold text-[#030712] lg:text-2xl"
                            style={{ fontFamily: 'Nohemi, sans-serif', fontWeight: 500 }}
                        >
                            Problem list
                        </h3>
                        <ul className="space-y-3 text-base text-[#030712] lg:text-[18px] lg:leading-[28px]">
                            <li className="flex gap-3" style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 400 }}>
                                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#030712]"></span>
                                <span>Understanding User Needs</span>
                            </li>
                            <li className="flex gap-3" style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 400 }}>
                                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#030712]"></span>
                                <span>Explain how research, interviews, and data help shape better products.</span>
                            </li>
                            <li className="flex gap-3" style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 400 }}>
                                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#030712]"></span>
                                <span>Highlight benefits like user retention, reduced development cost, higher engagement.</span>
                            </li>
                            <li className="flex gap-3" style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 400 }}>
                                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#030712]"></span>
                                <span>Explain how strategy + simplicity + consistency improves usability.</span>
                            </li>
                            <li className="flex gap-3" style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 400 }}>
                                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#030712]"></span>
                                <span>Talk about design shortcuts, lack of testing, copying competitors, unclear flows.</span>
                            </li>
                        </ul>
                    </div>

                    {/* The Solution Section */}
                    <div className="mt-16 lg:mt-24">
                        <h2
                            className="mb-6 text-3xl font-medium text-[#030712] md:text-4xl lg:mb-8 lg:text-5xl"
                            style={{ fontFamily: 'Nohemi, sans-serif', fontWeight: 500 }}
                        >
                            The Solution
                        </h2>
                        <div className="mb-8 space-y-4 text-base leading-relaxed text-[#030712] lg:text-[18px] lg:leading-[28px] lg:tracking-[-0.4px]">
                            <p style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 400 }}>
                                The client approached Userlify with an early-stage product idea and a need for a clear, scalable design system. Our goal was to translate the vision into a usable, visually consistent product ready for development and launch. The client approached Userlify with an early-stage product idea and a need for a clear, scalable design system. Our goal was to translate the vision into a usable, visually consistent product ready for development and launch. The brief encompassed identify with an early-stage product idea and a need for a clear, scalable design system.
                            </p>
                        </div>
                        <h3
                            className="mb-4 text-xl font-semibold text-[#030712] lg:text-2xl"
                            style={{ fontFamily: 'Nohemi, sans-serif', fontWeight: 500 }}
                        >
                            Solution list
                        </h3>
                        <ul className="mb-12 space-y-3 text-base text-[#030712] lg:text-[18px] lg:leading-[28px]">
                            <li className="flex gap-3" style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 400 }}>
                                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#030712]"></span>
                                <span>Understanding User Needs</span>
                            </li>
                            <li className="flex gap-3" style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 400 }}>
                                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#030712]"></span>
                                <span>Explain how research, interviews, and data help shape better products.</span>
                            </li>
                            <li className="flex gap-3" style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 400 }}>
                                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#030712]"></span>
                                <span>Why UI/UX Matters for Startups</span>
                            </li>
                            <li className="flex gap-3" style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 400 }}>
                                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#030712]"></span>
                                <span>Highlight benefits like user retention, reduced development cost, higher engagement.</span>
                            </li>
                            <li className="flex gap-3" style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 400 }}>
                                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#030712]"></span>
                                <span>Designing with a Purpose</span>
                            </li>
                            <li className="flex gap-3" style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 400 }}>
                                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#030712]"></span>
                                <span>Explain how strategy + simplicity + consistency improves usability.</span>
                            </li>
                            <li className="flex gap-3" style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 400 }}>
                                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#030712]"></span>
                                <span>Common Mistakes Founders Make</span>
                            </li>
                            <li className="flex gap-3" style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 400 }}>
                                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#030712]"></span>
                                <span>Talk about design shortcuts, lack of testing, copying competitors, unclear flows.</span>
                            </li>
                        </ul>

                        {/* Solution Images Grid */}
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
                            <div className="relative aspect-[588/330.75] w-full overflow-hidden rounded-3xl border border-[#E8E6E6] bg-gray-100">
                                <Image
                                    src="/assets/images/portfolio-img2.png"
                                    alt="Solution mockup 1"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative aspect-[588/330.75] w-full overflow-hidden rounded-3xl border border-[#E8E6E6] bg-gray-100">
                                <Image
                                    src="/assets/images/portfolio-img3.png"
                                    alt="Solution mockup 2"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative aspect-[588/330.75] w-full overflow-hidden rounded-3xl border border-[#E8E6E6] bg-gray-100">
                                <Image
                                    src="/assets/images/portfolio-img4.png"
                                    alt="Solution mockup 3"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative aspect-[588/330.75] w-full overflow-hidden rounded-3xl border border-[#E8E6E6] bg-gray-100">
                                <Image
                                    src="/assets/images/portfolio-img5.png"
                                    alt="Solution mockup 4"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Style Guide Section */}
                    <div className="mt-16 lg:mt-24">
                        <h2
                            className="mb-6 text-3xl font-medium text-[#030712] md:text-4xl lg:mb-8 lg:text-5xl"
                            style={{ fontFamily: 'Nohemi, sans-serif', fontWeight: 500 }}
                        >
                            Style Guide
                        </h2>
                        <div className="mb-12 space-y-4 text-base leading-relaxed text-[#030712] lg:text-[18px] lg:leading-[28px] lg:tracking-[-0.4px]">
                            <p style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 400 }}>
                                The client approached Userlify with an early-stage product idea and a need for a clear, scalable design system. Our goal was to translate the vision into a usable, visually consistent product ready for development and launch. The client approached Userlify with an early-stage product idea and a need for a clear, scalable design system. Our goal was to translate the vision into a usable, visually consistent product ready for development and launch. The client approached Userlify with an early-stage product idea and a need for a clear, scalable design system. Our goal was to translate the vision into a usable, visually consistent product ready for development and launch. The brief encompassed identify with an early-stage product idea and a need for a clear, scalable design system.
                            </p>
                        </div>

                        {/* Style Guide Images */}
                        <div className="space-y-10 lg:space-y-10">
                            {/* First Row - Typography and Brand Color */}
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
                                <div className="relative aspect-[588/330.75] w-full overflow-hidden rounded-3xl border border-[#E8E6E6] bg-gray-100">
                                    <Image
                                        src="/assets/images/portfolio-img6.png"
                                        alt="Typography"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="relative aspect-[588/330.75] w-full overflow-hidden rounded-3xl border border-[#E8E6E6] bg-gray-100">
                                    <Image
                                        src="/assets/images/portfolio-img7.png"
                                        alt="Brand Color"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Second Row - Full Width Image */}
                            <div className="relative aspect-[1216/684] w-full overflow-hidden rounded-3xl">
                                <Image
                                    src="/assets/images/portfolio-img8.png"
                                    alt="Style Guide Overview"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Wireframe Section */}
                    <div className="mt-16 lg:mt-24">
                        <h2
                            className="mb-6 text-3xl font-medium text-[#030712] md:text-4xl lg:mb-8 lg:text-5xl"
                            style={{ fontFamily: 'Nohemi, sans-serif', fontWeight: 500 }}
                        >
                            Wireframe
                        </h2>
                        <div className="mb-12 space-y-4 text-base leading-relaxed text-[#030712] lg:text-[18px] lg:leading-[28px] lg:tracking-[-0.4px]">
                            <p style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 400 }}>
                                The client approached Userlify with an early-stage product idea and a need for a clear, scalable design system. Our goal was to translate the vision into a usable, visually consistent product ready for development and launch. The client approached Userlify with an early-stage product idea and a need for a clear, scalable design system. Our goal was to translate the vision into a usable, visually consistent product ready for development and launch. The client approached Userlify with an early-stage product idea and a need for a clear, scalable design system. Our goal was to translate the vision into a usable, visually consistent product ready for development and launch. The brief encompassed identify with an early-stage product idea and a need for a clear, scalable design system.
                            </p>
                        </div>

                        {/* Wireframe Image */}
                        <div className="relative aspect-[1216/684] w-full overflow-hidden rounded-3xl">
                            <Image
                                src="/assets/images/portfolio-img9.png"
                                alt="Wireframe Overview"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Final Solution Section */}
                    <div className="mt-16 lg:mt-24">
                        <h2
                            className="mb-6 text-3xl font-medium text-[#030712] md:text-4xl lg:mb-8 lg:text-5xl"
                            style={{ fontFamily: 'Nohemi, sans-serif', fontWeight: 500 }}
                        >
                            Final Solution
                        </h2>
                        <div className="mb-12 space-y-4 text-base leading-relaxed text-[#030712] lg:text-[18px] lg:leading-[28px] lg:tracking-[-0.4px]">
                            <p style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 400 }}>
                                The client approached Userlify with an early-stage product idea and a need for a clear, scalable design system. Our goal was to translate the vision into a usable, visually consistent product ready for development and launch. The client approached Userlify with an early-stage product idea and a need for a clear, scalable design system. Our goal was to translate the vision into a usable, visually consistent product ready for development and launch. The client approached Userlify with an early-stage product idea and a need for a clear, scalable design system. Our goal was to translate the vision into a usable, visually consistent product ready for development and launch. The brief encompassed identify with an early-stage product idea and a need for a clear, scalable design system.
                            </p>
                        </div>

                        {/* Final Solution Images */}
                        <div className="space-y-10 lg:space-y-10">
                            {/* First Row - Full Width */}
                            <div className="relative aspect-[1216/684] w-full overflow-hidden rounded-3xl">
                                <Image
                                    src="/assets/images/portfolio-img10.png"
                                    alt="Final Solution Dashboard"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Second Row - Two Images */}
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
                                <div className="relative aspect-[588/330.75] w-full overflow-hidden rounded-3xl border border-[#E8E6E6] bg-gray-100">
                                    <Image
                                        src="/assets/images/portfolio-img11.png"
                                        alt="Final Solution Screen 1"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="relative aspect-[588/330.75] w-full overflow-hidden rounded-3xl border border-[#E8E6E6] bg-gray-100">
                                    <Image
                                        src="/assets/images/portfolio-img12.png"
                                        alt="Final Solution Screen 2"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Third Row - Full Width */}
                            <div className="relative aspect-[1216/684] w-full overflow-hidden rounded-3xl">
                                <Image
                                    src="/assets/images/portfolio-img13.png"
                                    alt="Final Solution Complete"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                </section>

                <ReviewSectionPortfolio/>

                {/* Projects Section - Single Row */}
                <section className="relative w-full bg-[#030712] px-4 py-16 text-white md:px-8 md:py-24 lg:px-16 lg:py-32">
                    <div className="relative z-10 mx-auto max-w-[1472px]">
                        {/* HEADER SECTION */}
                        <div className="mb-12 lg:mb-20">
                            <div className="mb-4 flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-primary" />
                                <span
                                    className="text-sm font-medium uppercase tracking-wider text-primary"
                                    style={{ fontFamily: 'Nohemi, sans-serif' }}
                                >
                                    MORE CASE STUDIES
                                </span>
                            </div>
                            <h2
                                className="text-4xl font-medium leading-tight text-white md:text-5xl lg:text-[60px] lg:leading-[64px] lg:tracking-[-0.8px]"
                                style={{ fontFamily: 'Nohemi, sans-serif', fontWeight: 500 }}
                            >
                                Explore More of Our Work
                            </h2>
                        </div>

                        {/* PROJECTS GRID - Single Row */}
                        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-5">
                            <div className="lg:col-span-3">
                                {projectsData[0] && (
                                    <ProjectCard
                                        title={projectsData[0].title}
                                        description={projectsData[0].description}
                                        image={projectsData[0].image}
                                        tags={projectsData[0].tags}
                                        isLarge={true}
                                    />
                                )}
                            </div>
                            <div className="lg:col-span-2">
                                {projectsData[1] && (
                                    <ProjectCard
                                        title={projectsData[1].title}
                                        description={projectsData[1].description}
                                        image={projectsData[1].image}
                                        tags={projectsData[1].tags}
                                        isLarge={false}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Us Section */}
                <ContactUsSection />
                {/* CTA Section */}
                <CTASection />
            </main>

            <Footer />
        </>
    );
}
