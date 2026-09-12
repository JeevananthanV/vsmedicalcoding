import React from 'react';
import { Crown } from 'lucide-react';
import { cn } from '@/lib/utils';

export const SectionHeading = ({
  badge,
  title,
  highlight,
  subtitle,
  align = 'center', // 'center' | 'left'
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={cn('mb-12 md:mb-16', isCenter && 'text-center mx-auto max-w-3xl', className)}>
      {badge && (
        <div className={cn('inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs font-bold tracking-widest uppercase mb-4 shadow-sm shadow-gold-500/10', isCenter && 'justify-center')}>
          <Crown className="w-3.5 h-3.5 text-gold-400" />
          <span>{badge}</span>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-display leading-[1.2]">
        {title}{' '}
        {highlight && (
          <span className="text-gold-gradient block sm:inline font-black">
            {highlight}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className={cn('mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed', isCenter && 'max-w-2xl mx-auto')}>
          {subtitle}
        </p>
      )}

      <div className={cn('mt-5 flex items-center gap-2', isCenter && 'justify-center')}>
        <div className="h-[2px] w-8 bg-gradient-to-r from-transparent to-gold-500" />
        <div className="w-2 h-2 rotate-45 bg-gold-400" />
        <div className="h-[2px] w-8 bg-gradient-to-l from-transparent to-gold-500" />
      </div>
    </div>
  );
};
