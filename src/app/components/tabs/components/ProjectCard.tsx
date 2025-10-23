import { ProjectConfig } from '@/types';
import Image from 'next/image';
import React from 'react';

interface IProps {
  project: ProjectConfig;
}

const ProjectCard = ({ project }: IProps) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg">
      {/* Image */}
      <Image
        className="w-full h-48 object-top object-cover"
        src={project.image}
        height={200}
        width={200}
        priority
        alt={project.title}
      />

      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{project.title}</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300">{project.description}</p>
        <div className="mt-4">
          <div className="font-semibold text-gray-800 dark:text-white">Tools Used:</div>
          <ul className="flex flex-wrap mt-2">
            {project.tools.map((tool, idx) => (
              <li
                key={idx}
                className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm mr-2 mb-2"
              >
                <h4 className="">{tool}</h4>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <a
            href={project.sourceCodeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            View Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
