//React
import { Component } from "react"

//Styled components
import styled from "styled-components"

const ITEM = styled.div`
    flex: 1;
    padding: 2.5rem;
`

const ICON = styled.img`
    width: 100px;
    border: 10px solid #00bc77;
    border-radius: 50%;
    padding: 1rem;
`

const TITLE = styled.h3`
    color: #222;
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
`

class Feature extends Component {
    render () {

        const { icon, alt, title, content} = this.props

        return (
            <ITEM>
                <ICON src = {icon} alt = {alt}/>
                <TITLE>{title}</TITLE>
                <p>{content}</p>
            </ITEM>
        )
    }
}

export default Feature