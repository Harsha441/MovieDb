import React, { useEffect, useState } from 'react'
import useImageColor from 'use-image-color'


const MovieBanner = ({ movieDetails }) => {

    const [color, setColor] = useState([])

    console.log({ movieDetails },)
    let date = new Date(movieDetails?.release_date)





    const { colors } = useImageColor(`https://image.tmdb.org/t/p/original/${movieDetails?.backdrop_path}`, { cors: true, colors: 5 })
    console.log(colors)





    return (
        <div className='w-full h-[200px] md:h-[700px]  '>
            <div className='w-full h-full'>
                <div className={`w-full h-[200px] md:h-[700px]   absolute bg-gradient-to-r from-black md:bg-white md:opacity-80 `}></div>
                <img className='w-full h-full md:object-cover' src={`https://image.tmdb.org/t/p/original/${movieDetails?.backdrop_path}`} alt={movieDetails?.title} />
                <div className='absolute top-[10%]  flex justify-center items-center'>
                    <div className='w-[100px]  md:w-[300px] mr-5'>
                        <img className='w-full h-full rounded-xl z-50' src={`https://image.tmdb.org/t/p/w500/${movieDetails?.poster_path}`} alt={movieDetails?.title} />
                    </div>
                    <div className='px-5 max-w-[60%] hidden md:block'>
                        <h1 className='text-3xl font-bold text-gray-900'>{movieDetails?.title} ({date.getFullYear()})</h1>
                        <p className='py-2 text-sm text-gray-900'>{date.getDate()}/{date.getMonth()}/{date.getFullYear()} ({movieDetails?.production_countries?.[0]?.iso_3166_1
                        }) |

                            {movieDetails?.genres?.map((genre) => (
                                <span> {genre?.name}, </span>
                            ))} | {movieDetails?.runtime} min

                        </p>
                        <em className='text-md text-gray-400 py-4'>{movieDetails?.tagline}</em>
                        <div className='py-4'>
                            <h1 className='text-lg font-bold py-2'>Overview</h1>
                            <p className=' text-justify text-md'>{movieDetails?.overview}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}



export default MovieBanner