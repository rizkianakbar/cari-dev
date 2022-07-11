import clsx from 'clsx';

interface IProps {
  className?: string;
}
export default function SearchIcon({ className }: IProps) {
  return (
    <svg
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      className={clsx(
        'text-gray-400 group-focus-within:text-gray-500 transition-colors duration-150',
        className
      )}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
      ></path>
    </svg>
  );
}
