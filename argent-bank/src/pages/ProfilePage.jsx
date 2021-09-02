import { Fragment, useEffect, useState } from "react"
import { Redirect } from "react-router-dom"
import { useStore, useDispatch } from "react-redux"
import styled from "styled-components"
import axios from "axios"

//Components
import Welcome from "../components/Welcome"
import Account from "../components/Account"

//Datas
import { accountDatas } from "../datas/AccountDatas";

//Features
import { recovery } from "../features/Profile";

const MAIN = styled.main`
    flex: 1;
    background-color: #12002b;
`

function ProfilePage () {
    const store = useStore()
    const dispatch = useDispatch()
    const [verified, setVerified] = useState(true)

    useEffect(() => {
        const { token } = store.getState().logIn
        const authorization = { Authorization: `Bearer ${token}` }

        axios
            .post("http://localhost:3001/api/v1/user/profile", {}, { headers: authorization })
            .then((response) => {
                dispatch(recovery(response.data.body))
            })
            .catch(()=> setVerified(false))
    })

    return (
        <Fragment>
            {!verified && <Redirect to = "/login" />}
            <MAIN>
                <Welcome />
                {accountDatas.map((data, index) => (
                    <Account
                        key = { index }
                        title = {data.title}
                        amount = {data.amount}
                        description = {data.description}
                    />
                ))}
            </MAIN>
        </Fragment>
    )
}

export default ProfilePage