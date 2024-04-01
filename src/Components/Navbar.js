import React from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import DarkMode from './DarkMode';
import SecNavbar from './SecNavbar';
import { Link } from 'react-router-dom';
import LoginButton from './GetStarted/LoginButton';
import SignUpButton from './GetStarted/SignUpButton';

function Navbar() {
  return (
    <>
      <div className='bg-orange-300 flex flex-wrap items-center justify-between px-4 py-2 shadow-md dark:bg-gray-900 dark:text-white'>
        <div className='flex items-center gap-6 flex-grow'>
          <div className='font-workbench text-4xl font-bold text-slate-900 dark:text-white'>
            SHOPPER'S DEN
          </div>
        </div>
        <div className='flex items-center gap-4 mr-2'>
          <LoginButton />
          <SignUpButton />
        </div>
        <div className='flex items-center ml-auto'>
          <button
            onClick={() => {
              alert('ORDERING NOT AVAILABLE CURRENTLY');
            }}
            className='bg-orange-400 transition-all duration-200 text-black font-bold py-1 px-4 rounded-full flex items-center gap-3 group mr-4'
          >
            <span className='group-hover:block hidden transition-all duration-200'>
              Order
            </span>
            <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer' />
          </button>
          <DarkMode />
        </div>
      </div>
      <SecNavbar />
    </>
  );
}

export default Navbar;
