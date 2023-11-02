"use client"

import { useRouter } from 'next/router';
// import { BsSun, BsFillMoonFill } from 'react-icons/bs';
import Link from 'next/link';
// import { toggleTheme } from './ThemeSlice';
import { useAppDispatch, useAppSelector } from './StoreHook';

const Header = () => {
//   const { darkTheme } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const router = useRouter();

//   const onToggle = () => {
//     dispatch(toggleTheme());
//   };

  return (
    <header className="mb-20">
      <nav className="border-b border-gray-200 border-opacity-25 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex items-center">
            <span className="text-white pl-5 self-center text-4xl font-semibold whitespace-nowrap">
              <Link href="/">Movies</Link>
            </span>
          </div>

          {/* <div className="flex items-center lg:order-2">
            {darkTheme.theme && (
              <BsSun
                onClick={() => onToggle()}
                className="hover:opacity-50 cursor-pointer"
              />
            )}
            {!darkTheme.theme && (
              <BsFillMoonFill
                onClick={() => onToggle()}
                className="hover:opacity-50 cursor-pointer"
              />
            )}
          </div> */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
