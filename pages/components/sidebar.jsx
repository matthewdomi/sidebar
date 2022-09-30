import React, { useMemo } from 'react';
import { useState } from 'react';
import classNames from 'classnames';
import { BsFillBookFill, BsBoxArrowLeft, BsBezier } from 'react-icons/bs';
import { BiHomeAlt } from 'react-icons/bi';
import {
  MdOutlineFavoriteBorder,
  MdQuiz,
  MdOutlineFavorite,
  MdOutlineQuiz,
} from 'react-icons/md';
import { GrLogout } from 'react-icons/gr';
import { FaChalkboardTeacher, FaHome } from 'react-icons/fa';
import { useRouter } from 'next/router';
import Link from 'next/link';

const menuItems = [
  { id: 1, label: 'Home', icon: FaHome, link: '/dashboarduser' },
  { id: 2, label: 'Favourite', icon: MdOutlineFavoriteBorder, link: '/favorite' },
  { id: 3, label: 'Tutorials', icon: FaChalkboardTeacher, link: '/tutorials' },
  { id: 4, label: 'Quiz', icon: MdQuiz, link: '/quiz' },
];

const Sidebar = () => {
  const [toggleCollapse, setTogggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);
  const router = useRouter();
  const activeMenu = useMemo(
    () => menuItems.find((menu) => menu.link === router.pathname),
    [router.pathname]
  );

  const wrapperClassnames = classNames(
    'h-screen px-4 pt-8 pb-4 bg-slate-200 flex justify-between flex-col  ',
    {
      ['w-80']: !toggleCollapse,
      ['w-20']: toggleCollapse,
    }
  );

  const collapseIconClass = classNames(
    'p-4 rounded-2xl bg-lighter absolute right-0',
    { 'rotate-180': toggleCollapse }
  );

  const getNavItemClasses = (menu) => {
    return classNames(
      'flex items-center cursor-pointer hover:bg-blue-400 rounded w-full overflow-hidden whitespace-nowrap',
      {
        ['bg-blue-700']: activeMenu === menu.id,
      }
    );
  };

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setTogggleCollapse(!toggleCollapse);
  };

  return (
    <div
      className={wrapperClassnames}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ transition: 'width 300ms cubic-Bezier(0.2, 0,0,1) 0.0001s' }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between relative ">
          <div className="flex items-center pl-1 gap-4">
            <BsFillBookFill className="text-3xl text-slate-900" />
            <span
              className={classNames('mt-2 text-lg font-medium text-slate-500', {
                hidden: toggleCollapse,
              })}
            >
              Open Dictionary
            </span>
          </div>
          {isCollapsible && (
            <button className={collapseIconClass} onClick={handleSidebarToggle}>
              <BsBoxArrowLeft />
            </button>
          )}
        </div>
       
        <div className="flex flex-col items-start mt-24">
          {menuItems.map(({ icon: Icon, ...menu }) => {
            const classes = getNavItemClasses(menu);
            return (
              <div key={menuItems.id} className={classes}>
                <Link href={menu.link}>
                  <a className="flex py-4 px-3 items-center w-full h-full space-x-2">
                    <div style={{ width: '2.5rem' }} className="text-2xl py-3">
                      <Icon />
                    </div>
                    {!toggleCollapse && (
                      <span
                        className={classNames(
                          'text-md font-medium text-slate-700'
                        )}
                      >
                        {menu.label}
                      </span>
                    )}
                  </a>
                </Link>
              </div>
            );
          })}
        </div>

        <div className="flex items-center px-3 mt-10 justify-between relative ">
          <div className="flex items-center pl-1 gap-4">
            <GrLogout className="text-2xl text-slate-900" />
            <span
              className={classNames(
                'mt-2 text-lg font-medium text-violet-900',
                {
                  hidden: toggleCollapse,
                }
              )}
            >
              Logout
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
