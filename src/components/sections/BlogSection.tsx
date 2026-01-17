import blogPosts from '@/../public/data/blog_posts.json';
import { BlogCard } from '@/components/cards';

export default function BlogSection() {
    // Get the latest 2 blog posts
    const latestPosts = blogPosts.slice(0, 2);

    return (
        <section className="w-full py-[120px] bg-white">
            <div className="max-w-[1472px] mx-auto">
                <div className="flex flex-col gap-10">
                    {/* Top Section */}
                    <div className="flex flex-col items-center gap-4">
                        {/* Kicker */}
                        <p
                            className="text-[#EA7B69] text-sm leading-5 tracking-[0.75px] uppercase font-bold"
                            style={{ fontFamily: 'Public Sans, sans-serif' }}
                        >
                            • BLOG
                        </p>

                        {/* Title */}
                        <h2
                            className="text-[48px] leading-[56px] font-medium text-center text-[#030712] max-w-[800px]"
                            style={{ fontFamily: 'Nohemi, sans-serif' }}
                        >
                            Articles to Help You{' '}
                            <span className="italic font-serif block">
                                Grow Your Product
                            </span>
                        </h2>

                        {/* Description */}
                        <p
                            className="text-center text-base leading-6 text-[#030712] max-w-[492px]"
                            style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 400 }}
                        >
                            Empowering you to take charge of your financial future with intuitive
                            tools and personalized insights.
                        </p>
                    </div>

                    {/* Bottom Section - Blog Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {latestPosts.map((post) => (
                            <BlogCard
                                key={post.id}
                                title={post.title}
                                slug={post.slug}
                                coverImage={post.cover_image}
                                readTime={post.read_time}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
