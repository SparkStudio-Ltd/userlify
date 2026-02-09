'use client';

import { useState } from 'react';

interface ShareCardProps {
    blogUrl: string;
    title: string;
}

export default function ShareCard({ blogUrl, title }: ShareCardProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(blogUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    const shareLinks = [
        {
            name: 'Facebook',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
            ),
            url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(blogUrl)}`,
        },
        {
            name: 'LinkedIn',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                </svg>
            ),
            url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(blogUrl)}&title=${encodeURIComponent(title)}`,
        },
        {
            name: 'X',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            ),
            url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(blogUrl)}&text=${encodeURIComponent(title)}`,
        },
        {
            name: 'Instagram',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
            ),
            url: '#',
        },
    ];

    return (
        <div
            className="relative rounded-[32px] p-6 overflow-hidden border border-[#E8E6E6] h-full"
            style={{
                background: 'linear-gradient(180deg, #F9ECEC 0%, #FFFFFF 72%)',
            }}
        >
            <div className="flex flex-col gap-6 h-full items-center">
                {/* Title */}
                <h3
                    className="text-[#030712] text-lg"
                    style={{ fontFamily: 'Nohemi, sans-serif', fontWeight: 500 }}
                >
                    Share
                </h3>

                {/* Social Icons */}
                <div className="flex items-center gap-4">
                    {shareLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-[10px] bg-white border border-[#E8E6E6] text-[#030712] hover:bg-[#EA7B69] hover:text-white hover:border-[#EA7B69] transition-all"
                            aria-label={`Share on ${link.name}`}
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>

                {/* Copy Link */}
                <div className="flex flex-col gap-2 items-center w-full">
                    <h4
                        className="text-[#030712] text-lg"
                        style={{ fontFamily: 'Nohemi, sans-serif', fontWeight: 500 }}
                    >
                        Copy link
                    </h4>
                    <div className="relative w-full">
                        <input
                            type="text"
                            value={blogUrl}
                            readOnly
                            className="w-full px-2 md:px-3 py-3 md:py-6 pr-16 rounded-[10px] bg-white border border-[#E8E6E6] text-[#030712] text-lg truncate"
                            style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 400 }}
                        />
                        <button
                            onClick={handleCopy}
                            className="absolute right-2 top-1/2 -translate-y-1/2 w-9 md:w-12 h-9 md:h-12 flex items-center justify-center rounded-[10px] bg-white border border-[#E8E6E6] text-[#030712] hover:bg-[#EA7B69] hover:text-white hover:border-[#EA7B69] transition-all"
                            aria-label="Copy link"
                        >
                            {copied ? (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            ) : (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
