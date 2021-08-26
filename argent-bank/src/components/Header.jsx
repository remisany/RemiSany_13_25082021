//React
import { Component } from "react"

//Styled components
import styled from "styled-components"

//Assets
import logo from "../assets/argentBankLogo.png"

const MAIN_NAV = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;

    a {
        font-weight: bold;
        color: #2c3e50;
    }

    a.router-link-exact-active {
        color: #42b983;
    }
`

const NAV_LOGO = styled.a`
    display: flex;
    align-items: center;
`

const LOGO = styled.img`
    max-width: 100%;
    width: 200px;
`

const NAV_ITEM = styled.a`
    text-decoration: none;
    margin-right: 0.5rem;

    :hover {
        text-decoration: underline; 
    }
`

class Header extends Component {
    render () {
        return (
            <MAIN_NAV>
                <NAV_LOGO href = "/">
                    <LOGO src = {logo} alt = "Argent Bank Logo"/>
                </NAV_LOGO>
                <div>
                    <NAV_ITEM href = "/sign-in">
                        <i className = "fa fa-user-circle"></i>
                        Sign In
                    </NAV_ITEM>
                </div>
            </MAIN_NAV>
        )
    }
}

export default Header