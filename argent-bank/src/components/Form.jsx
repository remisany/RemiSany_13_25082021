//React
import { useDispatch } from 'react-redux'

//Components
import Input from "./Input"

//Styled components
import styled from "styled-components"

//Features
import { handleSubmit } from '../features/SignIn'

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
`

function Form () {
    const dispatch = useDispatch()

    return (
        <form onSubmit = {(e) => dispatch(handleSubmit(e))}>
            <Input
                type = "text"
                id = "username"
            />
            <Input
                type = "password"
                id = "password"
            />
            <Input
                type = "checkbox"
                id = "remember-me"
            />
            <BUTTON>Sign In</BUTTON>
        </form>
    )
}

export default Form