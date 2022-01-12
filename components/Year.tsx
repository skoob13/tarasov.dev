import React from 'react';

interface Props {
  children: React.ReactNode;
}

export default function Year({ children }: Props) {
  return <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight">{children}</h3>;
}
