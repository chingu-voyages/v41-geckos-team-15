import ExpenselessLogo from '../../assets/images/expenseless-logo.jpg'
import NavigationMenu from './NavigationMenu';
import NavAction from './NavAction';
import './landingNavigation.css';

const LandingNavigation = (props) => {
    return (
        <header className='landing-header'>
            <img src={ExpenselessLogo} alt="Expenseless" />
            <section className='nav-section'>
                {/*when the user is logged in the About,Pricing..etc will not appear in the dashboard*/}
                {!props.user && <NavigationMenu />}
                <NavAction user={props.user} onLogout={props.onLogout} />
            </section>
        </header>
    )
}

export default LandingNavigation;