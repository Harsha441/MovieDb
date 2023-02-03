import axios from 'axios'
import React, { useEffect, useState } from 'react'
import requests from '../requests'

const TrailerSection = () => {

    const [trailers, setTrailers] = useState([])
    const [movies, setMovies] = useState([])

    useEffect(() => {
        getMovies()
    }, [])


    const getMovies = async () => {
        try {
            const { data } = await axios.get(requests.requestTrending)
            // console.log(data.results)
            setMovies(data.results)
            getTrailers()
            // if (data.results) {
            //     
            //     
            // }
        } catch (error) {
            console.log({ error })
        }
    }

    const getTrailers = async () => {

        let trailersArray = []
        try {
            if (movies.length > 1) {
                movies.map(async (movie) => {
                    // console.log({ movie })
                    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)

                    // trailersArray.push(data.results[0])
                    setTrailers([...trailers, data.results[0]])
                })

            }
            console.log({ trailersArray })
            // setTrailers(trailersArray)

        } catch (error) {

        }
    }


    return (
        <div className='bg-gray-800 '>
            <div className='flex flex-wrap'>

                {trailers.map((trailer) => {
                    console.log({ trailer })
                    return (
                        <iframe
                            width="853"
                            height="480"
                            src={`https://www.youtube.com/embed/${trailer?.key}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"
                        />
                    )
                })}
                {/* <video controls="true">
                    <source src="www.youtube.com/watch?v=IEDEtZ4UVtI" type="video/mp4" />
                </video> */}
            </div>
        </div>
    )
}

export default TrailerSection