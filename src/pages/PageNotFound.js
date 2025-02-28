import image from "../assets/images/pagenotfound.png"
import {Link} from "react-router-dom";
import {useDocumentTitle} from "../hooks/useDocumentTitle";

export function PageNotFound() {
    useDocumentTitle("Page not found");
    return (
        <div>
            <section className="flex flex-col justify-center items-center p-2">
                <div className="flex flex-col items-center my-4">
                    <p className="my-10 text-5xl font-bold text-gray-700 dark:text-white">404, Oops!</p>
                    <img src={image} alt="Page not found" className="max-w-lg rounded-lg" />
                </div>
                <div className="flex justify-center my-10">
                    <Link to="/" className="w-64 text-center bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-lg px-5 py-2.5 font-medium text-white">
                        Back to home page
                    </Link>
                </div>
            </section>
        </div>
    );
}