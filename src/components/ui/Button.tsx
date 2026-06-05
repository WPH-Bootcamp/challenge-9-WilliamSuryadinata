import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}) => {
  const baseStyle =
    'flex items-center justify-center font-bold rounded-full transition-all active:scale-95';
  const variants = {
    primary: 'bg-[#a10000] text-white hover:bg-red-700 shadow-lg',
    outline: 'bg-transparent border border-white/30 hover:bg-white/10 text-white',
    ghost: 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/30',
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
