import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MoviesList from "./components/MoviesLists";
import WatchedMovies from "./components/WatchedMovies";
import Add from './components/Add';
import "./App.css";

import { GlobalProvider } from "./context/GlobalState";


function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<MoviesList title="Movies List" />} />
          <Route path="/watchedmovies" element={<WatchedMovies title="Watched Movies" />} />
          <Route path="/add" element={<Add title="Add Movie" />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
