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
        <div className="px-4 md:px-12  pb-24 md:pb-30 py-28 md:pt-44">
          <div className="max-w-[1472px] mx-auto">
            <BlogContentWrapper
              heading={
                <div className="flex flex-col items-center pb-24">

                  <h1 className="font-heading text-[40px] md:text-[56px] lg:text-[72px] leading-[48px] md:leading-[64px] lg:leading-[80px] tracking-[0px] text-[#2A0E63] font-bold" style={{ fontFamily: 'Nohemi, sans-serif' }}>
                    <span className="block text-center font-serif font-normal italic  text-[#E86A54]">
                      Grow Your Product{' '}
                    </span>
                    Articles to Help You
                  </h1>


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
