import '../assets/css/header.css'
import { Outlet } from 'react-router-dom'
import logo from '../assets/Logo.png'



export default function Header() {
    return (
        <>
        <header>
            <nav>
                <div className="Logo">
                    <img src={logo} className='logo_img'/>
                </div>
                <div className='nav_link'>
                <a href="/">Home</a>
                <a href="/leaderboard">Leaderboard</a>
                </div>
            </nav>
        </header>
        <Outlet></Outlet>
        </>
    )
}

