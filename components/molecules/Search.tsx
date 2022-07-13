import clsx from 'clsx';
import * as React from 'react';

import LoaderIcon from '@/components/icons/LoaderIcon';
import SearchIcon from '@/components/icons/SearchIcon';

import { useGlobalContext } from '@/context/GlobalContext';

export default function Search() {
  const { handleClick, handleKeyPress, userRef, isLoading } =
    useGlobalContext();

  return (
    <div
      className={clsx(
        'flex items-center justify-between max-w-2xl mx-auto bg-gray-200 dark:bg-second w-full p-2 rounded-xl h-14 gap-1 text-blue-500 dark:text-white'
      )}
    >
      <SearchIcon className='ml-2 cursor-pointer text-gray-900 dark:text-gray-200' />
      <input
        type='text'
        className='w-[85%] rounded-xl h-[100%] py-5 bg-gray-200 dark:bg-second pl-2 focus:outline-none focus:shadow-outline'
        placeholder='Search Github Username...'
        onKeyPress={handleKeyPress}
        ref={userRef}
      />
      <button
        onClick={handleClick}
        className=' bg-white dark:bg-blue-500 py-2 px-4 rounded-xl shadow-xl w-[100px] h-full'
      >
        {isLoading ? (
          <LoaderIcon className='text-blue-500 dark:text-gray-900' />
        ) : (
          <span className='text-blue-500 dark:text-gray-200'>Search</span>
        )}
      </button>
    </div>
  );
}
