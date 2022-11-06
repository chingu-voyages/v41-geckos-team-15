import { Link } from 'react-router-dom';
import ScrollToTop from '../../helpers/ScrollToTop';

const NavigationMenu = ({ toggleOffMenu }) => {
    return (
        <nav>
            <ul className='navigation-menu'>
                <li><Link to='/' onClick={() => { toggleOffMenu(); ScrollToTop() }}>Home</Link></li>
                <li><Link to='/about' onClick={() => { toggleOffMenu(); ScrollToTop() }}>About</Link></li>
                <li><Link to='/pricing' onClick={() => { toggleOffMenu(); ScrollToTop() }}>Pricing</Link></li>
                <li><Link to='/faq' onClick={() => { toggleOffMenu(); ScrollToTop() }}>FAQ</Link></li>
                <li><Link to='/blog' onClick={() => { toggleOffMenu(); ScrollToTop() }}>Blog</Link></li>
                <li><Link to='/contact' onClick={() => { toggleOffMenu(); ScrollToTop() }}>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default NavigationMenu;