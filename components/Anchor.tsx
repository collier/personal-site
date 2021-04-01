import type { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  href?: string;
}>;

export function Anchor({ children, href }: Props) {
  return (
    <a
      href={href}
      className="text-indigo-900 hover:text-indigo-700 hover:underline"
    >
      {children}
    </a>
  );
}
