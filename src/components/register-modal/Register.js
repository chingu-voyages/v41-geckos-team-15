import React from "react";
import "./register.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEamil] = useState('');
    const navigate = useNavigate();

    {/*passes the user info and redirect to dashboard*/ }
    const HandleSignUp = (event) => {
        event.preventDefault()
        props.closeSignup()
        props.onRegister(username)
        navigate('/dashboard')
    }

    return (
        <div className={'modal'}>
            <div className={'modal__overlay'} />
            <div className={'modal__box'}>
                <div className="modal__close">
                    <button onClick={props.closeSignup}><span>&#10005;</span></button>
                </div>
                <div className={'modal__title'}>
                    Sign Up
                </div>
                <div className="modal__sub_title">
                    Sign up to get started
                </div>
                <div className={'modal__content'}>
                    <form onSubmit={HandleSignUp}>
                        <label>Username:</label>
                        <input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <label>Email:</label>
                        <input
                            value={email}
                            onChange={(e) => setEamil(e.target.value)}
                        />
                        <label>Password:</label>
                        <input
                            value={password}
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button className="submit-btn" type="submit">Sign up</button>
                    </form>
                    <div>Already have an account?
                        <button className="login-btn"
                            onClick={() => { props.closeSignup(); props.openLogin() }}>
                            Log in</button></div>
                </div>
            </div>
        </div>
    );
}

export default Register;