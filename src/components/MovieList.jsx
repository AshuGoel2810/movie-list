import React, { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../redux/action";
import Pagination from "./Pagination";
import MovieCard from "./MovieCard";

const MovieList = () => {
    const dispatch = useDispatch();
    const { movies, loading, error } = useSelector((state) => state.movies);
    const [query, setQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const memoizedMovies = useMemo(() => movies || [], [movies]);

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            dispatch(fetchMovies(query, currentPage));
        }, 500);

        return () => clearTimeout(delayDebounce);
    }, [dispatch, query, currentPage]);

    return (
        <div className="container mt-4">
            <input
                type="text"
                className="form-control mb-3"
                placeholder="Search movies..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            {loading && (
                <div className="text-center mt-4">
                    <div className="spinner-border" role="status"></div>
                </div>
            )}

            {error && <p className="text-danger text-center mt-3">Error: {error}</p>}

            {!loading && !error && memoizedMovies.length === 0 && (
                <p className="text-center mt-3">No movies found</p>
            )}

            <div className="row">
                {memoizedMovies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>

            <Pagination query={query} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    );
};

export default MovieList;
