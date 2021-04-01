import { PropsWithChildren } from 'react';
import { Navbar } from '../components';

type Props = PropsWithChildren<{}>;

export function Layout({ children }: Props) {
  return (
    <div className="flex justify-center px-4 md:px-0 pb-32">
      <div className="container">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
