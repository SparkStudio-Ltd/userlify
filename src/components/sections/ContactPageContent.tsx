'use client';

import { ArrowRight } from '@/components/icons';
import { Button } from '@/components/ui';
import gsap from 'gsap';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

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
    {
        name: 'Facebook',
        href: 'https://facebook.com',
        icon: '/assets/icons/facebook_icon.svg',
    },
    {
        name: 'Twitter',
        href: 'https://twitter.com',
        icon: '/assets/icons/twitter_icon.svg',
    },
    {
        name: 'LinkedIn',
        href: 'https://linkedin.com',
        icon: '/assets/icons/linkedin_icon.svg',
    },
    {
        name: 'Instagram',
        href: 'https://instagram.com',
        icon: '/assets/icons/instagram_icon.svg',
    },
];

export default function ContactPageContent() {
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
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate that a service is selected
        if (!selectedService) {
            setErrorMessage('Please select a service type');
            setSubmitStatus('error');
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');
        setErrorMessage('');

        try {
            // Call our internal API route instead of external API directly
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    service: selectedService,
                    message: formData.message,
                }),
            });

            const data = await response.json();

            // Check for successful response (200-299 range)
            if (!response.ok) {
                throw new Error(data.error || 'Failed to send message');
            }

            // Success - clear form and session storage
            setSubmitStatus('success');
            setFormData({ name: '', email: '', phone: '', message: '' });
            setSelectedService('');

            if (typeof window !== 'undefined') {
                sessionStorage.removeItem('contactName');
                sessionStorage.removeItem('contactEmail');
                sessionStorage.removeItem('contactPhone');
                sessionStorage.removeItem('contactMessage');
                sessionStorage.removeItem('contactService');
            }

            // Redirect to thank-you page after a brief delay
            setTimeout(() => {
                router.push('/thank-you');
            }, 1500);
        } catch (error) {
            setSubmitStatus('error');
            if (error instanceof Error) {
                setErrorMessage(error.message);
            } else {
                setErrorMessage('Failed to send message. Please try again later.');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="overflow-hidden w-full bg-white px-4 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-32 md:px-8 md:pb-20 md:pt-40 lg:px-12 lg:pb-[120px] lg:pt-[216px]">
            {/* Two Column Layout */}
            <div className="mx-auto grid w-full max-w-[1472px] grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-5">
                {/* Left Card - 40% (2 columns) */}
                <div ref={leftCardRef} className="flex flex-col lg:col-span-2">
                    <div ref={headerRef} className="flex flex-col max-w-full lg:max-w-[520px] gap-4">
                        <p
                            className="text-sm uppercase tracking-[0.75px] text-primary"
                            style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 700 }}
                        >
                            • CONTACT
                        </p>

                        <h2
                            className="text-6xl leading-[1.15] tracking-[-0.5px] text-[#2A0E63] lg:leading-[56px]"
                            style={{ fontFamily: 'Nohemi, sans-serif', fontWeight: 500 }}
                        >
                            Let's Take the{' '}
                            <span className="md:block font-serif italic">First Step Together</span>
                        </h2>
                    </div>

                    <div className="mt-8 grid gap-6 sm:mt-10 sm:gap-8 md:mt-12 md:gap-10 lg:mt-14">
                        <div className="flex gap-6 sm:grid-cols-2 sm:gap-8 md:grid md:gap-10">
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

                        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-1">
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
                                                className="brightness-0 transition-all group-hover:brightness-0 group-hover:invert"
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
                    className="flex flex-col rounded-2xl border border-[#E8E6E6] bg-white p-6 sm:rounded-3xl sm:p-8 md:p-10 lg:col-span-3"
                >
                    {/* Form Header */}
                    <div className="mb-6 text-center sm:mb-8">
                        <h3
                            className="text-[24px] leading-tight text-primary sm:text-[28px] md:text-[30px]"
                            style={{ fontFamily: 'Nohemi, sans-serif', fontWeight: 400 }}
                        >
                            Your Future
                        </h3>
                        <h3
                            className="text-[24px] leading-tight text-[#030712] sm:text-[28px] md:text-[30px]"
                            style={{ fontFamily: 'Nohemi, sans-serif', fontWeight: 400 }}
                        >
                            Website Starts Here
                        </h3>
                    </div>

                    {/* Service Type Buttons */}
                    <div className="mb-6 flex flex-wrap gap-2 sm:mb-8 sm:gap-3 md:mb-10">
                        {serviceTypes.map((service) => (
                            <button
                                key={service}
                                type="button"
                                onClick={() => handleServiceSelect(service)}
                                className={`rounded-full border px-4 py-3 text-[14px] transition-all sm:px-6 sm:py-4 sm:text-[16px] md:px-9 md:text-[18px] ${selectedService === service
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
                            <Button
                                type="submit"
                                size="lg"
                                variant="primary"
                                disabled={isSubmitting}
                                className="gap-3"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                                {!isSubmitting && <ArrowRight className="h-5 w-5" />}
                            </Button>

                            {/* Status Messages */}
                            {submitStatus === 'success' && (
                                <p
                                    className="text-[16px] text-green-600"
                                    style={{ fontFamily: 'Public Sans, sans-serif' }}
                                >
                                    ✓ Message sent successfully! We'll get back to you within 12 hours.
                                </p>
                            )}
                            {submitStatus === 'error' && (
                                <p
                                    className="text-[16px] text-red-600"
                                    style={{ fontFamily: 'Public Sans, sans-serif' }}
                                >
                                    ✗ {errorMessage}
                                </p>
                            )}
                            {submitStatus === 'idle' && !isSubmitting && (
                                <p
                                    className="text-[16px] text-[#32201D]"
                                    style={{ fontFamily: 'Public Sans, sans-serif' }}
                                >
                                    We'll get back to you within 12 hours!
                                </p>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}
