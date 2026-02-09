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
            icon: '/assets/icons/facebook-02.svg',
            url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(blogUrl)}`,
        },
        {
            name: 'LinkedIn',
            icon: '/assets/icons/linkedin-02.svg',
            url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(blogUrl)}&title=${encodeURIComponent(title)}`,
        },
        {
            name: 'X',
            icon: '/assets/icons/new-twitter.svg',
            url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(blogUrl)}&text=${encodeURIComponent(title)}`,
        },
        {
            name: 'Instagram',
            icon: '/assets/icons/instagram.svg',
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
            <div className="flex flex-col gap-8 h-full items-center">
                <div className='flex flex-col gap-3 items-center'>
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
                                className="group w-10 h-10 flex items-center justify-center rounded-[10px] bg-white border border-[#E8E6E6] text-[#030712] hover:bg-[#EA7B69] hover:text-white hover:border-[#EA7B69] transition-all"
                                aria-label={`Share on ${link.name}`}
                            >
                                <img
                                    src={link.icon}
                                    alt=""
                                    className="w-5 h-5 transition-all group-hover:brightness-0 group-hover:invert"
                                    aria-hidden="true"
                                />
                            </a>
                        ))}
                    </div>
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
                            className="w-full px-3 md:px-4 py-3 md:py-4 rounded-[10px] bg-white border border-[#E8E6E6] text-[#030712] text-lg truncate"
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
