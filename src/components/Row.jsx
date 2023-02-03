import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const Row = ({ title, fetchURL }) => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        getMovies()
    }, [])

    const getMovies = async () => {
        const { data } = await axios.get(fetchURL);
        // console.log(data)
        setMovies(data.results)
    }

    const slideLeft = () => {
        var slider = document.getElementById(title)
        slider.scrollLeft = slider.scrollLeft - 500
    }
    const slideRight = () => {
        var slider = document.getElementById(title)
        slider.scrollLeft = slider.scrollLeft + 500
    }

    return (
        <div className='p-4'>
            <h2 className='text-gray-700 font-bold md:text-2xl px-4 my-4'>{title}</h2>
            <div className=' relative flex items-center group '>
                <MdChevronLeft className='bg-gray-900 left-0 rounded-full absolute opacity-70 z-10 cursor-pointer text-white hidden group-hover:block group-hover:opacity-100' size={40} onClick={slideLeft} />
                <div id={title} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                    {movies.map((item, id) => (
                        <Movie key={id} item={item} />
                    ))}
                </div>
                <MdChevronRight className='bg-gray-900 right-0 rounded-full absolute opacity-70  z-10 cursor-pointer text-white hidden group-hover:block group-hover:opacity-100' size={40} onClick={slideRight} />
            </div>
        </div>
    )
}

export default Row