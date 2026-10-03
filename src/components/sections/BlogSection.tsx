'use client';

import blogPosts from '@/../public/data/blog_posts.json';
import { BlogCard } from '@/components/cards';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BlogSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray('.card-item');

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
    { scope: sectionRef }
  );

  // Get the latest 2 blog posts
  const latestPosts = blogPosts.slice(0, 2);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#F8F8F7] px-4 py-24 md:px-12 md:py-30"
    >
      <div className="md:px-none mx-auto max-w-[1472px]">
        <div className="flex flex-col gap-10">
          {/* Top Section */}
          <div className="flex flex-col items-center gap-4">
            {/* Kicker */}
            <p
              className="text-sm font-bold uppercase leading-5 tracking-[0.75px] text-[#EA7B69]"
              style={{ fontFamily: 'Public Sans, sans-serif' }}
            >
              • BLOG
            </p>

            <h2
              className="text-center text-[48px] font-medium leading-tight text-[#030712] md:leading-[56px]"
              style={{ fontFamily: 'Nohemi, sans-serif' }}
            >
              Articles to Help You{' '}
              <span className="block font-serif italic tracking-tighter">
                Grow Your Product
              </span>
            </h2>

            {/* Description */}
            <p
              className="max-w-[492px] text-center text-base leading-6 text-[#030712]"
              style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 400 }}
            >
              Empowering you to take charge of your financial future with intuitive tools
              and personalized insights.
            </p>
          </div>

          {/* Bottom Section - Blog Cards */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {latestPosts.map((post) => (
              <div key={post.id} className="card-item">
                <BlogCard
                  title={post.title}
                  slug={post.slug}
                  coverImage={post.cover_image}
                  readTime={post.read_time}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
