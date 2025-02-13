import React from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/action";

const Pagination = ({ query, currentPage, setCurrentPage }) => {
    const dispatch = useDispatch();
    const { totalPages } = useSelector((state) => state.movies);

    const handlePageClick = (data) => {
        const selectedPage = data.selected + 1; 
        setCurrentPage(selectedPage); 
        dispatch(fetchMovies(query, selectedPage)); 
    };
    const maxPages = Math.min(totalPages, 300);

    return (
        <nav className="d-flex justify-content-end mt-4">
            <ReactPaginate
                previousLabel={"«"}
                nextLabel={"»"}
                breakLabel={"..."}
                pageCount={maxPages} 
                forcePage={currentPage - 1} 
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={"pagination pagination-sm"}
                pageClassName={"page-item"} 
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
                disabledClassName={"disabled"}
            />
        </nav>
    );
};

export default Pagination;
