
import {MovieCard} from "../components";
import {useFetchMovieList} from "../hooks/useFetchMovieList";
import {useDocumentTitle} from "../hooks/useDocumentTitle";

export function MovieList({type, title}) {
    const {movies} = useFetchMovieList(type)
    useDocumentTitle(`${title} Movies`)

    return (
        <MovieListContent movies={movies} />
    );
}

export function MovieListContent({movies}) {
    return (
        <div className="max-w-7xl mx-auto py-7 min-h-lvh">
            <div className="flex justify-center flex-wrap gap-8">
                {movies && movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}