import {useEffect, useState} from "react";
import {REQUEST_OPTIONS} from "./hooksTools";

export const useFetchSingleMovie = (id) => {
    const [movie, setMovie] = useState(null)

    const url = `${process.env.REACT_APP_MOVIE_BASE_URL}/${id}`
    useEffect(() => {
        async function fetchMovies() {
            const response = await fetch(url, REQUEST_OPTIONS)
            const data = await response.json()
            setMovie(data)
        }
        fetchMovies().then()
    }, [url]);
    return {movie, setMovie};
};