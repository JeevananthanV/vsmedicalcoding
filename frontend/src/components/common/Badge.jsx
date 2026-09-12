import React from 'react';
import { cn } from '@/lib/utils';

export const Badge = ({
  children,
  variant = 'gold', // 'gold' | 'teal' | 'emerald' | 'dark'
  className = '',
  dot = false,
  icon: Icon,
}) => {
  const variantStyles = {
    gold: 'bg-gold-500/10 text-gold-300 border-gold-500/30 shadow-sm shadow-gold-500/5',
    teal: 'bg-medical-teal/10 text-teal-300 border-medical-teal/30',
    emerald: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
    dark: 'bg-obsidian-800 text-slate-300 border-obsidian-700',
  };

  const dotColors = {
    gold: 'bg-gold-400',
    teal: 'bg-teal-400',
    emerald: 'bg-emerald-400',
    dark: 'bg-slate-400',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border',
        variantStyles[variant],
        className
      )}
    >
      {dot && (
        <span className={cn('w-1.5 h-1.5 rounded-full animate-pulse', dotColors[variant])} />
      )}
      {Icon && <Icon className="w-3.5 h-3.5" />}
      <span>{children}</span>
    </span>
  );
};
