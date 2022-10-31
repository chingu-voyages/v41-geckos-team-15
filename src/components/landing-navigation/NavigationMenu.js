import { Link } from 'react-router-dom';

const NavigationMenu = (props) => {
    return (
        <nav>
            <ul className='navigation-menu'>
                <li><Link to='/about' onClick={props.toggleOffMenu}>About</Link></li>
                <li><Link to='/pricing' onClick={props.toggleOffMenu}>Pricing</Link></li>
                <li><Link to='/faq' onClick={props.toggleOffMenu}>FAQ</Link></li>
                <li><Link to='/blog' onClick={props.toggleOffMenu}>Blog</Link></li>
                <li><Link to='/contact' onClick={props.toggleOffMenu}>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default NavigationMenu;