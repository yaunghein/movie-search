import React, { useContext } from "react";
import { Context } from "../Context";

const SearchForm = () => {
    const { query, handleQuery, searchMovies } = useContext(Context);

    return (
        <form className="form" onSubmit={(e) => searchMovies(e, query)}>
            <label className="label" htmlFor="query">
                Movie Name
            </label>
            <input
                className="input"
                type="text"
                name="query"
                value={query}
                placeholder="i.e. Spider Man"
                autoComplete="off"
                onChange={handleQuery}
            />
            <button className="button search-btn" disabled={query ? false : true}>
                Search
            </button>
        </form>
    );
};

export default SearchForm;
