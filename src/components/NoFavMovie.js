import React from "react";
import trollFace from "../assets/troll-face.png";
import { Link } from "react-router-dom";

function NoFavMovie() {
    return (
        <div className="no-fav-container">
            <img className="no-fav-image" alt="troll-face" src={trollFace} />
            <p className="no-fav-text">Seems you don't have any favorite movie yet.</p>
            <Link to="/" className="button no-fav-btn">
                Go & Find Some Movies
            </Link>
        </div>
    );
}

export default NoFavMovie;
