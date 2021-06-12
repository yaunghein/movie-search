import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";

const Header = () => {
    const { favMovies } = useContext(Context);

    return (
        <header>
            <div className="container nav-container">
                <Link to="/">
                    <h1 className="title">
                        <span>M</span>Search
                    </h1>
                </Link>
                <Link to="/favorites" className="button nav-link">
                    Favorites
                    {favMovies.length > 0 && <span className="fav-movie-count"></span>}
                </Link>
            </div>
        </header>
    );
};

export default Header;
