import {useParams} from "react-router-dom";
import {useFetchSingleMovie} from "../hooks/useFetchSingleMovie";
import default_image from "../assets/images/backup.png";
import {useDocumentTitle} from "../hooks/useDocumentTitle";


export function MovieDetail() {
    const params = useParams();
    const {movie} = useFetchSingleMovie(params.id);
    useDocumentTitle(movie?.title);

    function movie_image() {
        return movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : default_image
    }

    function format(runtime) {
        return `${Math.floor(runtime/60)} hr ${ runtime % 60} min.`
    }

    function imdb_link(imdb_code) {
        return `https://www.imdb.com/title/${imdb_code}`;
    }

    return (
        <div className="min-h-lvh">
            {
                movie && (
                    <section className="flex justify-center flex-wrap py-5">
                        <div className="max-w-sm mx-2">
                            <img className="rounded-lg" src={movie_image()} alt={movie.title}/>
                        </div>
                        <div className="max-w-2xl px-8 text-gray-700 text-lg dark:text-white">
                            <h2 className="text-5xl font-bold my-3 text-center lg:text-left">
                                {movie.title}
                            </h2>
                            <p className="my-4">{movie.overview}</p>
                            <p className="my-7 flex flex-wrap gap-3">
                                {   movie.genres &&
                                    movie.genres.map((genre) => (
                                        <span key={genre.id} className="me-2 border border-gray-200 dark:border-gray-600 rounded-lg px-3 py-2.5">
                                    {genre.name}
                                </span>
                                    ))
                                }
                            </p>
                            <div className="ms-4 flex items-center">
                                <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path
                                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                </svg>
                                <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">
                                    {movie.vote_average}
                                </p>
                                <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                                <span className="text-sm font-medium text-gray-900 hover:no-underline dark:text-white">
                                    {movie.vote_count} reviews
                                </span>
                            </div>
                            <p className="my-4">
                                <span className="me-2 font-bold">Runtime:</span>
                                <span>{format(movie.runtime)}</span>
                            </p>
                            <p className="my-4">
                                <span className="me-2 font-bold">Release Date:</span>
                                <span>{movie.release_date}</span>
                            </p>
                            <p className="my-4">
                                <span className="me-2 font-bold">IMDB Code:</span>
                                <a href={imdb_link(movie.imdb_id)} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">
                                    {movie.imdb_id}
                                </a>
                            </p>
                        </div>
                    </section>
                )
            }

        </div>
    );
}