import ExpenselessLogo from '../../assets/images/expenseless-logo.jpg'
import NavigationMenu from './NavigationMenu';
import NavAction from './NavAction';
import './landingNavigation.css';
import { Link, useLocation } from 'react-router-dom';
import Hamburger from '../hamburger/Hamburger';



import { useState } from 'react';
const LandingNavigation = (props) => {
    const { pathname } = useLocation();
    const [responsive, setResponsive] = useState(false);

    const toggleMenu = () => setResponsive(!responsive);

    if (pathname.includes("dashboard") && props.user)
        return <></>
    else
        return (
            <header className={`landing-header${!responsive ? `` : ` is-active`}`}>
                <Link to="/">
                    <img className="logo" src={ExpenselessLogo} alt="Expenseless" />
                </Link>
                <Hamburger responsive={responsive} toggleMenu={toggleMenu} />
                <section className={`nav-section${!responsive ? `` : ` active-menu`}`}>
                    <NavigationMenu toggleOffMenu={toggleMenu} />
                    <NavAction user={props.user}
                        onLogout={props.onLogout}
                        toggleOffMenu={toggleMenu}
                        openLogin={props.openLogin}
                        openSignup={props.openSignup} />
                </section>
            </header>
        )
}

export default LandingNavigation;