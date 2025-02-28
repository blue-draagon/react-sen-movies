import {Route, Routes} from "react-router-dom";
import {MovieDetail, MovieList, MovieSearch, PageNotFound} from "../pages"
import React from "react";


export const AppRoutes = () => {
    return (
        <main className="dark:bg-slate-800">
            <Routes>
                <Route path="/" element={<MovieList type="now_playing" title="Now Playing" />}/>
                <Route path="films" element={<MovieList type="now_playing" title="Now Playing" />}/>
                <Route path="films/popular" element={<MovieList type="popular" title="Popular" />}/>
                <Route path="films/top" element={<MovieList type="top_rated" title="Top Rated" />}/>
                <Route path="films/upcoming" element={<MovieList type="upcoming" title="Upcoming" />}/>
                <Route path="film/:id" element={<MovieDetail/>}/>
                <Route path="search" element={<MovieSearch/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </main>
    );
};