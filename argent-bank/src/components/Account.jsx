//Styled components
import styled from "styled-components"

const CONTAINER = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    background-color: #fff;
    width: 80%;
    margin: 0 auto;
    flex-direction: column;
    padding: 1.5rem;
    box-sizing: border-box;
    text-align: left;
    margin-bottom: 2rem;

    @media (min-width: 720px) {
        flex-direction: row;
    }
`

const WRAPPER = styled.div`
    width: 100%;
    flex: 1;
`

const TITLE = styled.h3`
    margin: 0;
    padding: 0;
    font-size: 1rem;
    font-weight: normal;
`

const AMOUNT = styled.p`
    margin: 0;
    font-size: 2.5rem;
    font-weight: bold;
`

const DESCRIPTION = styled.p`
    margin: 0;
`

const CTA = styled.div`
    @media (min-width: 720px) {
        flex: 0;
    }
`

const BUTTON = styled.button`
    display: block;
    width: 100%;
    padding: 8px;
    font-size: 1.1rem;
    font-weight: bold;
    margin-top: 1rem;
    border-color: #00bc77;
    background-color: #00bc77;
    color: #fff;

    @media (min-width: 720px) {
        width: 200px;
    }
`

function Welcome ({ title, amount, description }) {
    return (
        <CONTAINER>
            <WRAPPER>
                <TITLE>{ title }</TITLE>
                <AMOUNT>{ amount }</AMOUNT>
                <DESCRIPTION>{ description }</DESCRIPTION>
            </WRAPPER>
            <CTA>
                <BUTTON>View transactions</BUTTON>
            </CTA>
        </CONTAINER>
    )
}

export default Welcome