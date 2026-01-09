import { cn } from '@/lib/utils';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const variants = {
  primary:
    'bg-primary text-white shadow-button hover:bg-primary-600 hover:shadow-lg active:scale-95',
  secondary:
    'border border-gray-950/20 bg-white/80 text-gray-950 backdrop-blur-sm hover:bg-white hover:border-gray-950/40',
  ghost: 'text-gray-950 hover:bg-gray-50',
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
