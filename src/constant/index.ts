import {
  ContactConfig,
  ContactFooterConfig,
  DashboardConfig,
  EducationConfig,
  ExperienceConfig,
  ProjectConfig,
  SkillsConfig,
  WhatImDoingConfig,
} from '@/types';
import {
  Cake,
  Computer,
  Facebook,
  Github,
  LayoutPanelLeft,
  Lightbulb,
  Mail,
  MapPin,
  Phone,
  Smartphone,
  Twitter,
} from 'lucide-react';

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: 'About',
      tab: 'about',
    },
    {
      title: 'Projects',
      tab: 'project',
    },
    {
      title: 'Resume',
      tab: 'resume',
    },
  ],
};

export const skillsConfig: SkillsConfig[] = [
  {
    title: 'Web Frontend',
    skills: ['EJS', 'Bootstrap', 'Tailwind CSS', 'React.JS'],
  },
  {
    title: 'Web Backend',
    skills: ['Node.JS', 'Next.JS', 'Express.JS', 'Laravel', 'Rest APIs'],
  },
  {
    title: 'Database',
    skills: ['MongoDB', 'MySQL', 'Firebase', 'Redis', 'Supabase'],
  },
  {
    title: 'Hosting',
    skills: ['Vercel', 'Render'],
  },
  {
    title: 'Developer Tools',
    skills: ['Git', 'Github'],
  },
];

export const educationConfig: EducationConfig[] = [
  {
    school: 'Zamboanga del Norte National High School',
    degree: 'Junior High School Graduate',
    year: '2012 – 2016',
  },
  {
    school: 'Zamboanga del Norte National High School',
    degree: 'Senior High School Graduate',
    year: '2016 – 2019',
  },
  {
    school: 'Dipolog School of Fishiries',
    degree: 'Welding NC II Certification',
    year: '2019 – 2020',
  },
  {
    school: 'Dipolog School of Fishiries',
    degree: 'Diploma Program in Information Technology',
    year: '2020 – 2024',
  },
  {
    school: 'Dipolog City Institute of Technology, Incorporated',
    degree: 'Bachelor of Science in Computer Science',
    year: '2024 (Present)',
  },
];

export const experienceConfig: ExperienceConfig[] = [
  {
    company: '',
    role: 'Full Stack Developer',
    year: '2022 – Present',
    description:
      'Worked with various clients on full-stack development projects, delivering responsive and modern web.',
  },
  {
    company: 'OBI Services',
    role: 'Mid-Level JSON Developer',
    year: 'November 2024 – March 2025',
    description:
      'Worked with various clients on full-stack development projects, delivering responsive, modern web and mobile apps.',
  },
];

export const whatImDoingConfig: WhatImDoingConfig[] = [
  {
    Icon: LayoutPanelLeft,
    title: 'Website Design',
    description: 'A sleek, modern, and top-tier design with the latest trends.',
  },
  {
    Icon: Computer,
    title: 'Website Development',
    description: 'Building fast, reliable, and user-friendly websites tailored to your needs.',
  },
  {
    Icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Creating intuitive, responsive, and powerful mobile apps for all platforms.',
  },
  {
    Icon: Lightbulb,
    title: 'Continuous Innovation',
    description:
      'Constantly evolving and refining processes to deliver high-quality, future-proof solutions.',
  },
];

export const contactConfig: ContactConfig[] = [
  {
    Icon: Mail,
    title: 'Email',
    value: 'marzvelasco73019@gmail.com',
  },
  {
    Icon: Phone,
    title: 'Phone',
    value: '09751360878',
  },
  {
    Icon: Cake,
    title: 'Birthday',
    value: 'March 29, 2000',
  },
  {
    Icon: MapPin,
    title: 'Location',
    value: 'Estaka, Dipolog City, PH',
  },
];

export const contactFooterConfig: ContactFooterConfig[] = [
  {
    Icon: Facebook,
    href: 'https://www.facebook.com/reymond.godoy.71',
  },
  {
    Icon: Twitter,
    href: 'https://x.com/e2e2ea',
  },
  {
    Icon: Github,
    href: 'https://github.com/e2e2a',
  },
];

export const projectConfig: ProjectConfig[] = [
  {
    title: 'Enrollment Management System',
    description: `This project is a School Enrollment Management System in Dipolog City Institute of Technology, Incorporated. It is designed to automate and simplify the complex tasks of managing a school's operations or student's enrollments.`,
    tools: [
      'Next.js',
      'MongoDB',
      'Paypal',
      'Tailwind CSS',
      'Firebase',
      'Supabase',
      'Vercel',
      'LogRocket',
    ],
    image: '/projects/nextjs-enrollment.png',
    sourceCodeLink: 'https://github.com/e2e2a/nextjs-enrollment',
  },
  {
    title: 'Simple Login JS',
    description: `This is my first project in Node.js, where I have created a functional website with a simple login system. The project demonstrates the use of Node.js to handle user authentication and provide secure login functionality.`,
    tools: ['Node.js', 'Express', 'EJS', 'MongoDB', 'Bootstrap CSS'],
    image: '/projects/simpleLoginJS.png',
    sourceCodeLink: 'https://github.com/e2e2a/SimpleLoginJS',
  },
  {
    title: 'Online LGU Katipunan Appointment System',
    description: `This project is a comprehensive LGU Katipunan Appointment Management System. It is designed to automate and simplify the complex tasks of managing a school's operations.`,
    tools: ['Node.js', 'Express', 'EJS', 'MongoDB', 'Render', 'Bootstrap CSS'],
    image: '/projects/lgu.png',
    sourceCodeLink: 'https://github.com/e2e2a/thesis',
  },
  {
    title: 'E-commerce Management System',
    description: `This project explores the implementation of an integrated E-commerce Management System and Music Course Enrollment for Dunamis Music Center. The system aims to streamline operations and enhance customer experiences within the music center's online platform`,
    tools: ['Node.js', 'Express', 'EJS', 'MongoDB', 'Render', 'Bootstrap CSS'],
    image: '/projects/dunamis.png',
    sourceCodeLink: 'https://github.com/e2e2a/project-e-commerce',
  },
  {
    title: 'Profiling Management System',
    description: `This project introduces the Polanco Municipal Registrar Deceased Profiling Management System, a comprehensive solution designed to automate and simplify the complex tasks of managing deceased records within the municipal registrar's office.`,
    tools: ['Node.js', 'Express', 'EJS', 'MongoDB', 'Render', 'Bootstrap CSS'],
    image: '/projects/profiling.png',
    sourceCodeLink: 'https://github.com/e2e2a/projectHern',
  },
  {
    title: 'Enrollment Management System',
    description: `This project is a School Enrollment Management System in Dipolog School of Fishiries. It is designed to automate and simplify the complex tasks of managing a school's operations or student's enrollments.`,
    tools: ['Node.js', 'Express', 'EJS', 'MongoDB', 'Render', 'Bootstrap CSS'],
    image: '/projects/node-enrollment.png',
    sourceCodeLink: 'https://github.com/e2e2a/school-project',
  },
];
