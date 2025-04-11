import { contactFooterConfig } from '@/constant';
import { Facebook } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const AvatarFooter = () => {
  return (
    <div className="flex flex-row lg:w-full justify-between px-5 pb-5">
      {contactFooterConfig &&
        contactFooterConfig.length > 0 &&
        contactFooterConfig.map((contact, index) => (
          <div key={index} className="flex justify-between gap-2">
            <Link
              href={contact.href}
              className={`rounded-full group ${
                contact.Icon === Facebook ? 'bg-gray-500 px-0.5 pt-[3px] pb-[1px] text-white' : ''
              }`}
            >
              <contact.Icon className="h-6 w-6 stroke-[0.5px] fill-white group-hover:fill-blue-500 group-hover:text-blue-500" />
            </Link>
          </div>
        ))}
    </div>
  );
};

export default AvatarFooter;
