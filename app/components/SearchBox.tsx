import { Dispatch, SetStateAction } from 'react';

interface SearchBoxProps {
  setSearchTerm: Dispatch<SetStateAction<string>>;
}

const SearchBox: React.FC<SearchBoxProps> = ({ setSearchTerm }) => {
  return (
    <input
      onChange={(e) => setSearchTerm(e.target.value.trim().toLowerCase())}
      type="search"
      className="block w-1/2 m-auto p-4 pl-10 focus:outline-none text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
      placeholder="Search..."
    />
  );
};

export default SearchBox;
