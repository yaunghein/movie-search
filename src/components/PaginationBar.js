import React, { useContext } from "react";
import { Context } from "../Context";

const PaginationBar = () => {
    const { movies, totalPage, totalResult, page, handlePagination } = useContext(Context);

    return (
        <div className="nav" style={{ display: movies.length ? "flex" : "none" }}>
            <p className="total-result">Results: {totalResult} movies found.</p>
            <div className="pagination-wrap">
                <button
                    className="page-btn"
                    onClick={() => handlePagination("prev")}
                    disabled={page.current === 1 ? true : false}
                >
                    Prev
                </button>
                <p>
                    <span className="page-count">{page.current}</span> / {totalPage}
                </p>
                <button
                    className="page-btn"
                    onClick={() => handlePagination("next")}
                    disabled={page.current === totalPage ? true : false}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default PaginationBar;
