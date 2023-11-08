"use client"
// import { useRouter } from "next/router"
// import React, { useState, useEffect } from 'react';
// import axios from "axios";

// interface movieDetailsProps {
//     id: number,
//     title: string,
//     overview: string,
//     vote_average: number,
//     release_date: string,
//     poster_path: string,
//     onClick: ()=> void; 
// }



// const Movie = ({params, searchParams}: {params: any, searchParams: any}) => {
//     let movieId = params.id;

//     const [data, setData] =  useState();

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=a8a6fa2f944128e9712135bc3ca000b1`);
//                 console.log(response)
//                 setData(response.data);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };
    
//         fetchData();
        
//     }, []);;

//     console.log(movieId)
//     console.log(data)

//     return (
//         <>
//         {/* {JSON.stringify(params)} */}
//         {/* {JSON.stringify(searchParams)} */}
//             <div>{data}</div>
//         </> 
//     )
// }

// export default Movie

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '@/app/components/Header';

interface movieDetailsProps {
  id: number,
  title: string,
  overview: string,
  vote_average: number,
  vote_count: number,
  release_date: string,
  poster_path: string,
  onClick: () => void; 
}

const Movie = ({ params, searchParams }: { params: any, searchParams: any }) => {
  const APIURL = "https://image.tmdb.org/t/p/w500/"
  let movieId = params.id;

  const [data, setData] = useState<movieDetailsProps | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=a8a6fa2f944128e9712135bc3ca000b1`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [movieId]);

  console.log(movieId);
  console.log(data);

  return (
    <>
    <div className='bg-gray-900 h-full '>
        <Header/>
      {data ? (
        <div className='text-white w-96 m-auto' >
            <img
                src={APIURL + data.poster_path}
                alt="image"
                className="object-cover rounded-t-lg"
                // style={{ width: "384px"}}
              />
          <h1>{data.title}</h1>
          <p>release date:{data.release_date}</p>
          <p>rating: {data.vote_average}</p>
          <p>vote: {data.vote_count}</p>
          <p>{data.overview}</p>
        </div>
      ): (
      <div>Loading...</div>)}
    </div>
    </>
  )
}

export default Movie;
