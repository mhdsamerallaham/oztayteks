import React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bg?: 'default' | 'muted' | 'primary' | 'secondary';
  noPadding?: boolean;
  noContainer?: boolean;
}

export default function Section({
  children,
  className = '',
  id,
  bg = 'default',
  noPadding = false,
  noContainer = false,
  ...props
}: SectionProps) {
  const backgrounds = {
    default: 'bg-background',
    muted: 'bg-surface-muted',
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary/10',
  };

  const padding = noPadding ? '' : 'py-20 md:py-32';

  return (
    <section
      id={id}
      className={`relative w-full overflow-hidden ${backgrounds[bg]} ${padding} ${className}`}
      {...props}
    >
      {noContainer ? children : <div className="container-custom">{children}</div>}
    </section>
  );
}
