import Image from 'next/image';

interface ServiceCardProps {
    title: string;
    icon: string;
    description: string;
}

export default function ServiceCard({
    title,
    icon,
    description,
}: ServiceCardProps) {
    return (
        <div
            className="w-full h-full bg-white border border-[#E2D7F9] rounded-[32px] p-6"
        >
            {/* Icon */}
            <div className="w-20 h-20 mb-6 relative border border-[#E2D7F9] rounded-[99px] flex items-center justify-center">
                <Image
                    src={icon}
                    alt={title}
                    width={40}
                    height={40}
                    className="object-contain"
                />
            </div>
            <div className='gap-4'>
                {/* Title */}
                <h3 className="text-[#030712] text-2xl font-medium leading-7">{title}</h3>

                {/* Description */}
                <p
                    className="text-[#030712] text-[18px] font-normal leading-7 mb-6"
                    style={{ fontFamily: 'Public Sans, sans-serif' }}
                >
                    {description}
                </p>
            </div>
        </div>
    );
}
