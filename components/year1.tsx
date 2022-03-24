import React from 'react';

interface Props {
  children: React.ReactNode;
}

export default function Year({ children }: Props) {
  return <h3 className="mb-4 text-lg font-bold tracking-tight md:text-xl">{children}</h3>;
}
