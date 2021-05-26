import React, { useState } from "react";
import MovieCard from "./MovieCard";

const SearchMovies = () => {
    //defining initial states
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);

    //changing query state
    const handleQuery = (e) => {
        const { value } = e.target;
        setQuery(value);
    };

    const searchMovies = async (e) => {
        //prevent default behavior of form (refresh)
        e.preventDefault();

        //making API request
        const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=d95d62ce28024ff8fe4aa50b17187493&language=en-US&query=${query}&page=1&include_adult=true`;
        try {
            const res = await fetch(apiUrl);
            const data = await res.json();
            setMovies(data.results);
            console.log(data);
            console.log(data.results);
            setTimeout(() => {
                console.log(movies);
            }, 2000);
        } catch (err) {
            console.error(err);
        }
    };

    //filter movies only that contain poster
    const filterMovies = movies.filter((movie) => movie.poster_path);
    //mapping and generating movie cards
    const movieCards = filterMovies.map((movie) => <MovieCard key={movie.id} data={movie} />);

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
                    placeholder="i.e. Jurassic Park"
                    autoComplete="off"
                    onChange={handleQuery}
                />
                <button className="button">Search</button>
            </form>
            <div className="card-list">{movieCards}</div>
        </div>
    );
};

export default SearchMovies;
