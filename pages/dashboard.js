import React from "react";
import SideNavbar from "./components/sidenavbar";
const Dashboard = () => {
  return (
    <div>
      <div className='bg-yellow-400 flex justify-between p-4 h-14'>
        <div className=''>GoogleTranslate</div>
        <div>search</div>
        <div>space</div>
        <div className='flex'>
          <div className=''>setting</div>
          <div>dropdown</div>
        </div>
      </div>
      <div>
        <div className='grid grid-cols-4'>
          <div className='bg-white  '>
            <SideNavbar/>
          </div>
          <div className='grid col-span-3 flex'>
            <div className='bg-slate-500 flex'>
              <div>Yourfavorate</div>
              <div>favoratelists</div>
              <div>favoratelists</div>
              <div>favoratelists</div>
              <div>favoratelists</div>
            </div>
            <div className='grid grid-cols-2'>
              <div className='bg-pink-500'>
                <div>Word</div>
                <div>Add to favorate</div>
                <div>pronunciation</div>
                <div>audio</div>
                <div>meaning</div>
                <div>
                  <div>Save meaning as pdf</div>
                  <div>asdfgs</div>
                </div>
              </div>

              <div className='bg-blue-400'>
                <div>Synonyms</div>
                <div>Antonyms</div>
                <div>Example</div>
                <div>
                  <div>download</div>
                  <div>share</div>
                  <div>favorate</div>
                  <div>copy</div>
                </div>
              </div>
            </div>
            <div className='bg-green-400'>Suggestion</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
