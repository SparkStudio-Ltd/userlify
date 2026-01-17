'use client';

import Image from 'next/image';

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: () => void;
}

export default function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
    return (
        <div className="bg-[#F8F8F7] p-[25px] border border-[#D8D5D4] rounded-[24px] w-full lg:w-[600px] transition-all duration-300">
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between gap-6 text-left"
            >
                <h3
                    className="text-lg leading-[18px] text-[#030712] flex-1"
                    style={{ fontFamily: 'Nohemi, sans-serif', fontWeight: 500 }}
                >
                    {question}
                </h3>
                <div className="flex-shrink-0 border border-[#E8E6E6] rounded-full p-2">
                    <Image
                        src={
                            isOpen
                                ? '/assets/icons/minus_icon.svg'
                                : '/assets/icons/plus_icon.svg'
                        }
                        alt={isOpen ? 'Collapse' : 'Expand'}
                        width={16}
                        height={16}
                        className="w-4 h-4"
                    />
                </div>
            </button>

            {/* Answer with smooth fade + slide in animation */}
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'
                    }`}
            >
                <p
                    className="text-base leading-6 text-[#030712] tracking-[-0.25px] font-medium"
                    style={{ fontFamily: 'Public Sans, sans-serif'}}
                >
                    {answer}
                </p>
            </div>
        </div>
    );
}
