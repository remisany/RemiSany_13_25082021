//Styled components
import styled from "styled-components"

//Components
import Feature from "./Feature"

//Assets
import chat from "../assets/icon-chat.png"
import money from "../assets/icon-money.png"
import security from "../assets/icon-security.png"

const FEATURES = styled.section`
    display: flex;
    flex-direction: column;

    @media (min-width: 920px) {
        flex-direction: row;
    }
`

function Features () {
    return (
        <FEATURES>
            <Feature
                icon = {chat}
                alt = "Chat icon"
                title = "You are our #1 priority"
                content = "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
            />
            <Feature
                icon = {money}
                alt = "Money icon"
                title = "More savings means higher rates"
                content = "The more you save with us, the higher your interest rate will be!"
            />
            <Feature
                icon = {security}
                alt = "Security icon"
                title = "Security you can trust"
                content = "We use top of the line encryption to make sure your data and money is always safe."
            />
        </FEATURES>
    )
}

export default Features