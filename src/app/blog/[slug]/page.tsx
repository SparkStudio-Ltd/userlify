import blogPosts from '@/../public/data/blog_posts.json';
import AuthorCard from '@/components/cards/AuthorCard';
import ShareCard from '@/components/cards/ShareCard';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { BlogSection, CTASection } from '@/components/sections';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface BlogPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return {
            title: 'Blog Not Found',
        };
    }

    return {
        title: post.title,
        description: post.description || post.excerpt,
    };
}

export default async function BlogPost({ params }: BlogPageProps) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    const blogUrl = `https://www.userlify.com/blog/${post.slug}`;

    return (
        <>
            <Header />
            <main className="w-full bg-white">
                <div className="px-4 md:px-12 pt-24 md:pt-[150px] 2xl:pt-[216px] pb-16 md:pb-[120px]">
                    <div className="max-w-[954px] mx-auto">
                        <article className="flex flex-col gap-4 md:gap-10">
                            {/* Breadcrumb */}
                            <nav className="flex items-center gap-2 text-[12px] md:text-sm">
                                <Link
                                    href="/"
                                    className="text-[#030712] hover:text-[#EA7B69] transition-colors"
                                    style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 700 }}
                                >
                                    HOME
                                </Link>
                                <span className="text-[#030712]">&gt;</span>
                                <Link
                                    href="/blog"
                                    className="text-[#030712] hover:text-[#EA7B69] transition-colors"
                                    style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 700 }}
                                >
                                    BLOGS
                                </Link>
                                <span className="text-[#030712]">&gt;</span>
                                <span
                                    className="text-[#030712] uppercase"
                                    style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 700 }}
                                >
                                    DESIGN
                                </span>
                            </nav>

                            {/* Title */}
                            <h1
                                className="text-[30px] md:text-[60px] leading-[34px] md:leading-[68px] text-[#2A0E63]"
                                style={{ fontFamily: 'Nohemi, sans-serif', fontWeight: 500 }}
                            >
                                {post.title}
                            </h1>

                            {/* Topic Badges */}
                            <div className="flex flex-wrap gap-3">
                                {post.topics.map((topic, topicIndex) => (
                                    <span
                                        key={`${topic}-${topicIndex}`}
                                        className="px-2 md:px-4 py-1 md:py-2 rounded-full bg-[#F8F8F7] border border-[#E8E6E6] text-[#030712] text-[10px] md:text-[13px]"
                                        style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 400 }}
                                    >
                                        {topic}
                                    </span>
                                ))}
                            </div>

                            {/* Cover Image */}
                            <div className="relative w-full aspect-[16/9] rounded-[32px] overflow-hidden border border-[#E8E6E6]">
                                <Image
                                    src={post.cover_image}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            {/* Author & Read Time */}
                            <div className="flex items-center justify-between">
                                {/* Author */}
                                <div className="flex items-center gap-2 md:gap-4">
                                    <div className="relative w-8 h-8 md:w-12 md:h-12 rounded-full overflow-hidden">
                                        <Image
                                            src={post.author.avatar}
                                            alt={post.author.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <span
                                        className="text-[#030712] text-sm md:text-base"
                                        style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 500 }}
                                    >
                                        {post.author.name}
                                    </span>
                                </div>

                                {/* Read Time */}
                                <div className="flex items-center gap-2 md:gap-3">
                                    <img src="/assets/icons/clock_icon.svg" alt="clock" className='h-4' />
                                    <span
                                        className="text-[#030712] text-sm md:text-base"
                                        style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 400 }}
                                    >
                                        {post.read_time}
                                    </span>
                                </div>
                            </div>

                            {/* Content Sections */}
                            {post.content.sections.map((section, index) => {
                                // Render based on section type
                                switch (section.type) {
                                    case 'heading':
                                        return section.value ? (
                                            <h2
                                                key={index}
                                                className="text-2xl md:text-[30px] md:leading-[38px] text-[#030712]"
                                                style={{ fontFamily: 'Nohemi, sans-serif', fontWeight: 400 }}
                                            >
                                                {section.value}
                                            </h2>
                                        ) : null;
                                    
                                    case 'subheading':
                                        return section.value ? (
                                            <h3
                                                key={index}
                                                className="text-base font-semibold md:text-[20px] md:leading-[28px] text-[#030712]"
                                                style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 400 }}
                                            >
                                                — {section.value}
                                            </h3>
                                        ) : null;
                                    
                                    case 'paragraph':
                                        return section.value ? (
                                            <p
                                                key={index}
                                                className="text-base md:text-[18px] md:leading-[28px] text-[#030712]"
                                                style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 400 }}
                                            >
                                                {section.value}
                                            </p>
                                        ) : null;
                                    
                                    case 'list':
                                        return 'items' in section && section.items && Array.isArray(section.items) ? (
                                            <ul key={index} className="flex flex-col gap-3 pl-6">
                                                {(section.items as string[]).map((item: string, itemIndex: number) => (
                                                    <li
                                                        key={itemIndex}
                                                        className="text-base md:text-[18px] md:leading-[28px] text-[#030712] list-disc"
                                                        style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 400 }}
                                                    >
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : null;
                                    
                                    case 'image':
                                        return section.src ? (
                                            <div key={index} className="relative w-full aspect-[16/9] rounded-[24px] overflow-hidden">
                                                <Image
                                                    src={section.src}
                                                    alt={section.alt || 'Blog image'}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        ) : null;
                                    
                                    case 'quote':
                                        return section.value ? (
                                            <blockquote key={index} className="relative p-4 md:p-8 bg-[#F9FAFB] rounded-[24px] border-l-4 border-[#EA7B69]">
                                                <p
                                                    className="text-base md:text-[20px] md:leading-[32px] text-[#030712] italic"
                                                    style={{ fontFamily: 'Instrument Serif, serif', fontWeight: 400 }}
                                                >
                                                    "{section.value}"
                                                </p>
                                            </blockquote>
                                        ) : null;
                                    
                                    default:
                                        return null;
                                }
                            })}

                            {/* Author & Share Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-5 items-stretch gap-5 md:gap-8 mt-5 md:mt-10">
                                {/* Author Card - 60% (3 columns) */}
                                <div className="h-full md:col-span-3">
                                    <AuthorCard
                                        name={post.author.name}
                                        role={post.author.role}
                                        avatar={post.author.avatar}
                                        bio={post.author.bio}
                                    />
                                </div>

                                {/* Share Card - 40% (2 columns) */}
                                <div className="h-full md:col-span-2">
                                    <ShareCard blogUrl={blogUrl} title={post.title} />
                                </div>
                            </div>
                        </article>
                    </div>
                </div>

                {/* Blog Section */}
                <div>
                    <BlogSection />
                </div>
            </main>

            {/* CTA Section */}
            <CTASection />
            <Footer />
        </>
    );
}
