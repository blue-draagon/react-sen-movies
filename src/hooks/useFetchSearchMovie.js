import {useFetch} from "./useFetch";

export const useFetchSearchMovie = (query) => {
    const url = `${process.env.REACT_APP_SEARCH_MOVIE_BASE_URL}${query}`
    const {data: movies, setData: setMovies} = useFetch(url)
    return {movies, setMovies};
};