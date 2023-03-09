import Logo from '../assets/img/logo.png';
import Cart from '../assets/img/cart.png';
import '../styles/header.scss'

function Header() {
    return (
        <div className='header container'>
            <ul className='header__list'>
            <li>
                <a href='#'>
                    <img className='header__logo' src={Logo}></img>
                </a>
            </li>
            </ul>
            <ul>
            <li>
                <a href='#'>
                    <img className='header__cart' src={Cart}></img>
                </a>
            </li>
            </ul>
        </div>
    )
}

export default Header;