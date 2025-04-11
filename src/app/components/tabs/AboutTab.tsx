import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { whatImDoingConfig } from '@/constant';
import { Separator } from '@/components/ui/separator';

const AboutTab = () => {
  return (
    <div className="flex items-start flex-col w-full py-5 gap-y-10">
      <div className="flex flex-col gap-y-3 px-8 ">
        <h1 className="font-bold text-3xl flex flex-col tracking-wide">
          About Me
          <div className=" w-14">
            <Separator className="py-[2px] rounded-md bg-yellow-500" />
          </div>
        </h1>
        <span className="font-normal text-muted-foreground first-letter:ml-5 text-[15px]">
          I&apos;m a web developer from Estaka, Dipolog City, Zamboanga Del Norte, passionate about
          creating things that live on the internet. I enjoy the process of bringing ideas to life
          through design and code, and I&apos;m always curious about learning new ways to improve
          the digital experience.
        </span>
        <span className="text-muted-foreground first-letter:ml-5 text-[15px]">
          My job is to build websites that are not only functional, but also user-friendly and
          visually appealing. I focus on making sure every part of a site works smoothly, looks good
          across all devices, and delivers a great experience for your users.
        </span>
      </div>
      <div className="flex flex-col gap-y-3 px-8">
        <h1 className="font-semibold text-2xl tracking-normal">What I&apos;m Doing</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-3">
          {whatImDoingConfig &&
            whatImDoingConfig.length > 0 &&
            whatImDoingConfig.map((item, index) => (
              <Card
                key={index}
                className="border-none bg-neutral-200 dark:bg-zinc-800 brightness-105 drop-shadow-2xl shadow-sm"
              >
                <CardHeader className="hidden">
                  <CardTitle></CardTitle>
                  <CardDescription></CardDescription>
                </CardHeader>
                <CardContent className="">
                  <div className="flex flex-row gap-x-3">
                    <div className="h-auto pt-2">
                      <item.Icon className="h-9 w-9 stroke-yellow-500" />
                    </div>

                    <div className="flex flex-col justify-between h-auto">
                      <h1 className="">{item.title}</h1>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
      <div className="flex flex-col gap-y-3 px-8 w-full items-center mt-5">
        <h1 className="font-extrabold text-2xl tracking-normal uppercase italic">My Code Fuel</h1>
        <span className="font-normal text-muted-foreground first-letter:ml-5 text-[15px]">
          <span className="font-normal text-muted-foreground first-letter:ml-5 text-[15px] italic">
            &quot;I don&apos;t code without coffee – it&apos;s my syntax checker!&quot;
          </span>
        </span>
      </div>
    </div>
  );
};

export default AboutTab;
