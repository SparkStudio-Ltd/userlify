import { ArrowUpRight } from '@/components/icons';
import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
    title: string;
    slug: string;
    coverImage: string;
    readTime: string;
}

export default function BlogCard({
    title,
    slug,
    coverImage,
    readTime,
}: BlogCardProps) {
    return (
        <div className="group flex flex-col gap-8">
            {/* Cover Image */}
            <div className="relative w-full aspect-[3/2] border border-[#E8E6E6] rounded-[32px] overflow-hidden">
                <Image
                    src={coverImage}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-3 md:gap-6">
                {/* Read Time */}
                <div className="flex items-center gap-4">
                    <img src='/assets/icons/clock_icon.svg' alt="clock icon" className='h-4' />
                    <span
                        className="text-sm md:text-base md:leading-6 tracking-[-0.25px] text-[#030712]"
                        style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 400 }}
                    >
                        {readTime}
                    </span>
                </div>

                {/* Title */}
                <h3
                    className="text-xl md:text-2xl md:leading-7 text-[#030712]"
                    style={{ fontFamily: 'Nohemi, sans-serif', fontWeight: 500 }}
                >
                    {title}
                </h3>

                {/* Read More Button */}
                <Link
                    href={`/blog/${slug}`}
                    className="inline-flex items-center gap-2 text-[#EA7B69] hover:opacity-80 transition-opacity"
                >
                    <span
                        className="md:text-lg leading-7 tracking-[-0.4px]"
                        style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 500 }}
                    >
                        Read More
                    </span>
                    <ArrowUpRight className="w-5 h-5"/>
                </Link>
            </div>
        </div>
    );
}
