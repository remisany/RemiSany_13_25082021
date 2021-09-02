import { useSelector, useDispatch } from "react-redux"
import styled from "styled-components"
import {Link } from "react-router-dom"

//Assets
import logo from "../assets/argentBankLogo.png"

//Features
import { loginReset } from '../features/LogIn'
import { profileReset } from '../features/Profile'
import { signinReset } from '../features/SignIn'

//Selectors
import { selectFirstname } from "../utils/selectors"

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

const NAV_LOGO = styled(Link)`
    display: flex;
    align-items: center;
`

const LOGO = styled.img`
    max-width: 100%;
    width: 200px;
`

const NAV_ITEM = styled(Link)`
    text-decoration: none;
    margin-right: 0.5rem;

    :hover {
        text-decoration: underline; 
    }
`

function Header () {
    const dispatch = useDispatch()
    const firstname = useSelector(selectFirstname)

    return (
        <MAIN_NAV>
            <NAV_LOGO to = "/">
                <LOGO src = {logo} alt = "Argent Bank Logo"/>
            </NAV_LOGO>
            {firstname === "" ?
                <div>
                    <NAV_ITEM to = "/login">
                        <i className = "fa fa-user-circle"></i>
                        Sign In
                    </NAV_ITEM>
                </div>
            :
                <div>
                    <NAV_ITEM to = "/profile">
                        <i className = "fa fa-user-circle"></i>
                        {firstname}
                    </NAV_ITEM>
                    <NAV_ITEM
                        to = "/"
                        onClick = {() => {
                                dispatch(loginReset())
                                dispatch(profileReset())
                                dispatch(signinReset())
                            }
                        }>
                        <i className ="fas fa-sign-out-alt"></i>
                        Sign Out
                    </NAV_ITEM>
                </div>
            }
        </MAIN_NAV>
    )
}

export default Header