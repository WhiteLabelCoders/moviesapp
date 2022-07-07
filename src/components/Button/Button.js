import styled from 'styled-components';

const Button = styled.button`
    padding: 10px 15px;
    min-width: 50px;
    background-color: var(--red);
    color: var(--white);
    border-radius: 5px;
    text-transform: uppercase;
    font-weight: 700;
    display: inline-block;
    border: none;
    font-size: 0.8rem;
    transition: opacity 0.3s ease;
    line-height: 1.1;
    cursor: pointer;

     @media (max-width: 768px) {
        font-size: 0.6rem;
    }

    &:disabled {
        background-color: #c4c4c4;
        pointer-events: none;
    }

    &:hover {
        opacity: 0.8;
    }
`

export { Button }