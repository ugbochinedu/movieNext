"use client"

import { useEffect, useState } from 'react';
import { getMovies } from './MovieSlice';
import { useAppDispatch, useAppSelector } from './StoreHook';
import MovieCard from './MovieCard';
import SearchBox from './SearchBox';

// import styles from './Home.module.css'; // Create a CSS module file

function Home() {
  const {  movies } = useAppSelector((state) => state);
  const [searchTerm, setSearchTerm] = useState('');

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  const searchMovies = movies.data?.results.filter((movie) => {
    return movie.title.toLowerCase().includes(searchTerm);
  });

  return (
    <div >
      <div className={`min-h-screen px-4 lg:px-12 pb-20`}>
        <div className={`mb-4 flex items-center justify-between`}>
          <SearchBox setSearchTerm={setSearchTerm} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {searchMovies && searchMovies.length ? (
            searchMovies.map((movie) => {
              const { id, title, overview, poster_path } = movie;
              return <MovieCard key={id} id={id} title={title} overview={overview} poster_path={poster_path} />;
            })
          ) : (
            <h4>No Movie Found</h4>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
