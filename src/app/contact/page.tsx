'use client';

import { Footer, Header } from '@/components/layout';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import gsap from 'gsap';
import { CTASection, FAQSectionContact } from '@/components/sections';

const serviceTypes = [
    'UI/UX Design',
    'Mobile Design',
    'Web Design',
    'Product Design',
    'Brand Design',
    'SaaS Design',
    'E-commerce Design',
];

const locations = [
    { id: 1, city: 'Philadelphia, USA' },
    { id: 2, city: 'Uttara, Dhaka' },
];

const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com', icon: '/assets/icons/facebook_icon.svg' },
    { name: 'Twitter', href: 'https://twitter.com', icon: '/assets/icons/twitter_icon.svg' },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: '/assets/icons/linkedin_icon.svg' },
    { name: 'Instagram', href: 'https://instagram.com', icon: '/assets/icons/instagram_icon.svg' },
];

export default function ContactPage() {
    const headerRef = useRef<HTMLDivElement>(null);
    const leftCardRef = useRef<HTMLDivElement>(null);
    const rightCardRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const [selectedService, setSelectedService] = useState(
        typeof window !== 'undefined' ? sessionStorage.getItem('contactService') || '' : ''
    );
    const [formData, setFormData] = useState({
        name:
            typeof window !== 'undefined' ? sessionStorage.getItem('contactName') || '' : '',
        email:
            typeof window !== 'undefined' ? sessionStorage.getItem('contactEmail') || '' : '',
        phone:
            typeof window !== 'undefined' ? sessionStorage.getItem('contactPhone') || '' : '',
        message:
            typeof window !== 'undefined' ? sessionStorage.getItem('contactMessage') || '' : '',
    });

    useEffect(() => {
        // Animate header
        if (headerRef.current) {
            gsap.fromTo(
                headerRef.current,
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
                        trigger: headerRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        }

        // Animate left card
        if (leftCardRef.current) {
            gsap.fromTo(
                leftCardRef.current,
                {
                    x: -80,
                    opacity: 0,
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: leftCardRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        }

        // Animate right card
        if (rightCardRef.current) {
            gsap.fromTo(
                rightCardRef.current,
                {
                    x: 80,
                    opacity: 0,
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: rightCardRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        }
    }, []);

    const handleServiceSelect = (service: string) => {
        setSelectedService(service);
        if (typeof window !== 'undefined') {
            sessionStorage.setItem('contactService', service);
        }
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (typeof window !== 'undefined') {
            sessionStorage.setItem(
                `contact${name.charAt(0).toUpperCase() + name.slice(1)}`,
                value
            );
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission locally for now
        console.log('Form submitted:', { ...formData, service: selectedService });

        

        // if (typeof window !== 'undefined') {
        //     sessionStorage.removeItem('contactService');
        //     sessionStorage.removeItem('contactName');
        //     sessionStorage.removeItem('contactEmail');
        //     sessionStorage.removeItem('contactPhone');
        //     sessionStorage.removeItem('contactMessage');
        // }
        // router.push('/thank-you');
    };


    return (
        <>
            <Header />
            <main className="w-full bg-white px-12 pt-[216px] pb-[120px]">
                {/* Two Column Layout */}
                <div className="w-[1472px] grid grid-cols-1 gap-8 lg:grid-cols-5 mx-auto">
                    {/* Left Card - 40% (2 columns) */}
                    <div
                        ref={leftCardRef}
                        className="flex flex-col p-10 lg:col-span-2"
                    >
                        <div ref={headerRef} className="max-w-[520px]">
                            <p
                                className="text-sm uppercase tracking-[0.75px] text-primary"
                                style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 700 }}
                            >
                                • CONTACT
                            </p>
                            <h1 className="mt-4 text-[60px] leading-[64px] text-[#2A0E63]">
                                <span style={{ fontFamily: 'Nohemi, sans-serif', fontWeight: 500 }}>
                                    Let's Take the
                                </span>
                                <br />
                                <span
                                    className="italic text-[72px] leading-[80px] tracking-[-2px] font-serif"
                                    style={{fontWeight: 400 }}
                                >
                                    First Step Together
                                </span>
                            </h1>
                        </div>

                        <div className="mt-14 grid gap-10">
                            <div className="grid gap-10 sm:grid-cols-2">
                                {locations.map((location, index) => (
                                <div key={location.id} className="flex flex-col gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center">
                                            <Image
                                                src="/assets/icons/locationContact.svg"
                                                alt=""
                                                width={40}
                                                height={40}
                                            />
                                        </div>
                                        <div>
                                            <p
                                                className="text-[21px] text-[#030712]"
                                                style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 600 }}
                                            >
                                                Location {index + 1}
                                            </p>
                                            <p
                                                className="mt-1 text-[16px] leading-6 text-[#030712]"
                                                style={{ fontFamily: 'Public Sans, sans-serif' }}
                                            >
                                                {location.city}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="grid gap-10 sm:grid-cols-2">
                                <div className="flex flex-col gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center">
                                        <Image
                                            src="/assets/icons/mailContact.svg"
                                            alt=""
                                            width={40}
                                            height={40}
                                        />
                                    </div>
                                    <div>
                                        <p
                                            className="text-[21px] text-[#030712]"
                                            style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 600 }}
                                        >
                                            Email
                                        </p>
                                        <p
                                            className="mt-1 text-[16px] leading-6 text-[#030712]"
                                            style={{ fontFamily: 'Public Sans, sans-serif' }}
                                        >
                                            support@userlify.com
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-8">
                                    <p
                                        className="text-[21px] text-[#030712]"
                                        style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 600 }}
                                    >
                                        Social Media
                                    </p>
                                    <div className="flex items-center gap-4">
                                        {socialLinks.map((social) => (
                                            <a
                                                key={social.name}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group flex h-11 w-11 items-center justify-center rounded-xl border border-[#D9DADE] bg-[#ECEDEE] transition-colors hover:border-transparent hover:bg-[#E86A54]"
                                            >
                                                <Image
                                                    src={social.icon}
                                                    alt={social.name}
                                                    width={20}
                                                    height={20}
                                                    className="brightness-0 transition-all group-hover:invert group-hover:brightness-0"
                                                />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Form - 60% (3 columns) */}
                    <div
                        ref={rightCardRef}
                        className="flex flex-col rounded-3xl border border-[#E8E6E6] bg-white p-10 lg:col-span-3"
                    >
                        {/* Form Header */}
                        <div className="mb-8 text-center">
                            <h3
                                className="text-[30px] leading-tight text-primary"
                                style={{ fontFamily: 'Nohemi, sans-serif', fontWeight: 400 }}
                            >
                                Your Future
                            </h3>
                            <h3
                                className="text-[30px] leading-tight text-[#030712]"
                                style={{ fontFamily: 'Nohemi, sans-serif', fontWeight: 400 }}
                            >
                                Website Starts Here
                            </h3>
                        </div>

                        {/* Service Type Buttons */}
                        <div className="mb-10 flex flex-wrap gap-3">
                            {serviceTypes.map((service) => (
                                <button
                                    key={service}
                                    type="button"
                                    onClick={() => handleServiceSelect(service)}
                                    className={`rounded-full border px-9 py-4 text-[18px] transition-all ${selectedService === service
                                        ? 'border-primary bg-primary text-white'
                                        : 'border-[#E8E6E6] bg-[#F8F8F7] text-[#030712] hover:border-primary/50'
                                        }`}
                                    style={{ fontFamily: 'Public Sans, sans-serif' }}
                                >
                                    {service}
                                </button>
                            ))}
                        </div>

                        {/* Contact Form */}
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                            {/* Name Field - Full Width */}
                            <div className="flex flex-col gap-2">
                                <label
                                    htmlFor="name"
                                    className="text-[16px] text-[#32201D]"
                                    style={{ fontFamily: 'Public Sans, sans-serif' }}
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="John Smith"
                                    className="rounded-lg border border-[#D8D5D4] bg-[#F8F8F7] px-5 py-4 text-[18px] text-[#766A68] transition-colors placeholder:text-[#766A68] focus:border-primary focus:outline-none"
                                    style={{ fontFamily: 'Public Sans, sans-serif' }}
                                    required
                                />
                            </div>

                            {/* Email and Phone - Two Column */}
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                <div className="flex flex-col gap-2">
                                    <label
                                        htmlFor="email"
                                        className="text-[16px] text-[#32201D]"
                                        style={{ fontFamily: 'Public Sans, sans-serif' }}
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="john@example.com"
                                        className="rounded-lg border border-[#D8D5D4] bg-[#F8F8F7] px-5 py-4 text-[18px] text-[#766A68] transition-colors placeholder:text-[#766A68] focus:border-primary focus:outline-none"
                                        style={{ fontFamily: 'Public Sans, sans-serif' }}
                                        required
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label
                                        htmlFor="phone"
                                        className="text-[16px] text-[#32201D]"
                                        style={{ fontFamily: 'Public Sans, sans-serif' }}
                                    >
                                        Phone/ Whatsapp
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="(713) 123-4567"
                                        className="rounded-lg border border-[#D8D5D4] bg-[#F8F8F7] px-5 py-4 text-[18px] text-[#766A68] transition-colors placeholder:text-[#766A68] focus:border-primary focus:outline-none"
                                        style={{ fontFamily: 'Public Sans, sans-serif' }}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Message Field */}
                            <div className="flex flex-col gap-2">
                                <label
                                    htmlFor="message"
                                    className="text-[16px] text-[#32201D]"
                                    style={{ fontFamily: 'Public Sans, sans-serif' }}
                                >
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="How can we assist you?"
                                    rows={5}
                                    className="resize-none rounded-lg border border-[#D8D5D4] bg-[#F8F8F7] px-5 py-4 text-[18px] text-[#766A68] transition-colors placeholder:text-[#766A68] focus:border-primary focus:outline-none"
                                    style={{ fontFamily: 'Public Sans, sans-serif' }}
                                    required
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="flex flex-col items-center gap-4 pt-6">
                                <button
                                    type="submit"
                                    className="flex w-fit items-center gap-3 rounded-full bg-primary px-8 py-4 text-[18px] text-white transition-all hover:bg-primary-600 hover:shadow-lg active:scale-95"
                                    style={{ fontFamily: 'Public Sans, sans-serif' }}
                                >
                                    Send Message
                                    <FaArrowRight size={16} />
                                </button>

                                {/* Success Message */}
                                <p
                                    className="text-[16px] text-[#32201D]"
                                    style={{ fontFamily: 'Public Sans, sans-serif' }}
                                >
                                    We'll get back to you within 12 hours!
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <FAQSectionContact/>
            <CTASection/>
            <Footer/>
        </>
    );
}
