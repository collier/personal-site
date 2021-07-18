import type { PropsWithChildren } from 'react';
import classNames from 'classnames';

type Props = PropsWithChildren<{
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'li';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  style?: 'normal' | 'muted';
  font?: 'sans' | 'serif';
  lineHeight?: 'tight' | 'snug' | 'normal' | 'relaxed'; // https://tailwindcss.com/docs/line-height
}>;

export function Text({
  children,
  tag = 'p',
  size = 'lg',
  weight = 'normal',
  style = 'normal',
  font = 'serif',
  lineHeight = 'normal',
}: Props) {
  const TextTag = tag;

  // List instead of dynamic classname so PurgeCSS works currectly.
  const className = classNames({
    'text-xs': size === 'xs',
    'text-sm': size === 'sm',
    'text-base': size === 'base',
    'text-lg': size === 'lg',
    'text-xl': size === 'xl',
    'text-2xl': size === '2xl',
    'text-3xl': size === '3xl',
    'text-4xl': size === '4xl',
    'text-5xl': size === '5xl',
    'font-normal': weight === 'normal',
    'font-medium': weight === 'medium',
    'font-semibold': weight === 'semibold',
    'font-bold': weight === 'bold',
    'font-sans': font === 'sans',
    'font-serif': font === 'serif',
    'text-gray-400': style === 'muted',
    'leading-tight': lineHeight === 'tight',
    'leading-snug': lineHeight === 'snug',
    'leading-relaxed': lineHeight === 'relaxed',
  });

  return <TextTag className={className}>{children}</TextTag>;
}
