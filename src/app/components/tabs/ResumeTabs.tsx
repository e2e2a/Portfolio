'use client';
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Briefcase, GraduationCap, Code2 } from 'lucide-react';
import { educationConfig, experienceConfig, skillsConfig } from '@/constant';

const ResumeTabs = () => {
  return (
    <div className="flex items-center flex-col">
      <div className="flex flex-col w-full py-5 gap-y-10 px-8">
        <div>
          <h1 className="font-bold text-3xl tracking-wide flex flex-col">
            Resume
            <div className="w-14 mt-1">
              <Separator className="py-[2px] rounded-md bg-yellow-500" />
            </div>
          </h1>
        </div>
        <div className="w-full">
          <h2 className="font-bold text-2xl tracking-wide flex items-center gap-2">
            <GraduationCap className="w-5 h-5 stroke-yellow-500" />
            Education
          </h2>

          <div className="relative mt-6 ml-6 border-l border-yellow-500/40 pl-6 space-y-10">
            {educationConfig.map((edu, idx) => (
              <div key={idx} className="relative group">
                <span className="absolute -left-3 top-1.5 w-3 h-3 rounded-full bg-yellow-500 border-2 border-white dark:border-zinc-800" />
                <div className="flex flex-col">
                  <h3 className="font-semibold ">{edu.school}</h3>
                  <span className="text-yellow-500 font-medium text-sm">{edu.year}</span>
                  <p className="text-muted-foreground text-sm">{edu.degree}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="w-full">
          <h2 className="font-bold text-2xl tracking-wide flex items-center gap-2">
            <Briefcase className="w-5 h-5 stroke-yellow-500" />
            Experience
          </h2>

          <div className="relative mt-6 ml-6 border-l border-yellow-500/40 pl-6 space-y-10">
            {experienceConfig.map((exp, idx) => (
              <div key={idx} className="relative group">
                <span className="absolute -left-3 top-1.5 w-3 h-3 rounded-full bg-yellow-500 border-2 border-white dark:border-zinc-800" />
                <div className="flex flex-col">
                  <h3 className="font-semibold">
                    {exp.role} @ {exp.company}
                  </h3>
                  <span className="text-yellow-400 font-medium text-sm">{exp.year}</span>
                  <p className="text-muted-foreground text-sm">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="w-full">
          <h2 className="font-bold text-2xl tracking-wide flex items-center gap-2">
            <Code2 className="w-5 h-5 stroke-yellow-500" />
            Skills & Tools
          </h2>
          <div className="border-t mt-5 gap-x-6 gap-y-2 w-full shadow-lg shadow-neutral-300 dark:shadow-zinc-900 px-6 rounded-xl pt-3 pb-6">
            <div className="flex flex-col gap-y-5">
              {skillsConfig.length > 0 &&
                skillsConfig.map((item, idx) => (
                  <div key={idx} className="relative group">
                    <span className="absolute -left-3 top-1.5 w-2.5 h-2.5 rounded-full bg-yellow-500 border-2 border-white dark:border-zinc-800" />
                    <div className="font-bold">{item.title}</div>
                    <Separator className="py-[0.1px] rounded-md bg-yellow-400/90 mb-2" />
                    <div className="text-muted-foreground">{item.skills.join(', ')}</div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeTabs;
