interface ReviewCardProps {
    title: string;
    description: string;
    reviewerName: string;
    designation: string;
}

export default function ReviewCardPortfolio({
    title,
    description,
    reviewerName,
    designation,
}: ReviewCardProps) {
    // Generate avatar from first letters of first and last name
    const getInitials = (name: string) => {
        const names = name.split(' ');
        if (names.length >= 2) {
            return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
        }
        return name[0]?.toUpperCase() || '';
    };

    return (
        <div className="bg-white rounded-[24px] p-6 md:px-6 md:py-8 flex flex-col justify-between min-w-[977px] h-full relative gap-6">
            {/* Review Icon */}
            <div className="absolute bottom-0 right-[30px]">
                <img src='/assets/icons/ReviewIcon.svg'></img>
            </div>
            <div className="flex flex-col gap-4">
                {/* Title */}
                <h3
                    className="text-2xl leading-7 text-[#030712] relative z-10"
                    style={{ fontFamily: 'Nohemi, sans-serif', fontWeight: 500 }}
                >
                    {title}
                </h3>

                {/* Description */}
                <p
                    className="text-lg leading-7 text-[#030712] relative z-10"
                    style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 400 }}
                >
                    {description}
                </p>
            </div>

            {/* Reviewer Info */}
            <div className="flex items-center gap-3 relative z-10">
                {/* Avatar */}
                <div className="w-10 h-10 bg-[#E8E6E6] rounded-full flex items-center justify-center flex-shrink-0">
                    <span
                        className="text-[#030712] text-sm font-medium"
                        style={{ fontFamily: 'Public Sans, sans-serif' }}
                    >
                        {getInitials(reviewerName)}
                    </span>
                </div>

                {/* Name and Designation */}
                <div className="flex flex-col gap-1">
                    <p
                        className="text-base leading-tight text-[#030712] tracking-[-0.25px]"
                        style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 500 }}
                    >
                        {reviewerName}
                    </p>
                    <p
                        className="text-[13px] leading-tight text-[#766A68]"
                        style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 400 }}
                    >
                        {designation}
                    </p>
                </div>
            </div>
        </div>
    );
}
