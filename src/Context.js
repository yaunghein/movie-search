import React, { useState, useRef } from "react";
const Context = React.createContext();

function ContextProvider({ children }) {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [totalPage, setTotalPage] = useState(0);
    const [totalResult, setTotalResult] = useState("");

    const handleQuery = (e) => {
        const { value } = e.target;
        setQuery(value);
    };

    function getURL(searchQuery, page) {
        return `https://api.themoviedb.org/3/search/movie?api_key=d95d62ce28024ff8fe4aa50b17187493&language=en-US&query=${searchQuery}&page=${page}&include_adult=true`;
    }

    async function fetchData(url) {
        try {
            const res = await fetch(url);
            const data = await res.json();
            //add favorite property to movie object
            const updatedMovies = data.results.map((movie) => ({ ...movie, isFavorite: false }));
            setMovies(updatedMovies);
            return data;
        } catch (err) {
            console.error(err);
        }
    }

    async function searchMovies(e, searchQuery) {
        e.preventDefault();
        const data = await fetchData(getURL(searchQuery, 1));
        setTotalPage(data.total_pages);
        setTotalResult(data.total_results);
    }

    const page = useRef(1);
    const handlePagination = (button) => {
        if (button === "next") {
            if (page.current !== totalPage) {
                page.current += 1;
            }
        } else {
            if (page.current !== 1) {
                page.current -= 1;
            }
        }
        fetchData(getURL(query, page.current));
    };

    const [favMovies, setFavMovies] = useState([])
    function toggleFavorite(id) {
        const updatedMovies = movies.map(movie => {
            if(movie.id === id) {
                const favMovie = { ...movie,isFavorite: !movie.isFavorite }
                setFavMovies(prevFavMovie => ([...prevFavMovie, favMovie]))
                return favMovie
            }
            return movie
        })
        setMovies(updatedMovies)
    }

    function removeFromFavorite(movieObj) {
        toggleFavorite(movieObj.id)
        setFavMovies(prevFavMovie => prevFavMovie.filter(movie => movie.id !== movieObj.id))
    }

    return (
        <Context.Provider
            value={{
                query,
                handleQuery,
                getURL,
                fetchData,
                movies,
                searchMovies,
                totalPage,
                totalResult,
                page,
                handlePagination,
                toggleFavorite,
                favMovies,
                removeFromFavorite
            }}
        >
            {children}
        </Context.Provider>
    );
}

export { ContextProvider, Context };
