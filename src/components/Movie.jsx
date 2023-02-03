import { useRouter } from 'next/router'
import React from 'react'

const Movie = ({ item }) => {

    const router = useRouter()
    const handleRoute = (id) => {
        router.push({ pathname: "/movieId", query: { "id": id } })
    }

    return (
        <>
            <div className='w-[200px] h-[90px] inline-block cursor-pointer relative p-2' onClick={() => handleRoute(item.id)}>
                <img className='w-[200px] h-auto block rounded-xl' src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`} alt={item?.title} />
                <p className='whitespace-normal text-md py-4 font-bold flex h-full text-clip'>{item?.title}</p>
                <p className='text-md py-1'>{item?.release_date}</p>

            </div>
        </>

    )
}

export default Movie