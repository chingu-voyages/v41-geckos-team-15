import ExpenselessLogo from '../../assets/images/expenseless-logo.jpg'
import NavigationMenu from './NavigationMenu';
import NavAction from './NavAction';
import './landingNavigation.css';
import { useLocation } from 'react-router-dom';

const LandingNavigation = (props) => {
    const { pathname } = useLocation();
    /*landing nav bar doesn't show when user go to dashboard*/
    if (pathname === "/dashboard" && props.user)
        return <></>
    else
        return (
            <header className='landing-header'>
                <img src={ExpenselessLogo} alt="Expenseless" />
                <section className='nav-section'>
                    <NavigationMenu />
                    <NavAction user={props.user} onLogout={props.onLogout} />
                </section>
            </header>
        )
}

export default LandingNavigation;