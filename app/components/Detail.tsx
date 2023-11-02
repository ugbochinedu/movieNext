"use client"

import { useEffect, useLayoutEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
// import { useParams } from "react-router-dom";
import { getSelectedMovie,getMovieDetails } from './MovieSlice';
import { useAppDispatch } from './StoreHook';
import MovieCard from './MovieCard';

// const Detail = () => {
//   // const { movieId } = useParams();
//   const router = useRouter();
//   const { movieId } = router.query;
//   const dataMovie = useSelector(getSelectedMovie);
//   const dispatch = useAppDispatch();

//   console.log(movieId)  

//   useLayoutEffect(() => {
//     dispatch(getMovieDetails(movieId));
//   }, [dispatch, movieId]);

  
//   if (!dataMovie) {
//     return <h1>Movie Not Found</h1>;
//   }

//   return <MovieCard {...dataMovie} />;
// };

// export default Detail;


const Detail = () => {
  const router = useRouter();
  const { movieId } = router.query;
//   const { movieId } = useParams();
  const dataMovie = useSelector(getSelectedMovie);
  const dispatch = useAppDispatch();


//   const handleSearch = async (query:string) =>{
//         const results = await searchMovies(query);
//         setMovies(results)
//         console.log(movies)
//     }

    useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        if (movieId) {
          console.error('Invalid movieId:', movieId);
          return; // Handle the error appropriately
        }

        if (movieId) {
          await dispatch(getMovieDetails(movieId));
        }
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [dispatch, movieId]);

//   useEffect(() => {
//     if (movieId) {
//       dispatch(getMovieDetails(movieId));
//     }
//   }, [dispatch, movieId]);

//   if not found movieDetails
  if (!dataMovie) {
    return <h1>Movie Not Found</h1>;
  }

  return <MovieCard {...dataMovie} />;
};

export default Detail;





