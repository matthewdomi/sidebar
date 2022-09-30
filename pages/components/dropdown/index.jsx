import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import { dropdownLinks } from './dropdownlinks';

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  

  return (
    <div className="text-white ">
      <h1 onClick={toggle} className="flex gap-1">
        Dropdown
        <IoIosArrowUp
          className={`${open ? 'rotate-180' : 'rotate-0'} duration-500`}
        />
      </h1>

      {open && (
        <motion.div
          initial={{ opacity: 0, translateY: -30 }}
          animate={{ opacity: 1, translateY: 0 }}
          exit={{ opacity: 0, translateY: 10 }}
          className="absolute bg-emerald-900 p-5 rounded-lg"
          transition={{ duration: 0.5 }}
        >
          {dropdownLinks.map((item, index) => {
            return (
              <div key={index}>
                <Link href={item.link}>
                  <a>{item.linkName}</a>
                </Link>
              </div>
            );
          })}
        </motion.div>
      )}
    </div>
  );
};

export default Dropdown;
