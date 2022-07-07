import { useState } from "react";
import styled from 'styled-components';
import { Container } from "../Container/Container";
import ResultElement from "../ResultElement";

const AddPage = styled.section`
    margin-top: 1rem;
`

const Results = styled.ul`
    padding: 0;
    margin: 0;
    margin-top: 2rem;
    list-style: none;
`

const AddContent = styled.div`
    padding: 5rem 0;
    max-width: 55rem;
    margin: 0 auto;
`

const InputWrap = styled.div`
    input {
        width: 100%;
        background-color: var(--red);
        padding: 10px;
        border-radius:0.5rem;
        border: none;
        color: var(--white);
        font-size: 1.25rem;

        ::placeholder {
            color: var(--light-white);
        }
    }
`

function Add() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const onType = (e) => {
        e.preventDefault();

        setQuery(e.target.value);

        fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
        )
            .then((res) => res.json())
            .then((data) => {
                if (!data.errors) {
                    setResults(data.results);
                } else {
                    setResults([]);
                }
            });
    }

    return (
        <AddPage>
            <Container>
                <AddContent>
                    <InputWrap>
                        <input
                            type="text"
                            placeholder="Search for a movie"
                            value={query}
                            onChange={onType}
                        />
                    </InputWrap>

                    {results.length > 0 && (
                        <Results>
                            {results.map((movie) => (
                                <li key={movie.id}>
                                    <ResultElement movie={movie} />
                                </li>
                            ))}
                        </Results>
                    )}

                </AddContent>
            </Container>
        </AddPage>
    )
}

export default Add;