import React from 'react';

interface Props {
  title: React.ReactNode;
  children: React.ReactNode;
}

export default function TimelineRow({ title, children }: Props) {
  return (
    <li className="mb-4 ml-2">
      <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
        <p className="font-medium text-gray-900 dark:text-gray-100">✅ {title}</p>
      </div>
      <p className="text-gray-700 dark:text-gray-400 ml-6 prose">{children}</p>
    </li>
  );
}
