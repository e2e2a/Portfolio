import { ComponentType } from 'react';

export type NavItem = {
  title: string;
  tab: string;
};

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
};

export type DashboardConfig = {
  mainNav: NavItem[];
};

export type SkillsConfig = {
  title: string;
  skills: string[];
};

export type EducationConfig = {
  school: string;
  degree: string;
  year: string;
};

export type ExperienceConfig = {
  company: string;
  role: string;
  year: string;
  description: string;
};

export type WhatImDoingConfig = {
  Icon: ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

export type ContactConfig = {
  Icon: ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  value: string;
};

export type ContactFooterConfig = {
  Icon: ComponentType<React.SVGProps<SVGSVGElement>>;
  href: string;
};

export type ProjectConfig = {
  image: string;
  title: string;
  description: string;
  tools: string[];
  sourceCodeLink: string;
};
