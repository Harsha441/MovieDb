import React, { useEffect, useState } from 'react'
import axios from 'axios'
import requests from '../requests'


const Main = () => {
    const [movies, setMovies] = useState([])

    const movie = movies[Math.floor(Math.random() * movies.length)]

    useEffect(() => {
        getMovies()

    }, [])


    const getMovies = async () => {

        const { data } = await axios.get(requests.requestPopular)
        // console.log(data)
        setMovies(data.results)
    }

    // console.log({ movie })

    const truncateString = (str, num) => {
        if (str?.length > num) {
            return str.slice(0, num) + "..."
        } else {
            return str
        }
    }

    return (
        <div className='w-full h-[550px] md:h-screen text-white'>
            <div className='w-full h-full'>
                <div className='w-full h-[550px] md:h-screen absolute bg-gradient-to-r from-black'></div>
                <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
                <div className='absolute w-full top-[20%] md:top-[60%] p-4 md:p-8'>
                    <h1 className='text-3xl md:text-4xl font-bold'>{movie?.title}</h1>

                    <div className='my-4'>
                        <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>Play</button>
                        <button className='border  text-white border-gray-300 py-2 px-5 ml-4'>Watch Later</button>
                    </div>
                    <p className='text-gray-400 text-sm'>Released: {movie?.release_date}</p>
                    <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 '>{truncateString(movie?.overview, 120)}</p>
                </div>
            </div>
        </div>
    )
}

export default Main