import clsx from 'clsx';
import type { NextPage } from 'next';
import Image from 'next/image';
import * as React from 'react';
import { Toaster } from 'react-hot-toast';

import useLoaded from '@/hooks/useLoaded';

import GithubIcon from '@/components/icons/GithubIcon';
import TwitterIcon from '@/components/icons/TwitterIcon';
import Layout from '@/components/layout';
import Search from '@/components/molecules/Search';

import { useGlobalContext } from '@/context/GlobalContext';

const Home: NextPage = () => {
  const isLoaded = useLoaded();
  const {
    data: {
      name,
      avatar_url,
      login,
      created_at,
      bio,
      location,
      company,
      blog,
      followers,
      following,
      public_repos,
      twitter_username,
    },
  } = useGlobalContext();

  return (
    <React.Suspense fallback={null}>
      <Layout>
        <Toaster />
        <Search />
        <section
          className={clsx(
            'flex items-center max-w-2xl min-h-[500px]  mx-auto bg-gray-200 dark:bg-second w-full md:p-2 rounded-xl dark:text-gray-200 text-gray-900 mb-20 shadow-xl',
            isLoaded && 'fade-in-start'
          )}
        >
          <div className='grid grid-cols-1 md:grid-cols-4 md:gap-4 w-full py-12 md:px-6'>
            <div className='flex items-start justify-center' data-fade='1'>
              {avatar_url && (
                <Image
                  src={avatar_url}
                  alt='Github Logo'
                  className='rounded-full object-cover w-full h-full'
                  width={140}
                  height={140}
                />
              )}
            </div>
            <div className='col-span-3 px-4 mt-6 md:mt-0'>
              <div className='grid grid-cols-2' data-fade='1'>
                <div>
                  <h1 className='font-bold text-2xl'>{name}</h1>
                  <p>@{login}</p>
                </div>
                <div className='text-right pt-[5px]'>
                  <span>Joined </span>
                  <span className='block md:inline'>{created_at}</span>
                </div>
              </div>
              <p className='mt-8 text-center' data-fade='1'>
                {bio ? bio : 'This user has no bio'}
              </p>
              <div
                className='bg-white dark:bg-main rounded-xl my-8 px-2 md:px-6 py-6 shadow-xl'
                data-fade='2'
              >
                <div className='grid grid-cols-3 divide-x-2 divide-dashed divide-blue-300 text-center text-sm md:text-md'>
                  <div>
                    <p>Followers</p>
                    <p className='text-xl font-bold mt-2'>{followers}</p>
                  </div>
                  <div>
                    <p>Repos</p>
                    <p className='text-xl font-bold mt-2'>{public_repos}</p>
                  </div>
                  <div>
                    <p>Following</p>
                    <p className='text-xl font-bold mt-2'>{following}</p>
                  </div>
                </div>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-6 gap-x-2 text-sm'>
                <p data-fade='3'>
                  <GithubIcon className='inline' />
                  {location ?? 'No Location'}
                </p>
                <p data-fade='4'>
                  <GithubIcon className='inline' />
                  {company ?? 'No Company'}
                </p>
                <p data-fade='5'>
                  <GithubIcon className='inline' />
                  {blog ? blog : 'No Blog'}
                </p>
                <p data-fade='6'>
                  <TwitterIcon className='inline' />
                  {twitter_username ?? 'No Twitter'}
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
