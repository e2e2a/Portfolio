'use client';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Image from 'next/image';
import { NavItem } from '@/types';
import { useGlobalState } from '@/hooks/global-tabs';
import { Menu } from 'lucide-react';
import { useState } from 'react';

interface MainNavProps {
  items?: NavItem[];
}

export function MobileNav({ items }: MainNavProps) {
  const { setTab } = useGlobalState();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Menu className="w-4 h-4" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription>
            Explore and discover my portfolio website. Browse through about me, my projects, and my
            resume. Feel free to reach out if you&apos;d like to collaborate or learn more.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-x-4 gap-y-2.5 py-4">
          <div className="">
            <Image
              src="/cat.gif"
              alt="background-logo"
              fill
              className="absolute mt-10 top-[0px] sm:top-[-20px] md:top-[-40px] opacity-30 object-contain pointer-events-none z-0"
            />
          </div>
          {items?.map((item, index) => (
            <div key={index}>
              <div className="">
                <Button
                  variant={'outline'}
                  type="button"
                  className="w-full text-center rounded-none"
                  onClick={() => {
                    setOpen(val => !val);
                    setTab(item.tab);
                  }}
                >
                  {item.title}
                </Button>
              </div>
            </div>
          ))}
        </div>
        <SheetFooter className="hidden">
          <SheetClose asChild>
            <Button type="submit"></Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
