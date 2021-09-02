import { Fragment } from "react"
import { useDispatch, useSelector } from 'react-redux'
import styled from "styled-components"

//Features
import { identifiers, remember} from '../features/SignIn'

//Selectors
import { selectChecked } from "../utils/selectors"

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

function InputSignin ({ type, id, value }) {
    const dispatch = useDispatch()
    const checked = useSelector(selectChecked)

    const label = (id[0].toUpperCase() + id.slice(1)).replace("-", " ")

    return (
        <Fragment>
            {type !== "checkbox" ?
                <WRAPPER>
                    <label>{label}</label>
                    <input type = {type} id = {id} value = {value} onChange = {(e) => dispatch(identifiers(e, type))}/>
                </WRAPPER>
            :
                <REMEMBER>
                    <input type = {type} id = {id} checked = {checked} onChange = {() => dispatch(remember())}/>
                    <label>{label}</label>
                </REMEMBER>
            }
        </Fragment>
    )
}

export default InputSignin