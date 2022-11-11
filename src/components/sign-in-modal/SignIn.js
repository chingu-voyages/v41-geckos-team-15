import React from "react";
import "./signIn.css"
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import users from "../../data/Users"

const SignIn = (props) => {
    const [values, setValues] = useState({ username: '', password: '' })
    const [validations, setValidations] = useState({ username: '', password: '' })
    const navigate = useNavigate();

    const validateAll = () => {
        const { username, password } = values
        const validations = { username: '', password: '' }
        let isValid = true

        if (!username) {
            validations.username = 'Username is required'
            isValid = false
        }
        if (!password) {
            validations.password = 'Password is required'
            isValid = false
        }

        const isUserExist = users.find(
            x => x.username === username && x.password === password
        );

        if (!isUserExist) {
            validations.username = 'Username or password is incorrect'
            isValid = false
        }

        if (!isValid) {
            setValidations(validations)
        }
        return isValid
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }

    const HandleSignIn = (e) => {
        e.preventDefault()
        const isValid = validateAll()
        if (!isValid) {
            return false
        }
        props.closeLogin()
        localStorage.setItem('user', JSON.stringify(username));
        props.onLogin(username)
        navigate('/dashboard')
    }

    const { username, password } = values

    const {
        username: usernameVal,
        password: passwordVal
    } = validations

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
                                    onChange={handleChange}
                                />
                                <div className="error-msg">{usernameVal}</div>
                            </li>
                            <li>
                                <label htmlFor="password">Password:<span className="required">*</span></label>
                                <input
                                    value={password}
                                    name="password"
                                    type="password"
                                    onChange={handleChange}
                                />
                                <div className="error-msg">{passwordVal}</div>
                            </li>
                            <li>
                                <button className="submit-btn" type="submit">Log in</button>
                            </li>
                        </ul>
                    </form>
                    <section className="signin-forgotpass">
                        <button onClick={() => { props.closeLogin(); props.openForgotPassword() }} className="forgot-pass-link">Forgot your password?</button>
                        <button className="signup-btn basic-button"
                            onClick={() => { props.closeLogin(); props.openSignup() }}>
                            Don't have an account?</button>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
