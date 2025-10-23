'use client';
import React from 'react';
import { Tabs, TabsContent, TabsList } from '@/components/ui/tabs';
import AboutTab from './tabs/AboutTab';
import ProjectTab from './tabs/ProjectTab';
import { TabsTrigger } from '@radix-ui/react-tabs';
import { cn } from '@/lib/utils';
import ResumeTabs from './tabs/ResumeTabs';
import { useGlobalState } from '@/hooks/global-tabs';

const MainTabs = () => {
  const { tab, setTab } = useGlobalState();

  return (
    <Tabs
      value={tab}
      onValueChange={setTab}
      defaultValue="about"
      className="w-full bg-neutral-200 dark:bg-zinc-800 dark:border-neutral-300/65"
    >
      <div className="absolute w-full flex justify-end">
        <TabsList className="hidden lg:flex w-5/8 py-5 justify-evenly text-xl border border-transparent rounded-bl-2xl shadow-md drop-shadow-xl bg-neutral-200 brightness-[101%] dark:bg-zinc-800 dark:brightness-120 rounded-tl-none rounded-br-none">
          <TabsTrigger
            value="about"
            className={cn(
              'border-transparent cursor-pointer font-medium data-[state=active]:font-semibold',
              'data-[state=active]:border-b-2 data-[state=active]:border-yellow-500 data-[state=active]:text-black',
              'dark:data-[state=active]:border-yellow-500 dark:data-[state=active]:text-white'
            )}
          >
            About
          </TabsTrigger>
          <TabsTrigger
            value="project"
            className={cn(
              'border-transparent cursor-pointer font-medium data-[state=active]:font-semibold',
              'data-[state=active]:border-b-2 data-[state=active]:border-yellow-500 data-[state=active]:text-black',
              'dark:data-[state=active]:border-yellow-500 dark:data-[state=active]:text-white dark:'
            )}
          >
            Projects
          </TabsTrigger>
          <TabsTrigger
            value="resume"
            className={cn(
              'border-transparent cursor-pointer font-medium data-[state=active]:font-semibold',
              'data-[state=active]:border-b-2 data-[state=active]:border-yellow-500 data-[state=active]:text-black',
              'dark:data-[state=active]:border-yellow-500 dark:data-[state=active]:text-white'
            )}
          >
            Resume
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="about">
        <AboutTab />
      </TabsContent>
      <TabsContent value="project">
        <ProjectTab />
      </TabsContent>
      <TabsContent value="resume">
        <ResumeTabs />
      </TabsContent>
    </Tabs>
  );
};

export default MainTabs;
