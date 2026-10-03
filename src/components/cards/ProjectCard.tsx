import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  isLarge?: boolean;
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
}: ProjectCardProps) {
  return (
    <Link href="/portfolio" className="card-item group relative flex h-full flex-col overflow-hidden border border-[#2D2F33] rounded-3xl bg-[#0e0f10] transition-all duration-500 hover:scale-[1.02] cursor-pointer">
      {/* Image Container */}
      <div className="relative h-[488px] w-full flex-shrink-0 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="rounded-3xl object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="rounded-full bg-[#3C3E44] px-3 py-1.5 font-nav text-[13px] font-medium text-white"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="font-nohemi mb-2 text-2xl font-medium text-white">{title}</h3>

        {/* Description */}
        <p className="font-nav text-base leading-relaxed" style={{ color: '#D8D5D4' }}>
          {description}
        </p>
      </div>
    </Link>
  );
}
