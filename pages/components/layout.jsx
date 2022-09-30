import React from 'react';
import Sidebar from './sidebar';

const Layout = ({ children }) => {
  return (
    <div className="h-screen flex flex-row justify-start">
      <Sidebar />
      <div className="bg-blue-500 flex flex-1 p-4 text-slate-200 ">
        {children}
      </div>
    </div>
  );
};

export default Layout;
