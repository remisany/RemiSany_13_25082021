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

function SignInPage () {
    return (
        <MAIN>
            <CONTENT>
                <i className = "fa fa-user-circle"></i>
                <h1>Sign In</h1>
                <Form />
            </CONTENT>
        </MAIN>
    )
}

export default SignInPage