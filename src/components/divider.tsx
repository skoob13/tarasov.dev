import React from 'react';

export default function Divider({ className = '' }: React.HTMLProps<HTMLDivElement>) {
  return <div className={`my-8 w-full border border-gray-200 dark:border-gray-600 ${className}`} />;
}
