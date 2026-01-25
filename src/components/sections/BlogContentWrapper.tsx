'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

interface BlogContentWrapperProps {
    heading: React.ReactNode;
    content: React.ReactNode;
}

export default function BlogContentWrapper({ heading, content }: BlogContentWrapperProps) {
    const headerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Animate header
        if (headerRef.current) {
            gsap.fromTo(
                headerRef.current,
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power3.out',
                }
            );
        }

        // Animate content
        if (contentRef.current) {
            gsap.fromTo(
                contentRef.current,
                {
                    y: 80,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    delay: 0.3,
                    ease: 'power3.out',
                }
            );
        }
    }, []);

    return (
        <>
            <div ref={headerRef}>
                {heading}
            </div>
            <div ref={contentRef}>
                {content}
            </div>
        </>
    );
}
