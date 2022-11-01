import React from "react";
import "./signIn.css"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    {/*passes the user info and redirect the user to dashboard*/ }
    const HandleSignIn = (event) => {
        event.preventDefault()
        props.closeLogin()
        props.onLogin(username)
        navigate('/dashboard')
    }

    return (
        <div className="modal">
            <div className="modal__overlay" />
            <div className="modal__box">
                <div className="modal__close">
                    <button onClick={props.closeLogin}><span>&#10005;</span></button>
                </div>
                <div className="modal__title">
                    Log In
                </div>
                <div className="modal__sub_title">
                    Log in to get started
                </div>
                <div className="modal__content">
                    <form onSubmit={HandleSignIn}>
                        <ul>
                            <li>
                                <label htmlFor="username">Username:<span className="required">*</span></label>
                                <input
                                    name="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </li>
                            <li>
                                <label htmlFor="password">Password:<span className="required">*</span></label>
                                <input
                                    value={password}
                                    name="password"
                                    type="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </li>
                            <li>
                                <button className="submit-btn" type="submit">Log in</button>
                            </li>
                        </ul>
                    </form>
                    <div><Link to="/forgotPassword">forgot your password?</Link></div>
                    <div>Don't have an account?  <button className="signup-btn"
                        onClick={() => { props.closeLogin(); props.openSignup() }}>
                        Sign Up</button></div>
                </div>
            </div>
        </div >
    );
}

export default SignIn;
