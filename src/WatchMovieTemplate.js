import React from "react";
import { useParams } from "react-router-dom";

const WatchMovieTemplate = (props) => {
    const { movieId } = useParams();
    const movies = props.movies;
    const thisMovie = movies.find((movie) => movie.id === Number(movieId));

    return (
        <div>
            <h1>Movie Id: {thisMovie.id}</h1>
            <h1>{thisMovie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/w500/${thisMovie.poster_path}`} alt={thisMovie.title + " poster"} />
        </div>
    );
};

export default WatchMovieTemplate;
