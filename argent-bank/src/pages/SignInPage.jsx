//React
import { Component } from "react"

//Components
import Form from "../components/Form"

//Styled components
import styled from "styled-components"

const MAIN = styled.main`
    flex: 1;
    background-color: #12002b;
`

const CONTENT = styled.section`
    box-sizing: border-box;
    background-color: white;
    width: 300px;
    margin: 0 auto;
    margin-top: 3rem;
    padding: 2rem;
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
`

class SignInPage extends Component {
    render () {
        return (
            <MAIN>
                <CONTENT>
                    <i className = "fa fa-user-circle"></i>
                    <h1>Sign In</h1>
                    <Form />
                    <BUTTON>Sign In</BUTTON>
                </CONTENT>
            </MAIN>
        )
    }
}

export default SignInPage