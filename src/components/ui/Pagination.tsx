'use client';

import Link from 'next/link';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
}

export default function Pagination({ currentPage, totalPages }: PaginationProps) {
    const getPageNumbers = () => {
        const pages: (number | string)[] = [];

        if (totalPages <= 7) {
            // Show all pages if 7 or fewer
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            // Always show first page
            pages.push(1);

            if (currentPage <= 3) {
                // Near the start
                pages.push(2, 3, 4, '...', totalPages);
            } else if (currentPage >= totalPages - 2) {
                // Near the end
                pages.push('...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            } else {
                // In the middle
                pages.push('...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
            }
        }

        return pages;
    };

    const pages = getPageNumbers();

    return (
        <div className="flex items-center justify-center gap-3">
            {/* Previous Button */}
            <Link
                href={currentPage > 1 ? `/blog?page=${currentPage - 1}` : '#'}
                className={`flex items-center gap-2 px-4 py-2 text-sm leading-5 tracking-[-0.25px] transition-colors ${
                    currentPage === 1
                        ? 'text-[#9CA3AF] cursor-not-allowed pointer-events-none'
                        : 'text-[#030712] hover:text-[#EA7B69]'
                }`}
                style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 400 }}
                aria-disabled={currentPage === 1}
            >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Prev
            </Link>

            {/* Page Numbers */}
            <div className="flex items-center gap-2">
                {pages.map((page, index) => {
                    if (page === '...') {
                        return (
                            <span
                                key={`ellipsis-${index}`}
                                className="px-3 py-2 text-sm leading-5 text-[#9CA3AF]"
                                style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 400 }}
                            >
                                ...
                            </span>
                        );
                    }

                    const pageNumber = page as number;
                    const isActive = pageNumber === currentPage;

                    return (
                        <Link
                            key={pageNumber}
                            href={`/blog?page=${pageNumber}`}
                            className={`min-w-[40px] h-[40px] flex items-center justify-center rounded-full text-sm leading-5 transition-all ${
                                isActive
                                    ? 'bg-[#EA7B69] text-white'
                                    : 'bg-transparent text-[#030712] hover:bg-[#F3F4F6]'
                            }`}
                            style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: isActive ? 600 : 400 }}
                        >
                            {pageNumber}
                        </Link>
                    );
                })}
            </div>

            {/* Next Button */}
            <Link
                href={currentPage < totalPages ? `/blog?page=${currentPage + 1}` : '#'}
                className={`flex items-center gap-2 px-4 py-2 text-sm leading-5 tracking-[-0.25px] transition-colors ${
                    currentPage === totalPages
                        ? 'text-[#9CA3AF] cursor-not-allowed pointer-events-none'
                        : 'text-[#030712] hover:text-[#EA7B69]'
                }`}
                style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 400 }}
                aria-disabled={currentPage === totalPages}
            >
                Next
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </Link>
        </div>
    );
}
