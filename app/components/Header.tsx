"use client"

import { useRouter } from 'next/router';
// import { BsSun, BsFillMoonFill } from 'react-icons/bs';
import Link from 'next/link';
// import { toggleTheme } from './ThemeSlice';
// import { useAppDispatch, useAppSelector } from './StoreHook';

const Header = () => {
//   const { darkTheme } = useAppSelector((state) => state);
    // const dispatch = useAppDispatch();
    // const router = useRouter();

//   const onToggle = () => {
//     dispatch(toggleTheme());
//   };

  return (
    <header className="mb-20">
      <nav className="border-b border-gray-200 border-opacity-25  w-full">
        <div className="flex flex-wrap justify-between items-center mx-auto ">
          <div className="flex items-center border-b py-2.5 mt-16 w-screen fixed bg-gray-700 z-10">
            {/* <span className="text-white pl-5 self-center text-4xl font-semibold whitespace-nowrap"> */}
              {/* <Link href="/">Movies</Link> */}
              <Link href="/" className="flex items-center">
                <span className="text-white py-2.5  md:text-3xl sm:xl pl-5 self-center text-3xl font-semibold whitespace-nowrap">Movies</span>
              </Link>
            {/* </span> */}
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
