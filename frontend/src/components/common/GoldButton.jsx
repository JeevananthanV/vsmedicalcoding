import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const GoldButton = ({
  children,
  onClick,
  href,
  target,
  rel,
  className = '',
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'ghost'
  size = 'md', // 'sm' | 'md' | 'lg'
  icon: Icon,
  iconPosition = 'right',
  fullWidth = false,
  ...props
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs font-semibold tracking-wider',
    md: 'px-6 py-3 text-sm font-semibold tracking-wide',
    lg: 'px-8 py-4 text-base font-bold tracking-wide',
  };

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-[#D4AF37] via-[#F5D77F] to-[#AA771C] text-obsidian-950 font-bold shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 border border-gold-300/50',
    secondary:
      'bg-obsidian-800 text-gold-200 border border-gold-500/40 hover:bg-obsidian-750 hover:border-gold-400 hover:text-white shadow-md',
    outline:
      'bg-transparent text-gold-300 border border-gold-500/50 hover:bg-gold-500/10 hover:border-gold-300 hover:text-white',
    ghost:
      'bg-transparent text-slate-300 hover:text-gold-300 hover:bg-white/5',
  };

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 mr-2 inline-block transition-transform group-hover:scale-110" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 ml-2 inline-block transition-transform group-hover:translate-x-1" />}
    </>
  );

  const baseStyles = cn(
    'group relative inline-flex items-center justify-center rounded-xl transition-all duration-300 overflow-hidden cursor-pointer select-none active:scale-[0.98]',
    sizeClasses[size],
    variantClasses[variant],
    fullWidth && 'w-full',
    className
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={baseStyles}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {variant === 'primary' && (
          <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
        )}
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={baseStyles}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {variant === 'primary' && (
        <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
      )}
      {content}
    </motion.button>
  );
};
