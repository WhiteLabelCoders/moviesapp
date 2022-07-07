import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
    mymovieslist: localStorage.getItem("mymovieslist")
        ? JSON.parse(localStorage.getItem("mymovieslist"))
        : [],
    watchedmovies: localStorage.getItem("watchedmovies")
        ? JSON.parse(localStorage.getItem("watchedmovies"))
        : [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem("mymovieslist", JSON.stringify(state.mymovieslist));
        localStorage.setItem("watchedmovies", JSON.stringify(state.watchedmovies));
    }, [state]);

    // actions
    const addMovieToWatchlist = (movie) => {
        dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
    };

    const removeMovieFromWatchlist = (id) => {
        dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
    };

    const addMovieToWatched = (movie) => {
        dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
    };

    const moveToWatchlist = (movie) => {
        dispatch({ type: "MOVE_TO_WATCHLIST", payload: movie });
    };

    const removeFromWatched = (id) => {
        dispatch({ type: "REMOVE_FROM_WATCHED", payload: id });
    };

    return (
        <GlobalContext.Provider
            value={{
                mymovieslist: state.mymovieslist,
                watchedmovies: state.watchedmovies,
                addMovieToWatchlist,
                removeMovieFromWatchlist,
                addMovieToWatched,
                moveToWatchlist,
                removeFromWatched,
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    );
};