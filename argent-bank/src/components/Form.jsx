//React
import { Component } from "react"

//Components
import Input from "./Input"


class Form extends Component {
    render () {
        return (
            <form>
                <Input
                    type = "text"
                    id = "username"
                />
                <Input
                    type = "password"
                    id = "password"
                />
                <Input
                    type = "checkbox"
                    id = "remember-me"
                />
            </form>
        )
    }
}

export default Form