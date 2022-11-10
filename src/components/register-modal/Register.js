import React from "react";
import "./register.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import users from "../../data/Users"

const Register = (props) => {
    const [values, setValues] = useState({ username: '', email: '', password: '' })
    const [validations, setValidations] = useState({ username: '', email: '', password: '' })
    const navigate = useNavigate();

    const validateAll = () => {
        const { username, email, password } = values
        const validations = { username: '', email: '', password: '' }
        let isValid = true

        if (!username) {
            validations.username = 'Username is required'
            isValid = false
        }

        if (username && username.length < 3) {
            validations.username = 'Username must be at least 3 characters'
            isValid = false
        }
        const isUsernameExist = users.find(
            x => x.username === username
        )
        if (isUsernameExist) {
            validations.username = 'Username already exist'
            isValid = false
        }

        if (!email) {
            validations.email = 'Email is required'
            isValid = false
        }

        if (email && !/\S+@\S+\.\S+/.test(email)) {
            validations.email = 'Email format must be as example@mail.com'
            isValid = false
        }
        const isEmailExist = users.find(
            x => x.email === email
        )
        if (isEmailExist) {
            validations.email = 'Email already exist'
            isValid = false
        }

        if (!password) {
            validations.password = 'Password is required'
            isValid = false
        }
        if (password && password.length < 6) {
            validations.password = 'Password must be at least 6 characters long'
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

    const HandleSignUp = (e) => {
        e.preventDefault()
        const isValid = validateAll()
        if (!isValid) {
            return false
        }

        const newUser = {
            id: users[users.length - 1].id + 1,
            email: email,
            username: username,
            password: password,
            settings: {
                language: "English (US)",
                currency: "USD",
                subscribtion: "Basic"
            }
        }
        users.push(newUser)
        localStorage.setItem('user', JSON.stringify(username));
        props.closeSignup()
        props.onRegister(username)
        navigate('/dashboard')
    }

    const { username, email, password } = values
    const {
        username: usernameVal,
        email: emailVal,
        password: passwordVal
    } = validations

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
                            name="username"
                            value={username}
                            onChange={handleChange}
                        />
                        <div className="error-msg">{usernameVal}</div>
                        <label>Email:</label>
                        <input
                            name="email"
                            value={email}
                            onChange={handleChange}
                        />
                        <div className="error-msg">{emailVal}</div>
                        <label>Password:</label>
                        <input
                            value={password}
                            type="password"
                            name="password"
                            onChange={handleChange}
                        />
                        <div className="error-msg">{passwordVal}</div>
                        <button className="submit-btn basic-button" type="submit">Sign up</button>
                    </form>
                    <div className="have-account">Already have an account?
                        <button className="login-btn basic-button"
                            onClick={() => { props.closeSignup(); props.openLogin() }}>
                            Log in</button></div>
                </div>
            </div>
        </div>
    );
}

export default Register;