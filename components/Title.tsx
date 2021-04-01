import type { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{}>;

export function Title({ children }: Props) {
  return <h1 className="text-4xl pb-8 font-bold">{children}</h1>;
}
