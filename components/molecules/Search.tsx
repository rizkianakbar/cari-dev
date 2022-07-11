import clsx from 'clsx';
import * as React from 'react';

import useLoaded from '@/hooks/useLoaded';

import SearchIcon from '@/components/icons/SearchIcon';

export default function Search() {
  const isLoaded = useLoaded();
  return (
    <div
      className={clsx(
        'flex items-center justify-between max-w-2xl mx-auto bg-gray-200 dark:bg-second w-full p-2 rounded-xl h-14 gap-1'
      )}
    >
      <SearchIcon className='ml-2 cursor-pointer' />
      <input
        type='text'
        // remove the ring from the input
        className='w-[85%] rounded-xl h-[100%] py-5 bg-gray-200 dark:bg-second pl-2 focus:outline-none focus:shadow-outline'
        placeholder='Search Github Username...'
      />
      <button className=' bg-blue-500 py-2 px-4 rounded-xl text-white'>
        Search
      </button>
    </div>
  );
}
