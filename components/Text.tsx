import React from 'react';

type Props = {
  children: string;
  className?: string;
  draggable?: boolean;
};

export default function Text({
  children,
  className,
  draggable = false,
}: Props) {
  return (
    <span className={className} draggable={draggable}>
      {children}
    </span>
  );
}
