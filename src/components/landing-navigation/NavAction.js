import { Link } from 'react-router-dom';

const NavAction = (props) => {
    return (
        <section className="nav-action">
            {/*Condition to change the buttons if the user is logged in or out*/}
            {props.user
                ? <>
                    <button type="button">
                        <Link to='/dashboard' onClick={props.toggleOffMenu}>Dashboard</Link>
                    </button>
                    <button type="button"
                        onClick={props.onLogout}>
                        <Link to='/' onClick={props.toggleOffMenu}>Log out</Link>
                    </button>
                </>
                : <>
                    <button type="button">
                        <Link to='/register' onClick={props.toggleOffMenu}>Register</Link>
                    </button>
                    <button type="button">
                        <Link to='/login' onClick={props.toggleOffMenu}>Log in</Link>
                    </button>
                </>
            }
        </section >
    )
}

export default NavAction;