import { ArrowUpRight } from '@/components/icons';
import Image from 'next/image';
import Link from 'next/link';

interface FeaturedBlogCardProps {
    title: string;
    slug: string;
    coverImage: string;
    readTime: string;
    excerpt: string;
}

export default function FeaturedBlogCard({
    title,
    slug,
    coverImage,
    readTime,
    excerpt,
}: FeaturedBlogCardProps) {
    return (
        <div className="group grid grid-cols-1 md:grid-cols-2 gap-0 rounded-[32px] overflow-hidden border border-[#E8E6E6]">
            {/* Left: Cover Image */}
            <div className="relative w-full aspect-[3/2]">
                <Image
                    src={coverImage}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>

            {/* Right: Content */}
            <div className="flex flex-col justify-center gap-3 md:gap-6 p-6 md:p-12 bg-[#F9FAFB]">
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
                    className="text-xl md:text-[32px] md:leading-[40px] text-[#030712]"
                    style={{ fontFamily: 'Nohemi, sans-serif', fontWeight: 500 }}
                >
                    {title}
                </h3>

                {/* Excerpt */}
                <p
                    className="text-sm leading-6 text-[#6B7280]"
                    style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 400 }}
                >
                    {excerpt}
                </p>

                {/* Read More Button */}
                <Link
                    href={`/blog/${slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#EA7B69] text-white rounded-full hover:bg-[#d96b59] transition-colors w-fit"
                >
                    <span
                        className="text-base leading-6"
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
