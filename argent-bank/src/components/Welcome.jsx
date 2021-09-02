import { useSelector } from "react-redux"
import styled from "styled-components"

//Selectors
import { selectFirstname, selectLastname } from "../utils/selectors"

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
    const firstname = useSelector(selectFirstname)
    const lastname = useSelector(selectLastname)

    return (
        <HEADER>
            <h1>Welcome back<br />{firstname} {lastname}!</h1>
            <BUTTON>Edit Name</BUTTON>
        </HEADER>
    )
}

export default Welcome