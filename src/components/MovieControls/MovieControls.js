import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import styled from 'styled-components';

const Controls = styled.div`
    margin-top: 1rem;
`

const ControlBtn = styled.button`
    color: #fefefe;
    background-color: var(--red);
    border: none;
    transition: all 0.3s ease;
    font-size: 1.25rem;
    padding: 1rem;
    margin: 0;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
`


function MovieControls({ type, movie }) {
    const {
        removeMovieFromWatchlist,
        addMovieToWatched,
        moveToWatchlist,
        removeFromWatched,
    } = useContext(GlobalContext);

    return (
        <Controls>
            {type === "mymovieslist" && (
                <>
                    <ControlBtn onClick={() => addMovieToWatched(movie)}>
                        Add to watched
                    </ControlBtn>
                    <ControlBtn onClick={() => removeMovieFromWatchlist(movie)}>
                        Remove from watchlist
                    </ControlBtn>
                </>
            )}
            {type === "watchedmovies" && (
                <>
                    <ControlBtn onClick={() => moveToWatchlist(movie)}>
                        Move to watch list
                    </ControlBtn>
                    <ControlBtn onClick={() => removeFromWatched(movie.id)}>
                        Remove from watched
                    </ControlBtn>
                </>
            )}
        </Controls>
    )
}

export default MovieControls;