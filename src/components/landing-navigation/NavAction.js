import React from "react";

const NavAction = (props) => {
    return (
        <React.Fragment>
            {props.isLoggedIn ?
                <section className="nav-action">
                    <button type="button">Dashboard</button>
                    <button type="button">Log out</button>
                </section> :
                <section className="nav-action">
                    <button type="button">Register</button>
                    <button type="button">Log in</button>
                </section>}
        </React.Fragment>
    )
}

export default NavAction;