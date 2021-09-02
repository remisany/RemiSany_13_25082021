import { Fragment, useState } from "react"
import { Redirect } from "react-router-dom"
import { useStore, useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import axios from "axios"

//Components
import InputSignin from "./InputSignin"

//Features
import { valid } from '../features/LogIn'

//Selectors
import { selectToken, selectEmail, selectPassword } from "../utils/selectors"

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

const SPAN = styled.span`
    display: block;
    font-size: 12px;
    padding-top: 10px;
    color: #f00;
`

function Form () {
    const store = useStore()
    const dispatch = useDispatch()
    const token = useSelector(selectToken)
    const email = useSelector(selectEmail)
    const password = useSelector(selectPassword)
    const [errorMessage, setErrorMessage] = useState("")
    
    const login = (e) => {
        e.preventDefault()

        const user = store.getState().signIn

        return axios
        .post("http://localhost:3001/api/v1/user/login", user)
        .then((response) => {
            if (response.data.body.token) {
                dispatch(valid(response.data.body.token))
            }
        })
        .catch((e) => {
            setErrorMessage(e.response.data.message)
        })
    }

    return (
        <Fragment>
            {token !=="" && <Redirect to = "/profile" />}

            <form onSubmit = {(e) => login(e)}>
                <InputSignin
                    type = "text"
                    id = "username"
                    value = {email}
                />
                <InputSignin
                    type = "password"
                    id = "password"
                    value = {password}
                />
                <InputSignin
                    type = "checkbox"
                    id = "remember-me"
                />
                <BUTTON>Sign In</BUTTON>
                {token === "" && <SPAN>{errorMessage}</SPAN>}
            </form>
        </Fragment>
    )
}

export default Form