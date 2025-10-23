import React from 'react';
import MainTabs from './components/MainTabs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Reymond Godoy's Portfolio",
  description: `I’m Reymond Godoy, a web developer passionate about building modern, responsive websites and apps that deliver great user experiences and clean design.`,
};

const page = () => {
  return (
    <div className="dark:border-neutral-300/65 bg-neutral-100 border-2 border-gray-400/65 lg:w-3/4 w-full dark:bg-zinc-800 rounded-lg flex items-center flex-col shadow-lg drop-shadow-lg min-h-auto">
      <MainTabs />
    </div>
  );
};

export default page;
