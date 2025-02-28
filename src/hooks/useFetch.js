import {useEffect, useState} from "react";
import {REQUEST_OPTIONS} from "./hooksTools";

export const useFetch = (url) => {
    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchMovies() {
            const response = await fetch(url, REQUEST_OPTIONS)
            const data = await response.json()
            setData(data.results)
        }
        fetchMovies().then()
    }, [url]);
    return {data, setData};
};