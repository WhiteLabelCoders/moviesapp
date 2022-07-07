import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import styled from 'styled-components';


const ControlBtn = styled.button`
    min-width: 50px;
    color: #fefefe;
    background-color: var(--red);
    border: none;
    transition: all 0.3s ease;
    font-size: 1rem;
    padding: 1rem;
    margin: 0;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    cursor: pointer;
`

const Controls = styled.div`
    margin-top: 1rem;
    display: flex;
    justify-content: center;

    button {
        &:first-child {
            margin-right: 0.5rem;
        }
    }
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
                        Add to Watched
                    </ControlBtn>
                    <ControlBtn onClick={() => removeMovieFromWatchlist(movie.id)}>
                        x
                    </ControlBtn>
                </>
            )}
            {type === "watchedmovies" && (
                <>
                    <ControlBtn onClick={() => moveToWatchlist(movie)}>
                        Move to Movies List
                    </ControlBtn>
                    <ControlBtn onClick={() => removeFromWatched(movie.id)}>
                        x
                    </ControlBtn>
                </>
            )}
        </Controls>
    )
}

export default MovieControls;