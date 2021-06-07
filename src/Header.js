import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="container nav-container">
                <Link to="/">
                    <h1 className="title">
                        <span>M</span>Search
                    </h1>
                </Link>
                <Link to="/" className="button nav-link">
                    Favorites
                </Link>
            </div>
        </header>
    );
};

export default Header;
