import React from 'react';
import { links } from './links';
import Link from 'next/link';
import Dropdown from '../dropdown';

const Header = () => {
  return (
    <div className="py-5 p-5 bg-emerald-900 flex justify-between items-center ">
      <div className="ml-5">
        <a href="#" className="text-orange-200">
          Logo
        </a>
      </div>
      <div className="flex">
        <Dropdown/>
        {links.map((item, index) => {
          return (
            <Link href={item.link} key={index}>
              <a className="text-white ml-4">{item.linkName}</a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
