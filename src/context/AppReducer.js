export default (state, action) => {
    switch (action.type) {
        case "ADD_MOVIE_TO_WATCHLIST":
            return {
                ...state,
                mymovieslist: [action.payload, ...state.mymovieslist],
            };
        case "REMOVE_MOVIE_FROM_WATCHLIST":
            return {
                ...state,
                mymovieslist: state.mymovieslist.filter(
                    (movie) => movie.id !== action.payload
                ),
            };
        case "ADD_MOVIE_TO_WATCHED":
            return {
                ...state,
                mymovieslist: state.mymovieslist.filter(
                    (movie) => movie.id !== action.payload.id
                ),
                watchedmovies: [action.payload, ...state.watchedmovies],
            };
        case "MOVE_TO_WATCHLIST":
            return {
                ...state,
                watchedmovies: state.watchedmovies.filter(
                    (movie) => movie.id !== action.payload.id
                ),
                mymovieslist: [action.payload, ...state.mymovieslist],
            };
        case "REMOVE_FROM_WATCHED":
            return {
                ...state,
                watchedmovies: state.watchedmovies.filter(
                    (movie) => movie.id !== action.payload
                ),
            };
        default:
            return state;
    }
};