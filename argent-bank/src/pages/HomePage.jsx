//React
import { Component } from "react"

//Components
import Hero from "../components/Hero"
import Features from "../components/Features"

class HomePage extends Component {
    render () {
        return (
            <main>
                <Hero />
                <Features />
            </main>
        )
    }
}

export default HomePage