import React from 'react';

export const Badge: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <span className={`px-2 py-1 bg-white/20 backdrop-blur-md rounded text-xs font-bold ${className}`}>
    {children}
  </span>
);
