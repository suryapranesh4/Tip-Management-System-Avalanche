import { useContext } from "react"
import Connect from "./components/Connect"
import Home from "./components/Home"

import { TipMeContext } from "./context/TipMeContext"

function App() {
    const { currentAccount } = useContext(TipMeContext)

    return <div>{currentAccount ? <Home /> : <Connect />}</div>
}

export default App
