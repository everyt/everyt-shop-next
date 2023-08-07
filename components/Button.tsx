import React from 'react';
import Link from 'next/link';

type ButtonProps = {
  children: string;
  className: string;
  link?: string;
};

export default function Button({ children, link, className }: ButtonProps) {
  return (
    <>
      {link ? (
        <Link href={link}>
          <div className={className}>{children}</div>
        </Link>
      ) : (
        <div className={className}>{children}</div>
      )}
    </>
  );
}
