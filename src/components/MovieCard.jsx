import React from 'react'

const MovieCard = ({ movie }) => (
    <div className="col-md-4 col-lg-3 mb-4">
        <div className="card h-100">
            <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                className="card-img-top"
            />
            <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.overview.slice(0, 100)}...</p>
            </div>
        </div>
    </div>
);

export default MovieCard