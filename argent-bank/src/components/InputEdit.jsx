import { useDispatch } from 'react-redux'
import styled from "styled-components"

//Features
import { profileEdit } from '../features/Profile'

const WRAPPER = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 1rem;

    input {
        padding: 5px;
        font-size: 1.2rem;
    }
`

function InputEdit ({ type, id, placeholder}) {
    const dispatch = useDispatch()

    return (
        <WRAPPER>
            <input type = {type} id = {id} placeholder = {placeholder} onChange={(e) => dispatch(profileEdit(e, id))}/>
        </WRAPPER>
    )
}

export default InputEdit