import React from 'react';

export default function Divider({ className = '' }: React.HTMLProps<HTMLDivElement>) {
  return <div className={`border border-gray-200 dark:border-gray-600 w-full my-8 ${className}`} />;
}
