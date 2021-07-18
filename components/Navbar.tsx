import { useState } from 'react';
import Link from 'next/link';
import { MenuIcon, ExitIcon } from './icons';

const links = [
  {
    href: '/about',
    text: 'About',
  },
  {
    href: '/projects',
    text: 'Projects',
  },
  {
    href: '/dj-collier-resume.pdf',
    text: 'Résumé',
  },
];

export function Navbar() {
  const [isMenuVisible, setMenuVisiblity] = useState(false);

  return (
    <nav className="pb-8">
      <div className="flex items-center pt-10 pb-2 sm:pb-10">
        <div className="flex-grow">
          <Link href="/">
            <a
              className="text-3xl font-bold tracking-tighter"
              onClick={() => setMenuVisiblity(false)}
            >
              D.J. Collier
            </a>
          </Link>
        </div>
        <ul className="hidden sm:flex flex-none space-x-12 text-lg">
          {links.map((link, i) => (
            <li key={i}>
              <Link href={link.href}>
                <a>{link.text}</a>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex sm:hidden">
          <button
            type="button"
            className="bg-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded="false"
            onClick={() => setMenuVisiblity(!isMenuVisible)}
          >
            {isMenuVisible ? <ExitIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      {isMenuVisible && (
        <ul className="sm:hidden pb-2 border-b border-t border-gray-200">
          {links.map((link, i) => (
            <li key={i}>
              <Link href={link.href}>
                <a
                  className="block px-4 py-3 font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                  onClick={() => setMenuVisiblity(false)}
                >
                  {link.text}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
