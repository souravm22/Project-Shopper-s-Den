import React from 'react';
import { Link } from 'react-router-dom';

function SecNavbar() {
  return (
    <>
      <div className='transition-all duration-200 flex flex-wrap justify-center gap-4 text-xl items-center w-full shadow-lg bg-slate-200 text-black dark:bg-slate-800 dark:text-white'>
        <ul className='hover:bg-slate-400 dark:hover:bg-slate-900 transition-all duration-300 rounded-lg font-madimi font-bold hover:font-bold hover:cursor-pointer hover:border-black border-b-2'>
          <Link to='/' className='no-underline text-black dark:text-white'>
            Home
          </Link>
        </ul>
        <ul className='hover:bg-slate-400 dark:hover:bg-slate-900 transition-all duration-300 rounded-lg font-madimi font-bold hover:font-bold hover:cursor-pointer hover:border-black border-b-2'>
          <Link to='/about' className='no-underline text-black dark:text-white'>
            About Us
          </Link>
        </ul>
        <ul className='hover:bg-slate-400 dark:hover:bg-slate-900 transition-all duration-300 rounded-lg font-madimi font-bold hover:font-bold hover:cursor-pointer hover:border-black border-b-2'>
          <Link
            to='/category'
            className='no-underline text-black dark:text-white'
          >
            Categories
          </Link>
        </ul>
        <ul className='hover:bg-slate-400 dark:hover:bg-slate-900 transition-all duration-300 rounded-lg font-madimi font-bold hover:font-bold hover:cursor-pointer hover:border-black border-b-2'>
          <Link to='/prod' className='no-underline text-black dark:text-white'>
            Products
          </Link>
        </ul>
      </div>
    </>
  );
}

export default SecNavbar;
