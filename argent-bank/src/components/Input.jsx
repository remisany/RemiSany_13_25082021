//React
import { Component, Fragment } from "react"

//Styled components
import styled from "styled-components"

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

class Input extends Component {
    render () {

        const { type, id } = this.props
        const label = (id[0].toUpperCase() + id.slice(1)).replace("-", " ")

        return (
            <Fragment>
                {type !== "checkbox" ?
                    <WRAPPER>
                        <label>{label}</label>
                        <input type = {type} id = {id}/>
                    </WRAPPER>
                :
                    <REMEMBER>
                        <input type = {type} id = {id}/>
                        <label>{label}</label>
                    </REMEMBER>
                }
            </Fragment>
        )
    }
}

export default Input