import blogPosts from '@/../public/data/blog_posts.json';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { CTASection } from '@/components/sections';
import BlogContentWrapper from '@/components/sections/BlogContentWrapper';
import BlogGrid from '@/components/sections/BlogGrid';
import Pagination from '@/components/ui/Pagination';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Explore our comprehensive blog including App Design, Web Design, Development, and more. See how we can help transform your startup ideas.',
};

const POSTS_PER_PAGE = 7;

export default async function Blog({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);

  // Get posts for current page
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const paginatedPosts = blogPosts.slice(startIndex, endIndex);

  return (
    <>
      <Header />
      <main className="w-full bg-white">
        <div className="px-4 md:px-12 pt-24 md:pt-[150px] 2xl:pt-[216px] pb-16 md:pb-[120px]">
          <div className="max-w-[1472px] mx-auto">
            <BlogContentWrapper
              heading={
                <div className="flex flex-col items-center pb-10">
                  {/* Title - Part 1 */}
                  <h1
                    className="text-[36px] md:text-[72px] leading-[40px] md:leading-[80px] tracking-[-2px] md:tracking-[-4.5px] text-[#2A0E63] italic text-center"
                    style={{ fontFamily: 'Instrument Serif, serif', fontWeight: 400}}
                  >
                    Grow Your Product
                  </h1>

                  {/* Title - Part 2 */}
                  <h2
                    className="text-[30px] md:text-[60px] leading-[34px] md:leading-[68px] text-[#2A0E63] text-center"
                    style={{ fontFamily: 'Nohemi, sans-serif', fontWeight: 500 }}
                  >
                    Articles to Help You
                  </h2>
                </div>
              }
              content={
                <>
                  {/* Blog Grid */}
                  <BlogGrid posts={paginatedPosts} />

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="mt-16">
                      <Pagination currentPage={currentPage} totalPages={totalPages} />
                    </div>
                  )}
                </>
              }
            />
          </div>
        </div>
      </main>

      {/* CTA Section - Full Width */}
      <CTASection />
      <Footer />
    </>
  );
}
