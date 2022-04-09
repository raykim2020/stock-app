import { Link } from "react-router-dom"
import Nav from "./Nav"
export default function Header() {
    return (
        <header>
            <h1><Link to="/">iStocks</Link></h1>
            <Nav />
        </header>

    )
}