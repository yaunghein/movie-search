import React, { useState } from "react";
import MovieCard from "./MovieCard";

const SearchMovies = () => {
    //defining initial states
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [totalResult, setTotalResult] = useState("");

    const handleQuery = (e) => {
        const { value } = e.target;
        setQuery(value);
    };
    const searchMovies = async (e) => {
        e.preventDefault();
        const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=d95d62ce28024ff8fe4aa50b17187493&language=en-US&query=${query}&page=1&include_adult=true`;
        try {
            const res = await fetch(apiUrl);
            const data = await res.json();
            setMovies(data.results);
            setPage(data.page);
            setTotalPage(data.total_pages);
            setTotalResult(data.total_results);
            console.log(data);
        } catch (err) {
            console.error(err);
        }
    };

    const handleNextPage = async () => {
        const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=d95d62ce28024ff8fe4aa50b17187493&language=en-US&query=${query}&page=${
            page + 1
        }&include_adult=true`;
        try {
            const res = await fetch(apiUrl);
            const data = await res.json();
            setMovies(data.results);
            setPage(page + 1);
        } catch (err) {
            console.error(err);
        }
    };

    const handlePrevPage = async () => {
        const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=d95d62ce28024ff8fe4aa50b17187493&language=en-US&query=${query}&page=${
            page - 1
        }&include_adult=true`;
        try {
            const res = await fetch(apiUrl);
            const data = await res.json();
            setMovies(data.results);
            setPage(page - 1);
        } catch (err) {
            console.error(err);
        }
    };

    //filter movies only that contain poster
    const filterMovies = movies.filter((movie) => movie.poster_path);
    //mapping and generating movie cards
    const movieCards = filterMovies.map((movie) => (
        /*
            This is where I face problem.

            What I expect: when click on one of movie cards, console log out target movie card, so that I can get it's id.
                           Then, I will pull out the movie info from movies state with that id.
                           <div class="card"></div>

            What now happen: when click on movie cards, it console log out the specific element of that movie card.
        */
        <MovieCard key={movie.id} data={movie} handleCardClick={(e) => console.log(e.target)} />
    ));
    return (
        <div>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query">
                    Movie Name
                </label>
                <input
                    className="input"
                    type="text"
                    name="query"
                    value={query}
                    placeholder="i.e. Jurassic Park"
                    autoComplete="off"
                    onChange={handleQuery}
                />
                <button className="button">Search</button>
            </form>
            <div className="nav" style={{ display: movies.length ? "flex" : "none" }}>
                <p className="total-result">Results: {totalResult} movies found.</p>
                <div className="pagination-wrap">
                    <button className="page-btn" onClick={handlePrevPage} disabled={page === 1 ? true : false}>
                        Prev
                    </button>
                    <p>
                        <span className="page-count">{page}</span> / {totalPage}
                    </p>
                    <button className="page-btn" onClick={handleNextPage} disabled={page === totalPage ? true : false}>
                        Next
                    </button>
                </div>
            </div>
            <div className="card-list">{movieCards}</div>
        </div>
    );
};

export default SearchMovies;
