import { Separator } from '@/components/ui/separator';
import { projectConfig } from '@/constant';
import React from 'react';
import ProjectCard from './components/ProjectCard';

const ProjectTab = () => {
  return (
    <div className="flex items-start flex-col min-h-auto">
      <div className="px-8 py-5">
        <h2 className="font-bold text-3xl flex flex-col tracking-wide">
          My Projects
          <div className=" w-14">
            <Separator className="py-[2px] rounded-md bg-yellow-500" />
          </div>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 px-8 gap-y-10 gap-x-2 w-full mb-6">
        {projectConfig &&
          projectConfig.length > 0 &&
          projectConfig.map((project, index) => (
            <div className="" key={index}>
              <ProjectCard project={project} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProjectTab;
