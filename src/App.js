import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchForm from "./components/SearchForm";
import PaginationBar from "./components/PaginationBar";
import MovieCards from "./pages/MovieCards";
import WatchMovieTemplate from "./pages/WatchMovieTemplate";
import FavoriteMovies from "./pages/FavoriteMovies";
import ScrollToTop from "./utility/scrollToTop";
import { Context } from "./Context";

const App = () => {
    const { movies } = useContext(Context);
    return (
        <div className="main-container">
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
            <Footer />
        </div>
    );
};

export default App;
