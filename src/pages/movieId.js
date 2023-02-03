import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import MovieBanner from "../components/MovieBanner";

const MovieId = () => {
	const [movieId, setMovieId] = useState("");
	const [movieDetails, setMovieDetails] = useState([]);
	// const [show, setShow] = useState(false);

	let router = useRouter();

	// let id = router.query.id;
	useEffect(() => {
		console.log("running");
		if (router.isReady) {
			let id = router.query.id;
			console.log({ id });
			setMovieId(id);
			getMovieDetails(id);
		}
	}, [router.isReady]);

	const getMovieDetails = async (id) => {
		console.log(id);
		try {
			const { data } = await axios.get(
				`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US`
			);
			console.log(data);
			setMovieDetails(data);
		} catch (error) {
			console.log({ error });
		}
	};
	return <div>{<MovieBanner movieDetails={movieDetails} />}</div>;
};

export default MovieId;
