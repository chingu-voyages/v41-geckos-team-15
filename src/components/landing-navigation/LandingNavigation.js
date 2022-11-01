import ExpenselessLogo from '../../assets/images/expenseless-logo.jpg'
import NavigationMenu from './NavigationMenu';
import NavAction from './NavAction';
import './landingNavigation.css';
import { useLocation } from 'react-router-dom';
import Hamburger from '../../assets/images/landing/hamburger.png'
import { useState } from 'react';
const LandingNavigation = (props) => {
    const [toggleMenu, setToggleMeu] = useState(false);
    const { pathname } = useLocation();
    const toggleHamMenu = () => {
        toggleMenu ? setToggleMeu(false) : setToggleMeu(true);
    }
    const toggleOffMenu = () => {
        setToggleMeu(false);
    }
    /*landing nav bar doesn't show when user go to dashboard*/
    if (pathname.includes("dashboard") && props.user)
        return <></>
    else
        return (
            <header className={`landing-header${!toggleMenu ? `` : ` active-header`}`}>
                <img src={ExpenselessLogo} alt="Expenseless" onClick={toggleOffMenu} />
                <img className='hamburger' src={Hamburger} alt="" onClick={toggleHamMenu} />
                <section className={`nav-section${!toggleMenu ? `` : ` active-menu`}`}>
                    <NavigationMenu toggleOffMenu={toggleOffMenu} />
                    <NavAction user={props.user} 
                    onLogout={props.onLogout}
                     toggleOffMenu={toggleOffMenu}
                     openLogin={props.openLogin}
                     openSignup={props.openSignup} />
                </section>
            </header>
        )
}

export default LandingNavigation;