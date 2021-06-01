import React from "react";

const PaginationBar = (props) => {
    const { movies } = props;
    return (
        <div className="nav" style={{ display: movies.length ? "flex" : "none" }}>
            <p className="total-result">Results: {props.totalResult} movies found.</p>
            <div className="pagination-wrap">
                <button
                    className="page-btn"
                    onClick={() => props.handlePagination("prev")}
                    disabled={props.currentPage === 1 ? true : false}
                >
                    Prev
                </button>
                <p>
                    <span className="page-count">{props.currentPage}</span> / {props.totalPage}
                </p>
                <button
                    className="page-btn"
                    onClick={() => props.handlePagination("next")}
                    disabled={props.currentPage === props.totalPage ? true : false}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default PaginationBar;
