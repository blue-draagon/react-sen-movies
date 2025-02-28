import {useFetch} from "./useFetch";

export const useFetchMovieList = (type) => {
    const url = `${process.env.REACT_APP_MOVIE_BASE_URL}/${type}`
    const {data: movies, setData: setMovies} = useFetch(url)
    return {movies, setMovies};
};