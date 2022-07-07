import styled from 'styled-components';

import MovieControls from '../MovieControls';

const Movie = styled.div`
    img {
        border-radius: 0.5rem;
        width:100%;
        object-fit: cover;
        object-position: center;
    }
`

function MovieElement({ movie, type }) {
    return (
        <Movie>
            <div className="movie-overlay"></div>
            <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={`${movie.title} Poster`}
            />

            <MovieControls type={type} movie={movie} />
        </Movie>
    )
}

export default MovieElement;