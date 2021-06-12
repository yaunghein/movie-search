import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import PaginationBar from "./components/PaginationBar";
import MovieCards from "./components/MovieCards";
import WatchMovieTemplate from "./pages/WatchMovieTemplate";
import FavoriteMovies from "./pages/FavoriteMovies";
import ScrollToTop from "./utility/scrollToTop";

const App = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <Switch>
                    <Route exact path="/">
                        <SearchForm />
                        <PaginationBar />
                        <MovieCards />
                    </Route>
                    <Route path="/movie/:movieId">
                        <ScrollToTop>
                            <WatchMovieTemplate />
                        </ScrollToTop>
                    </Route>
                    <Route path="/favorites">
                        <FavoriteMovies />
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

export default App;
