//Styled components
import styled from "styled-components"

//Components
import Welcome from "../components/Welcome"
import Account from "../components/Account"

//Datas
import { accountDatas } from "../datas/AccountDatas";

const MAIN = styled.main`
    flex: 1;
    background-color: #12002b;
`

function UserPage () {
    return (
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
    )
}

export default UserPage

/*

    axios
        .post("http://localhost:3001/api/v1/user/login", {
            email: "tony@stark.com",
            password: "password123"
        })
        .then((response) => console.log(response))
        .catch((error) => console.log(error))

*/