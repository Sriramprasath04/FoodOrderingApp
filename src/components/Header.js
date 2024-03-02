import cart from '../img/icons8-shopping-cart-100.png'
import logo from '../img/logo.png'
import user from '../img/icons8-person-100.png'

const Header = ()=> {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo} alt="logo"/>
            </div>
            <ul className="nav-items">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li>
                    <a href="#" className="nav-cont">
                        <p>Cart</p>
                        <img className="cart" src={cart}/>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Header;