'use client';
import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MobileNav } from './MobileNav';
import { ModeToggle } from './ModeToggle';
import { NavItem } from '@/types';

interface MainNavProps {
  items?: NavItem[];
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="md:px-[0.7%] w-full px-1 flex h-14 dark:border-neutral-300/65 border-b-2 border-gray-400/65 pt-1 items-center justify-between ">
      <div className="flex gap-0 md:gap-10">
        <Link href="/" className="flex items-center space-x-2 md:flex ml-1.5 md:ml-0">
          <Image
            src={'/logo.png'}
            alt="nothing to say"
            width={35}
            height={35}
            priority
            className="rounded-full lg:h-11 lg:w-11 w-auto"
          />
          <span className="hidden font-bold sm:inline-block font-poppins">Portfolio</span>
        </Link>
      </div>
      <nav className="flex gap-1 ">
        <div className="flex lg:hidden">
          <MobileNav items={items} />
        </div>
        <ModeToggle />
      </nav>
    </div>
  );
}
