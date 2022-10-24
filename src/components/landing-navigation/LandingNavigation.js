import ExpenselessLogo from '../../assets/images/expenseless-logo.jpg'
import NavigationMenu from './NavigationMenu';
import NavAction from './NavAction';
import './landingNavigation.css';

const LandingNavigation = () => {
    return (
        <header className='landing-header'>
            <img src={ExpenselessLogo} alt="Expenseless" />
            <NavigationMenu />
            <NavAction />
        </header>
    )
}

export default LandingNavigation;