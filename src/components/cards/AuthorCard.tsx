import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedinIn } from 'react-icons/fa';

interface AuthorCardProps {
    name: string;
    role: string;
    avatar: string;
    bio: string;
}

export default function AuthorCard({ name, role, avatar, bio }: AuthorCardProps) {
    return (
        <div 
            className="relative rounded-[32px] p-10 overflow-hidden border border-[#E8E6E6] h-full"
            style={{
                background: 'linear-gradient(180deg, #F8F8F8 40%, #F1F0FA 100%)',
            }}
        >
            <div className="flex flex-col gap-6 relative h-full justify-between">
                {/* Author Info with Label and LinkedIn */}
                <div className="flex items-center gap-4">
                    <div className="relative w-16 md:w-28 h-16 md:h-28 rounded-full overflow-hidden border border-[#E8E6E6] flex-shrink-0">
                        <Image
                            src={avatar}
                            alt={name}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex-1 flex flex-col gap-1">
                        <p
                            className="text-[#030712] text-[12px] md:text-sm uppercase tracking-[0.75px]"
                            style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 700 }}
                        >
                            AUTHOR
                        </p>
                        <h3
                            className="text-[#030712] text-base md:text-xl leading-6"
                            style={{ fontFamily: 'Nohemi, sans-serif', fontWeight: 500 }}
                        >
                            {name}
                        </h3>
                        <p
                            className="text-[#6B7280] text-[12px] md:text-sm"
                            style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 400 }}
                        >
                            {role}
                        </p>
                    </div>
                    <Link
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#EEF5FC] text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-colors flex-shrink-0"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedinIn size={20} />
                    </Link>
                </div>

                {/* Bio */}
                <p
                    className="text-[#030712] text-[14px] md:text-[18px] leading-6"
                    style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 400 }}
                >
                    {bio}
                </p>
            </div>
        </div>
    );
}
