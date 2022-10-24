import ExpenselessLogo from '../../assets/images/expenseless-logo.jpg'
import NavigationMenu from './NavigationMenu';
import NavAction from './NavAction';
import './landingNavigation.css';

const LandingNavigation = () => {
    return (
        <header className='landing-header'>
            <img src={ExpenselessLogo} alt="Expenseless" />
            <section className='nav-section'><NavigationMenu />
                <NavAction /></section>

        </header>
    )
}

export default LandingNavigation;