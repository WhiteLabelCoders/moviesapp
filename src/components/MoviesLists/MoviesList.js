import { useContext } from 'react';
import styled from 'styled-components';
import { Container } from "../Container/Container";
import { GlobalContext } from "../../context/GlobalState";
import MovieElement from '../MovieElement';
import useDocumentTitle from '../../utils/useDocumentTitle';

const StyledMoviesList = styled.section`
    padding-top: 4rem;
`
const MoviesHeading = styled.h1`
    font-size: 3rem;
    color: var(--red);

    @media screen and (max-width: 600px) {
        font-size: 2rem;
    }
`
const NoMovies = styled.h2`
    font-size: 2.5rem;
    text-align: center;
    color: var(--light-gray);

     @media screen and (max-width: 600px) {
        font-size: 1.5rem;
    }
`

const StyledMoviesListTop = styled.header`
    > div {
        margin: 3rem 0;
    }
`

const MoviesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 3rem;

    @media (min-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 992px) {
        grid-template-columns: repeat(4, 1fr);
    }
`

function MoviesList({ title }) {
    {/* Set page title */ }
    useDocumentTitle(title);
    {/* Get current movies list from context */ }
    const { mymovieslist } = useContext(GlobalContext);

    return (
        <StyledMoviesList>
            <Container>
                <StyledMoviesListTop>
                    <MoviesHeading>My Movies List</MoviesHeading>
                    <div>
                        {mymovieslist.length} {mymovieslist.length === 1 ? "Movie" : "Movies"}
                    </div>
                </StyledMoviesListTop>

                {mymovieslist.length > 0 ? (
                    <MoviesGrid>
                        {mymovieslist.map((movie) => (
                            <MovieElement movie={movie} key={movie.id} type="mymovieslist" />
                        ))}
                    </MoviesGrid>
                ) : (
                    <NoMovies>No movies! Add some!</NoMovies>
                )}
            </Container>
        </StyledMoviesList>
    )
}

export default MoviesList;