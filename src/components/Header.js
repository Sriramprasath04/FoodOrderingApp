import burger from '../img/burger.png'
import logo from '../img/logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import useOnlineStatus from '../utils/useOnlineStatus'

const Header = ()=> {
    const onlineStatus = useOnlineStatus();
    const [data, setData] = useState("Login");
    
    const change = ()=>{
        setData(data == "Login" ? "Logout" : "Login");
    }

    const [show, setshow] = useState("none");
    const showNav = () =>{
        setshow(show == "none"?"show":"none");
    }

    return (
        <header>
            <div className="header">
                <div className="logo-container">
                    <img className="logo" src={logo} alt="logo"/>
                </div>
                <div className='nav-cont'>
                    <ul className="nav-items">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/">Cart</Link></li>
                    </ul>
                    <button 
                        className = {data + " invide"}
                        onClick={change}
                    >{data}
                    {onlineStatus? " 🟢" : " 🔴"}</button>
                    <Link className='burger'
                        onClick={showNav}>
                        <img src={burger}/>
                    </Link>
                </div>
            </div>
            <ul className={show+" nav-items-md"}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/">Cart</Link></li>
            </ul>
        </header>
    )
}

export default Header;