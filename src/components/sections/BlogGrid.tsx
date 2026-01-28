'use client';

import { BlogCard } from '@/components/cards';
import FeaturedBlogCard from '@/components/cards/FeaturedBlogCard';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    read_time: string;
    cover_image: string;
    published_at: string;
}

interface BlogGridProps {
    posts: BlogPost[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
    const sectionRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const cards = gsap.utils.toArray('.blog-card-item');

            cards.forEach((card) => {
                gsap.fromTo(
                    card as Element,
                    {
                        filter: 'blur(20px)',
                        opacity: 0,
                        y: 100,
                    },
                    {
                        filter: 'blur(0px)',
                        opacity: 1,
                        y: 0,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: card as Element,
                            start: 'top 85%',
                            end: 'top 55%',
                            scrub: 1,
                            toggleActions: 'play reverse play reverse',
                        },
                    }
                );
            });
        },
        { scope: sectionRef, dependencies: [posts] }
    );

    if (posts.length === 0) {
        return <div>No posts found.</div>;
    }

    // First post is featured, rest are in 2-column grid
    const [featuredPost, ...remainingPosts] = posts;

    return (
        <div ref={sectionRef} className="flex flex-col gap-10">
            {/* Featured Post - Full Width */}
            <div className="blog-card-item">
                <FeaturedBlogCard
                    title={featuredPost.title}
                    slug={featuredPost.slug}
                    coverImage={featuredPost.cover_image}
                    readTime={featuredPost.read_time}
                    excerpt={featuredPost.excerpt}
                />
            </div>

            {/* Remaining Posts - 2 Column Grid */}
            {remainingPosts.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-10">
                    {remainingPosts.map((post) => (
                        <div key={post.id} className="blog-card-item">
                            <BlogCard
                                title={post.title}
                                slug={post.slug}
                                coverImage={post.cover_image}
                                readTime={post.read_time}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
