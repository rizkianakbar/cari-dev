import * as React from 'react';

export default function Footer() {
  return (
    <footer className='flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8'>
      <hr className='w-full border-1 border-gray-200 dark:border-gray-800 mb-2' />
      <div className='w-full max-w-2xl flex-col justify-center items-center text-center'>
        <p className='text-gray-900 dark:text-gray-200 w-full'>
          <span className='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>
            © 2022{' '}
            <a
              href='https://rizkianakbar.live/'
              target='_blank'
              className='hover:underline'
              rel='noreferrer'
            >
              RizkianAkbar
            </a>
            . All Rights Reserved.
          </span>
        </p>
      </div>
    </footer>
  );
}
