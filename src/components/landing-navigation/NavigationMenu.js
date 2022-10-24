import { Link } from 'react-router-dom';

const NavigationMenu = () => {
    return (
        <nav>
            <ul className='navigation-menu'>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/pricing'>Pricing</Link></li>
                <li><Link to='/faq'>FAQ</Link></li>
                <li><Link to='/blog'>Blog</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default NavigationMenu;