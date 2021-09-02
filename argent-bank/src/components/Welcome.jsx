import { Fragment, useState } from "react"
import { useStore, useSelector } from "react-redux"
import styled from "styled-components"
import axios from "axios"

//Components
import InputEdit from "./InputEdit"

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

const EDIT = styled.div`
    color: #fff;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const FORM = styled.form`
    display: flex;
    column-gap: 10px
`

const CONTAINER_BUTTON = styled.div`
    display: flex;
    column-gap: 10px
`

const EDIT_BUTTON = styled.button`
    border-color: #00bc77;
    background-color: #00bc77;
    color: #fff;
    font-weight: bold;
    padding: 10px;
    width: 100px;
`

function Welcome () {
    const store = useStore()
    const [edit, setEdit] = useState(false)
    const firstname = useSelector(selectFirstname)
    const lastname = useSelector(selectLastname)

    const handleChange = () => {
        const { token } = store.getState().logIn
        const authorization = { Authorization: `Bearer ${token}` }
        const data = {
            firstName: firstname,
            lastName: lastname
        }

        axios
            .put("http://localhost:3001/api/v1/user/profile", data, { headers: authorization })
    }

    return (
        <Fragment>
            {!edit ?
                <HEADER>
                    <h1>Welcome back<br />{firstname} {lastname}!</h1>
                    <BUTTON onClick={() => setEdit(true)}>Edit Name</BUTTON>
                </HEADER>
            :
                <EDIT>
                    <h1>Welcome back</h1>
                    <FORM>
                        <InputEdit
                            type = "text"
                            id = "firstname"
                            placeholder = {firstname}
                        />
                        <InputEdit
                            type = "text"
                            id = "lastname"
                            placeholder = {lastname}
                        />
                    </FORM>
                    <CONTAINER_BUTTON>
                        <EDIT_BUTTON
                            onClick = {() => {
                                setEdit(false)
                                handleChange()
                            }    
                        }>
                            Save
                        </EDIT_BUTTON>
                        <EDIT_BUTTON onClick = {() => setEdit(false)}>Cancel</EDIT_BUTTON>
                    </CONTAINER_BUTTON>
                </EDIT>
            }
        </Fragment>
    )
}

export default Welcome