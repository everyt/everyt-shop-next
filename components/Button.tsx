import React from 'react';
import Link from 'next/link';

type Props = {
  children: React.ReactNode;
  className: string;
  link?: string;
  onClick?: () => void;
};

export default function Button({ children, link, className, onClick }: Props) {
  return (
    <div>
      {link ? (
        <Link href={link}>
          <div className={className}>{children}</div>
        </Link>
      ) : (
        <div
          className={className}
          onClick={onClick}
        >
          {children}
        </div>
      )}
    </div>
  );
}
