import React from "react";
import MovieList from "./components/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
    return (
        <div>
            <h1>Movie Search App</h1>
            <MovieList />
        </div>
    );
};

export default App;
