import { Link } from 'react-router-dom';
import "./landingNavigation.css"

const NavAction = (props) => {
    return (
        <section className="nav-action">
            {props.user
                ? <>
                    <button type="button" className='basic-button'>
                        <Link to='/dashboard' onClick={props.toggleOffMenu}>Dashboard</Link>
                    </button>
                    <button type="button"
                    className='basic-button '
                        onClick={props.onLogout}>
                        <Link to='/' onClick={props.toggleOffMenu}>Log out</Link>
                    </button>
                </>
                : <>
                    <button className='basic-button' onClick={() => { props.toggleOffMenu(); props.openSignup() }}>
                        Register
                    </button>
                    <button className='basic-button' type="button" onClick={() => { props.toggleOffMenu(); props.openLogin() }}>
                        Login
                    </button>
                </>
            }
        </section >
    )
}

export default NavAction;