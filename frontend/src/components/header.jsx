import { Outlet } from 'react-router-dom'
import logo from '../assets/Logo.png'

export default function Header() {
    return (
        <>
        <header>
            <nav>
                <div className="Logo">
                    <img src={logo}/>
                </div>
                <a href="/">Home</a>
                <a href="/leaderboard">Leaderboard</a>
            </nav>
        </header>
        <Outlet></Outlet>
        </>
    )
}

