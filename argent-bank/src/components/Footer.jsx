//Styled components
import styled from "styled-components"

const FOOTER = styled.footer`
    display: flex;
    justify-content: center;
    border-top: 2px solid #ccc;
    padding: 2rem 0 1.5rem;
`

const FOOTER_TEXT = styled.p`
    margin: 0;
    padding: 0;
`

function Footer () {
    return (
        <FOOTER>
            <FOOTER_TEXT>Copyright 2020 Argent Bank</FOOTER_TEXT>
        </FOOTER>
    )
}

export default Footer