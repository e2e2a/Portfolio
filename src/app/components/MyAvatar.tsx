'use client';
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import AvatarFooter from './AvatarFooter';
import { contactConfig } from '@/constant';

const MyAvatar = () => {
  return (
    <div className="z-2 border-2 dark:border-neutral-300/65 bg-neutral-100 border-gray-400/65 dark:bg-zinc-800 rounded-lg flex items-center flex-col sm:flex-row lg:flex-col justify-evenly lg:justify-start shadow-xl drop-shadow-4xl w-full lg:w-[20rem] h-auto">
      <div
        onDragStart={e => e.preventDefault()}
        onCopy={e => e.preventDefault()}
        className="flex flex-col items-center justify-center my-5"
      >
        <div className="group" style={{ clipPath: 'circle(50% at 50% 50%)' }}>
          <Avatar className="cursor-not-allowed rounded-full group-hover:shadow-2xl hover:drop-shadow-2xl bg-neutral-300 border-2 border-gray-400/65 dark:border-neutral-300/65 shadow-sm drop-shadow-xl dark:bg-gradient-to-br dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-800 h-64 w-64">
            <AvatarImage
              className="ml-1 mt-3 scale-110 group-hover:brightness-110 transform transition-all ease-in-out "
              src="/mypicture-nobg.png"
              alt="mypicture"
            />
            <AvatarFallback>Profile Picture</AvatarFallback>
          </Avatar>
        </div>
        <h1 className="z-1 font-bold text-[28px] mt-1 cursor-point">Reymond R. Godoy</h1>
        <Badge>Web Developer</Badge>
      </div>
      <div className="lg:hidden sm:flex hidden h-[20rem] justify-center">
        <Separator orientation="vertical" className="h-24 w-px bg-gray-300" />
      </div>
      <div className="w-full px-3 my-3 flex lg:flex sm:hidden justify-center">
        <Separator orientation="horizontal" className="h-24 w-px bg-gray-300" />
      </div>
      <div className="flex flex-col justify-start  pl-5 gap-y-5">
        {contactConfig &&
          contactConfig.length > 0 &&
          contactConfig.map((contact, index) => (
            <div key={index} className="flex justify-between gap-2">
              <div className="drop-shadow-2xl dark:bg-zinc-800 bg-neutral-200 brightness-105 rounded-xl px-2.5 pt-[9px] pb-3 shadow-md">
                <contact.Icon className="h-6 w-6 stroke-[2px] stroke-yellow-500" />
              </div>
              <div className="flex flex-col w-full">
                <span className="uppercase font-semibold text-[14px] text-muted-foreground">
                  {contact.title}
                </span>
                <span className="font-bold text-[13px]">{contact.value}</span>
              </div>
            </div>
          ))}
        <AvatarFooter />
      </div>
    </div>
  );
};

export default MyAvatar;
