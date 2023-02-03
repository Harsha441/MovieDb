import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const MovieCast = ({ movieCast }) => {





    // console.log(cast)
    const slideLeft = () => {
        var slider = document.getElementById("title")
        slider.scrollLeft = slider.scrollLeft - 500
    }
    const slideRight = () => {
        var slider = document.getElementById("title")
        slider.scrollLeft = slider.scrollLeft + 500
    }
    return (
        <div className='p-4'>
            <h2 className='text-gray-700 font-bold md:text-2xl px-4 my-4'>Cast</h2>
            <div className=' relative flex items-center group '>
                <MdChevronLeft className='bg-gray-900 left-0 rounded-full absolute opacity-70 z-10 cursor-pointer text-white hidden group-hover:block group-hover:opacity-100' size={40} onClick={slideLeft} />
                <div id="title" className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                    {movieCast?.cast?.map((person, index) => {
                        // console.log({ person })
                        if (index < 10) {

                            return (
                                <div className='w-[200px]  inline-block cursor-pointer relative p-2 text-center' >
                                    <img className='w-[200px] h-auto block rounded-xl' src={`https://image.tmdb.org/t/p/w500${person?.profile_path}`} alt={person?.name} />
                                    <p className='whitespace-normal text-md py-4 font-bold h-full'>{person?.name}</p>
                                    <p className='text-md py-1'>{person?.character}</p>
                                </div>
                            )
                        }
                    })}

                </div>
                <MdChevronRight className='bg-gray-900 right-0 rounded-full absolute opacity-70  z-10 cursor-pointer text-white hidden group-hover:block group-hover:opacity-100' size={40} onClick={slideRight} />
            </div>
            <div className='p-2'>
                <h2 className='text-gray-900 text-md font-bold'>View full cast & crew -&gt;</h2>
            </div>
        </div>
    )
}

export default MovieCast