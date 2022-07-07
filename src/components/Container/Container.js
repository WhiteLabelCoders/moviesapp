import styled from 'styled-components'

const Container = styled.div`
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;


    @media (min-width: 768px) {
        width: 750px;
    }

    @media (min-width: 992px) {
        width: 970px;
    }

    @media (min-width: 1200px) {
        width: 1170px;
    }
`

export { Container };