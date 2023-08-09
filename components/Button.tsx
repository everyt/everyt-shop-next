import React from 'react';
import Link from 'next/link';

type Props = {
  children: React.ReactNode;
  className: string;
  link?: string;
};

export default function Button({ children, link, className }: Props) {
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
