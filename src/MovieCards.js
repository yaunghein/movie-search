import React, { useState } from "react";
import MoviePopupCard from "./MoviePopupCard";

const MovieCards = (props) => {
    const [clickMovie, setClickMovie] = useState({});
    const [isClicked, setIsClicked] = useState(false);

    const { movies } = props;
    const filterMovies = movies.filter((movie) => movie.poster_path);
    const movieCards = filterMovies.map((movie) => (
        <div key={movie.id} className="card" onClick={() => handleClick(movie)}>
            <div className="card-img-container">
                <img
                    className="card--image"
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title + " poster"}
                />
                <p className="card--rating">
                    <svg width="200" height="77" viewBox="0 0 200 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0.627197H132.544L18.9349 36.1302L0 76.3668V0.627197Z" fill="#BE000A" />
                        <path
                            d="M0 0.627197H200L22.4852 44.4142L0 76.3668V0.627197Z"
                            fill="#BE000A"
                            fillOpacity="0.5"
                        />
                    </svg>

                    <small>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M6.6194 1.1708C6.73914 0.802278 7.26051 0.802279 7.38025 1.1708L8.70613 5.25145C8.75968 5.41626 8.91326 5.52785 9.08656 5.52785H13.3772C13.7647 5.52785 13.9258 6.02369 13.6123 6.25145L10.1411 8.77343C10.0009 8.87529 9.94225 9.05584 9.9958 9.22065L11.3217 13.3013C11.4414 13.6698 11.0196 13.9763 10.7061 13.7485L7.23494 11.2265C7.09475 11.1247 6.90491 11.1247 6.76471 11.2265L3.2935 13.7485C2.98002 13.9763 2.55823 13.6698 2.67797 13.3013L4.00385 9.22065C4.0574 9.05584 3.99874 8.87529 3.85854 8.77343L0.387332 6.25145C0.0738465 6.02369 0.234958 5.52785 0.622447 5.52785H4.9131C5.08639 5.52785 5.23997 5.41626 5.29352 5.25145L6.6194 1.1708Z"
                                fill="white"
                            />
                        </svg>

                        {movie.vote_average}
                    </small>
                </p>
            </div>

            <div className="card--content">
                <h3 className="card--title">{movie.original_title}</h3>
                <p>RELEASE DATE: {movie.release_date}</p>
            </div>
        </div>
    ));

    function handleClick(movie) {
        setClickMovie(movie);
        setIsClicked(true);
    }

    function handleCancel() {
        setIsClicked(false);
    }
    document.body.style.overflow = isClicked ? "hidden" : "unset";
    return (
        <div>
            {isClicked ? <MoviePopupCard movie={clickMovie} handleCancle={handleCancel} /> : ""}
            <div className="card-list">{movieCards}</div>
        </div>
    );
};

export default MovieCards;
