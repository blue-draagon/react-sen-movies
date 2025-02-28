import {Link} from "react-router-dom";
import default_image from "../assets/images/backup.png";

export function MovieCard({movie}) {
    const {id, poster_path, title, overview} = movie
    const image = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : default_image
    const detailLink = `/film/${id}`
    return (
        <div
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <Link to={detailLink}>
                <img className="w-full rounded-t-lg object-cover" src={image} alt=""/>
            </Link>
            <div className="p-5">
                <Link to={detailLink}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        { title }
                    </h5>
                </Link>
                <div className="h-72 flex flex-col items-start justify-between">
                    <p className="h-56 overflow-y-hidden mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {overview}
                    </p>
                    <Link to={detailLink}
                          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                  strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </Link>
                </div>

            </div>
        </div>
    );
}