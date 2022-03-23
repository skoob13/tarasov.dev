import React from 'react';

interface Props {
  title: React.ReactNode;
  children: React.ReactNode;
}

export default function TimelineRow({ title, children }: Props) {
  return (
    <li className="mb-4 ml-2">
      <p className="mb-2 font-medium text-green-700 dark:text-green-300">✅ {title}</p>
      <p className="prose ml-6 text-gray-700 dark:prose-dark dark:text-gray-400">{children}</p>
    </li>
  );
}
