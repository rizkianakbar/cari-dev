import type { NextPage } from 'next';
import Image from 'next/image';
import * as React from 'react';

import useLoaded from '@/hooks/useLoaded';

import GithubIcon from '@/components/icons/GithubIcon';
import Layout from '@/components/layout';
import Search from '@/components/molecules/Search';

const Home: NextPage = () => {
  const isLoaded = useLoaded();

  return (
    <React.Suspense fallback={null}>
      <Layout>
        <Search />
        <section className='flex items-center max-w-2xl mx-auto bg-gray-200 dark:bg-second w-full md:p-2 rounded-xl text-gray-200'>
          <div className='grid grid-cols-1 md:grid-cols-4 md:gap-4 w-full py-12 md:px-6'>
            <div className='flex items-start justify-center'>
              <Image
                src='/kian.jpeg'
                alt='Kian Akbar'
                className='rounded-full object-cover w-full h-full'
                loading='eager'
                width={140}
                height={140}
              />
            </div>
            <div className='col-span-3 px-4 mt-6 md:mt-0'>
              <div className='grid grid-cols-2'>
                <div>
                  <h1 className='font-bold text-2xl'>Rizkian Akbar</h1>
                  <p>@rizkianakbar</p>
                </div>
                <div className='text-right'>
                  <span>Joined </span>
                  <span className='block md:inline'>12 June 2016</span>
                </div>
              </div>
              <p className='mt-8 text-center'>This user has no bio</p>
              <div className='bg-main rounded-xl my-8 px-4 md:px-10 py-6 drop-shadow-2xl fancy-shadow'>
                <div className='flex justify-between flex-wrap gap-4'>
                  <div>
                    <p>Repos</p>
                    <p className='text-xl font-bold mt-2'>26</p>
                  </div>
                  <div>
                    <p>Followers</p>
                    <p className='text-xl font-bold mt-2'>244</p>
                  </div>
                  <div>
                    <p>Following</p>
                    <p className='text-xl font-bold mt-2'>49</p>
                  </div>
                </div>
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <p>
                  <GithubIcon className='inline' />
                  San Francisco
                </p>
                <p>
                  <GithubIcon className='inline' />
                  @rizkianakbr
                </p>
                <p>
                  <GithubIcon className='inline' />
                  https://rizkianakbar.live
                </p>
                <p>
                  <GithubIcon className='inline' />
                  Bountie
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </React.Suspense>
  );
};

export default Home;
