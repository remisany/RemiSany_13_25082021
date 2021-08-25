//Styled components
import styled from "styled-components"

//Assets
import hero from "../assets/bank-tree.jpeg"

const HERO = styled.div`
    background-image: url(${hero});
    background-position: 0 -50px;
    background-size: cover;
    background-repeat: no-repeat;
    height: 300px;
    position: relative;

    @media (min-width: 920px) {
        height: 400px;
        background-position: 0% 33%;
    } 
`

const HERO_CONTENT = styled.section`
    position: relative;
    top: 2rem;
    width: 200px;
    background: white;
    padding: 2rem;
    text-align: left;
    margin: 0 auto;

    @media (min-width: 920px) {
        position: absolute;
        top: 50px;
        right: 50px;
        width: 300px;
        margin: 2rem;
    } 
`

const SUBTITLE = styled.p`
    font-weight: bold;
    font-size: 1rem;
    margin: 0;

    @media (min-width: 920px) {
        font-size: 1.5rem;
    }
`

const TEXT = styled.p`
    margin-bottom: 0;
    font-size: 0.9rem;

    @media (min-width: 920px) {
        font-size: 1.2rem;
    }
`

function Hero () {
    return (
        <HERO>
            <HERO_CONTENT>
                <SUBTITLE>No fees.</SUBTITLE>
                <SUBTITLE>No minimum deposit.</SUBTITLE>
                <SUBTITLE>High interest rates.</SUBTITLE>
                <TEXT>Open a savings account with Argent Bank today!</TEXT>
            </HERO_CONTENT>
        </HERO>
    )
}

export default Hero