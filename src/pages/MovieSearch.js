import {useFetchSearchMovie} from "../hooks/useFetchSearchMovie";
import {useSearchParams} from "react-router-dom";
import {MovieListContent} from "./MovieList";
import {useDocumentTitle} from "../hooks/useDocumentTitle";


export function MovieSearch() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query")
    useDocumentTitle(`Search result for ${query}`);
    const {movies} = useFetchSearchMovie(query)
    return (
        <div>
            <section className="ms-32 py-8">
                <h1 className="text-5xl text-gray-700 dark:text-white">
                    {movies && movies.length === 0 && `No result found for ${query}`}
                    {movies && movies.length !== 0 && `Result for ${query}`}
                </h1>
            </section>
            <MovieListContent movies={movies} />
        </div>
    );
}