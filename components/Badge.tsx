import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{}>;

export function Badge({ children }: Props) {
  return (
    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
      {children}
    </span>
  );
}
