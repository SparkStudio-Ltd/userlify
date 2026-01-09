import Image from 'next/image';

interface ServiceCardProps {
    title: string;
    icon: string;
    description: string;
    tags: string[];
}

export default function ServiceCard({
    title,
    icon,
    description,
    tags,
}: ServiceCardProps) {
    return (
        <div
            className="w-full bg-[#0E0F1E] border-2 border-[#1f2023] rounded-[24px] p-10"
            style={{
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)',
            }}
        >
            {/* Icon */}
            <div className="w-16 h-16 mb-6 relative">
                <Image
                    src={icon}
                    alt={title}
                    fill
                    className="object-contain"
                    sizes="64px"
                />
            </div>

            {/* Title */}
            <h3 className="text-white text-[30px] font-semibold mb-4">{title}</h3>

            {/* Description */}
            <p
                className="text-gray-300 text-[16px] leading-[24px] mb-6"
                style={{ fontFamily: 'Public Sans, sans-serif' }}
            >
                {description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="bg-[#3C3E44] text-white text-[13px] font-medium rounded-[50px] py-1 px-4 whitespace-nowrap"
                        style={{
                            fontFamily: 'Public Sans, sans-serif',
                            fontWeight: 500,
                            boxShadow:
                                '0px 0px 0px 1px rgba(20, 20, 31, 0.12), 0px 1px 3px 0px rgba(20, 20, 31, 0.12)',
                        }}
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}
