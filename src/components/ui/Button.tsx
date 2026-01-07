import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold transition-all duration-200 focus-visible:outline-none disabled:opacity-50 disabled:cursor-not-allowed rounded-[12px]';

  const variants = {
    primary:
      'bg-primary text-white shadow-sm hover:bg-primary-dark hover:shadow-md focus-visible:shadow-[0_0_0_4px_rgba(31,41,51,0.22)]',
    secondary:
      'bg-secondary text-white shadow-sm hover:bg-secondary-dark hover:shadow-md focus-visible:shadow-[0_0_0_4px_rgba(139,30,30,0.22)]',
    outline:
      'bg-transparent border border-border text-primary hover:bg-surface-muted focus-visible:shadow-[0_0_0_4px_rgba(31,41,51,0.14)]',
    ghost: 'bg-transparent text-primary hover:bg-surface-muted',
  };

  const sizes = {
    sm: 'px-4 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-base',
    lg: 'px-7 py-3.5 text-lg',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
