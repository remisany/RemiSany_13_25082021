//Styled components
import styled from "styled-components"

const HEADER = styled.div`
    color: #fff;
    margin-bottom: 2rem;
`

const BUTTON = styled.button`
    border-color: #00bc77;
    background-color: #00bc77;
    color: #fff;
    font-weight: bold;
    padding: 10px;
`

function Welcome () {
    return (
        <HEADER>
            <h1>Welcome back</h1>
            <BUTTON>Edit Name</BUTTON>
        </HEADER>
    )
}

export default Welcome