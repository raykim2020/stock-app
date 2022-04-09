import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav>
            <ul>
                <li><Link to="/Stocks">Stocks</Link></li>
                <li><Link to="/About">About</Link></li>
            </ul>
        </nav>


    )
}