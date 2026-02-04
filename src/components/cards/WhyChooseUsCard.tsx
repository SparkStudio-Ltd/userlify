import Image from 'next/image';

interface WhyChooseUsCardProps {
    title: string;
    description: string;
    icon: string;
    variant?: 'default' | 'highlight';
}

export default function WhyChooseUsCard({
    title,
    description,
    icon,
    variant = 'default',
}: WhyChooseUsCardProps) {
    return (
        <div
            className={`group flex flex-col rounded-[32px] border p-6 relative overflow-hidden transition-all duration-300 h-full ${
                variant === 'highlight'
                    ? 'bg-[#EA7B69] border-[#EA7B69] text-white hover:bg-[#EA7B69]'
                    : 'bg-white border-[#E2D7F9] hover:border-[#EA7B69]'
            }`}
        >
            {/* Hover Background Image */}
            <div
                className="absolute inset-0 bg-[#EA7B69] bg-no-repeat bg-right opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                style={{
                    backgroundImage: 'url(/assets/images/EllipseSvg.svg)',
                    backgroundSize: 'contain',
                }}
            />

            {/* Content Wrapper */}
            <div className="relative z-10 flex flex-col gap-6">
                {/* Icon */}
                <div
                    className={`w-20 h-20 rounded-full flex justify-center items-center transition-all duration-300 ${
                        variant === 'highlight'
                            ? 'border border-white/30 group-hover:bg-white/20 group-hover:border-0'
                            : 'border border-[#E86A54] group-hover:bg-[#ee9587] group-hover:border-[#ee9587]'
                    }`}
                >
                    <div className="w-10 h-10 relative flex-shrink-0">
                        <Image
                            src={icon}
                            alt={title}
                            fill
                            className="object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                        />
                    </div>
                </div>

                {/* Title */}
                <h3
                    className={`text-2xl leading-7 font-medium transition-colors duration-300 ${
                        variant === 'highlight' ? 'text-white' : 'text-[#030712] group-hover:text-white'
                    }`}
                    style={{ fontFamily: 'Nohemi, sans-serif', fontWeight: 500 }}
                >
                    {title}
                </h3>

                {/* Description */}
                <p
                    className={`text-lg leading-7 tracking-[-0.4px] transition-colors duration-300 ${
                        variant === 'highlight' ? 'text-white' : 'text-[#030712] group-hover:text-white'
                    }`}
                    style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 400 }}
                >
                    {description}
                </p>
            </div>
        </div>
    );
}
