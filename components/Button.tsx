import React from 'react';
import Link from 'next/link';

type ButtonProps = {
  children: React.ReactNode;
  className: string;
  icon?: string;
  link?: string;
};

export default function Button({ children, link, className }: ButtonProps) {
  return (
    <div>
      {link ? (
        <Link href={link}>
          <div className={className}>{children}</div>
        </Link>
      ) : (
        <div className={className}>{children}</div>
      )}
    </div>
  );
}
