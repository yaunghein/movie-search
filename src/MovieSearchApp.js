import React, { useState, useRef } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./Header";
import SearchForm from "./SearchForm";
import PaginationBar from "./PaginationBar";
import MovieCards from "./MovieCards";
import WatchMovieTemplate from "./WatchMovieTemplate";

const MovieSearchApp = () => {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const page = useRef(1);
    const [totalPage, setTotalPage] = useState(0);
    const [totalResult, setTotalResult] = useState("");

    const handleQuery = (e) => {
        const { value } = e.target;
        setQuery(value);
    };

    const getURL = (page) => {
        return `https://api.themoviedb.org/3/search/movie?api_key=d95d62ce28024ff8fe4aa50b17187493&language=en-US&query=${query}&page=${page}&include_adult=true`;
    };

    const fetchData = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.results);
            return data;
        } catch (err) {
            console.error(err);
        }
    };

    const searchMovies = async (e) => {
        e.preventDefault();
        const data = await fetchData(getURL(1));
        setTotalPage(data.total_pages);
        setTotalResult(data.total_results);
    };

    const handlePagination = (button) => {
        if (button === "next") {
            if (page.current !== totalPage) {
                page.current += 1;
            }
        } else {
            if (page.current !== 1) {
                page.current -= 1;
            }
        }
        fetchData(getURL(page.current));
    };

    return (
        <div className="container">
            <Header />

            <Switch>
                <Route exact path="/">
                    <SearchForm searchMovies={searchMovies} value={query} handleQuery={handleQuery} />
                    <PaginationBar
                        movies={movies}
                        totalResult={totalResult}
                        handlePagination={handlePagination}
                        currentPage={page.current}
                        totalPage={totalPage}
                    />
                    <MovieCards movies={movies} />
                </Route>
                <Route path="/movie/:movieId">
                    <WatchMovieTemplate movies={movies} />
                </Route>
            </Switch>
        </div>
    );
};

export default MovieSearchApp;
