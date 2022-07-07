import { useContext } from 'react';
import Moment from "react-moment";
import { GlobalContext } from "../../context/GlobalState";
import styled from 'styled-components';
import { Button } from '../Button/Button';

const StyledMovie = styled.div`
    display: flex;
    margin-bottom: 1.5rem;
    border: 1px solid grey;
    border-radius: 0.5rem;
    overflow: hidden;
`

const MovieImage = styled.div`
    img {
        width: 105px;
        height: 143px;
        background-color: #dbdada;
        border-radius: 5px;
        margin-right: 15px;
        display: block;
        color: transparent
    }
`

const MovieControls = styled.div`
    Button {
        margin-right: 1rem;
    }

     @media (max-width: 768px) {
        Button {
            margin-bottom: 1rem;
        }
    }
`

const MovieInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const MovieTitle = styled.h3`
    margin: 0;
    font-size: 1.25rem;
    color: var(--red);
    font-weight: 700;

    @media screen and (max-width: 500px) {
        font-size: 1rem;
    }
`


const MovieDate = styled.h4`
    margin: 0;
    font-size: 1.25rem;
    font-weight: 300;
    color: var(--black);

     @media screen and (max-width: 500px) {
        font-size: 0.8rem;
    }
`


function ResultElement({ movie }) {
    const {
        addMovieToWatchlist,
        addMovieToWatched,
        mymovieslist,
        watchedmovies,
    } = useContext(GlobalContext);

    let storedMovie = mymovieslist.find((o) => o.id === movie.id);
    let storedMovieWatched = watchedmovies.find((o) => o.id === movie.id);

    const watchlistDisabled = storedMovie
        ? true
        : storedMovieWatched
            ? true
            : false;

    const watchedDisabled = storedMovieWatched ? true : false;

    return (
        <StyledMovie>
            <MovieImage>
                {movie.poster_path ? (
                    <img
                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                        alt={`${movie.title} Poster`}
                    />
                ) : (
                    <div className="filler-poster" />
                )}
            </MovieImage>

            <MovieInfo>
                <div className="header">
                    <MovieTitle>{movie.title}</MovieTitle>
                    <MovieDate>
                        <Moment format="YYYY">{movie.release_date}</Moment>
                    </MovieDate>
                </div>

                <MovieControls>
                    <Button
                        disabled={watchlistDisabled}
                        onClick={() => addMovieToWatchlist(movie)}
                    >
                        Add to Movies List
                    </Button>

                    <Button
                        disabled={watchedDisabled}
                        onClick={() => addMovieToWatched(movie)}
                    >
                        Add to Watched
                    </Button>
                </MovieControls>
            </MovieInfo>
        </StyledMovie>
    );
}


export default ResultElement