import styled from 'styled-components';
import { Container } from '../Container/Container';
import { Link } from 'react-router-dom';

const AppHeader = styled.header`
    background-color: var(--red);
`

const HeaderWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;

    @media screen and (max-width: 992px) {
        flex-direction: column;
    }
`

const AppLogo = styled.div`
    a {
        font-size: 24px;
        font-weight: 700;
        color: var(--white);
        text-decoration: none;
    }
`

const AppNav = styled.ul`
    display:flex;
    list-style: none;
    padding-left:0;

    @media screen and (max-width: 992px) {
        margin-top: 2rem;
        flex-direction: column;
    }

    li {
        margin: 0 15px;

        @media screen and (max-width: 992px) {
            margin-bottom: 2rem;
            text-align: center;
        }

        a {
            color: var(--white);
            font-size: 1.25rem;
            text-decoration: none;
            transition: color 0.3s ease;


            &:hover {
                color: var(--black);
            }
        }
    }
`

function Header() {
    return (
        <AppHeader>
            <Container>
                <HeaderWrapper>
                    <AppLogo>
                        <Link to="/">MoviesList</Link>
                    </AppLogo>
                    <AppNav>
                        <li>
                            <Link to="/">Movies List</Link>
                        </li>

                        <li>
                            <Link to="/watchedmovies">Watched Movies</Link>
                        </li>

                        <li>
                            <Link to="/add" className="btn btn-main">
                                + Add Movie
                            </Link>
                        </li>
                    </AppNav>
                </HeaderWrapper>
            </Container>
        </AppHeader>
    )
}

export default Header;