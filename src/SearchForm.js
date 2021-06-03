import React from "react";

const SearchForm = (props) => {
    return (
        <form className="form" onSubmit={props.searchMovies}>
            <label className="label" htmlFor="query">
                Movie Name
            </label>
            <input
                className="input"
                type="text"
                name="query"
                value={props.value}
                placeholder="i.e. Spider Man"
                autoComplete="off"
                onChange={props.handleQuery}
            />
            <button className="button" disabled={props.value ? false : true}>
                Search
            </button>
        </form>
    );
};

export default SearchForm;
