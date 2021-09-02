import { Fragment } from "react"
import { useDispatch } from 'react-redux'
import styled from "styled-components"

//Features
import { identifiers, remember } from '../features/SignIn'

const WRAPPER = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 1rem;

    label {
        font-weight: bold;
    }

    input {
        padding: 5px;
        font-size: 1.2rem;
    }
`

const REMEMBER = styled.div`
    display: flex;

    label {
        margin-left: 0.25rem;
    }
`

function Input ({ type, id }) {
    const label = (id[0].toUpperCase() + id.slice(1)).replace("-", " ")

    const dispatch = useDispatch()

    return (
        <Fragment>
            {type !== "checkbox" ?
                <WRAPPER>
                    <label>{label}</label>
                    <input type = {type} id = {id} onChange={(e) => dispatch(identifiers(e, type))}/>
                </WRAPPER>
            :
                <REMEMBER>
                    <input type = {type} id = {id} onChange={() => dispatch(remember())}/>
                    <label>{label}</label>
                </REMEMBER>
            }
        </Fragment>
    )
}

export default Input