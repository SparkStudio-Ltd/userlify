import { cn } from '@/lib/utils';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'cta';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

// border border-gray-950/20

const variants = {
  primary:
    'bg-primary text-white hover:bg-primary-600 hover:shadow-lg active:scale-95',
  secondary: 'bg-white text-[#493936] shadow-[0px_0px_0px_1px_#14141F1F,0px_1px_3px_0px_#14141F1F] hover:bg-white hover:shadow-[0px_0px_0px_1px_#E86A54,0px_1px_3px_0px_#14141F1F]',
  ghost: 'text-gray-950 hover:bg-gray-50',
  cta: 'text-[#493936] bg-[white] hover:border-primary'

};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-8 py-3.5 text-base',
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className,
  onClick,
  disabled = false,
  type = 'button',
}: ButtonProps) {
  const classes = cn(
    'font-nav inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300',
    variants[variant],
    sizes[size],
    disabled && 'cursor-not-allowed opacity-50',
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
