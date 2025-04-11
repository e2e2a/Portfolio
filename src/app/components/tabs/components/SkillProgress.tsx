'use client';
import * as React from 'react';
import { Progress } from '@/components/ui/progress';
import { SkillsConfig } from '@/types';

interface IProps {
  skill: SkillsConfig;
}

export function SkillProgress({ skill }: IProps) {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(skill.progress), 1000);
    return () => clearTimeout(timer);
  }, [skill.progress]);

  return (
    <div className="flex flex-col gap-2 mt-4">
      <span className="text-[16px] font-medium">
        {skill.title} <span className="text-muted-foreground">{skill.progress}%</span>
      </span>
      <Progress value={progress} className=" transition-all duration-1000 ease-in-out" />
    </div>
  );
}
