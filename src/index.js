import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import MovieSearchApp from "./MovieSearchApp";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <MovieSearchApp />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);
