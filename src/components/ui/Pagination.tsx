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
        <div className="flex flex-wrap items-center justify-center gap-3">
            {/* Previous Button */}
            <Link
                href={currentPage > 1 ? `/blog?page=${currentPage - 1}` : '#'}
                className={`group flex h-11 items-center gap-2 rounded-full border px-5 text-sm leading-5 tracking-[-0.25px] transition-all ${
                    currentPage === 1
                        ? 'border-[#D1D5DB] text-[#9CA3AF] cursor-not-allowed pointer-events-none'
                        : 'border-[#D1D5DB] text-[#030712] hover:bg-[#EA7B69] hover:text-white hover:border-[#EA7B69]'
                }`}
                style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 400 }}
                aria-disabled={currentPage === 1}
            >
                <span
                    className="h-3 w-[18px] shrink-0 rotate-180 bg-current [-webkit-mask:url('/assets/icons/blogArrowVector.svg')_center/contain_no-repeat] [mask:url('/assets/icons/blogArrowVector.svg')_center/contain_no-repeat]"
                    aria-hidden="true"
                />
                Prev
            </Link>

            {/* Page Numbers */}
            <div className="flex items-center gap-2">
                {pages.map((page, index) => {
                    if (page === '...') {
                        return (
                            <div
                                key={`ellipsis-${index}`}
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D1D5DB] text-[#030712] text-sm leading-5"
                                style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 400 }}
                            >
                                ...
                            </div>
                        );
                    }

                    const pageNumber = page as number;
                    const isActive = pageNumber === currentPage;

                    return (
                        <Link
                            key={pageNumber}
                            href={`/blog?page=${pageNumber}`}
                            className={`flex h-11 w-11 items-center justify-center rounded-full border text-sm leading-5 transition-all ${
                                isActive
                                    ? 'border-[#EA7B69] bg-[#EA7B69] text-white'
                                    : 'border-[#D1D5DB] bg-transparent text-[#030712] hover:bg-[#EA7B69] hover:text-white hover:border-[#EA7B69]'
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
                className={`group flex h-11 items-center gap-2 rounded-full border px-5 text-sm leading-5 tracking-[-0.25px] transition-all ${
                    currentPage === totalPages
                        ? 'border-[#D1D5DB] text-[#9CA3AF] cursor-not-allowed pointer-events-none'
                        : 'border-[#D1D5DB] text-[#030712] hover:bg-[#EA7B69] hover:text-white hover:border-[#EA7B69]'
                }`}
                style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 400 }}
                aria-disabled={currentPage === totalPages}
            >
                Next
                <span
                    className="h-3 w-[18px] shrink-0 bg-current [-webkit-mask:url('/assets/icons/blogArrowVector.svg')_center/contain_no-repeat] [mask:url('/assets/icons/blogArrowVector.svg')_center/contain_no-repeat]"
                    aria-hidden="true"
                />
            </Link>
        </div>
    );
}
