import React from "react";
import { useState } from "react";
import users from "../../data/Users"
import "../sign-in-modal/signIn.css"

const ForgotPassword = (props) => {

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!validate())
            return false;
        setSuccessMessage("Password reset email was sent!")
    }

    const validate = () => {
        let error = '';
        let isValid = true;

        if (!email) {
            error = 'Email is required'
            isValid = false
        }
        if (email && !/\S+@\S+\.\S+/.test(email)) {
            error = 'Email format must be as example@mail.com'
            isValid = false
        }
        const isEmailExist = users.find(
            x => x.email === email
        )
        if (!isEmailExist) {
            error = 'user with this email does not exist'
            isValid = false
        }
        if (!isValid) {
            setError(error)
        }
        return isValid;
    }

    return (
        <div className="modal">
            <div className="modal__overlay" />
            <div className="modal__box">
                <div className="modal__close">
                    <button onClick={props.closeForgotPassword}><span>&#10005;</span></button>
                </div>
                <div className="modal__title">
                    Password Reset
                </div>
                {successMessage ? <div className="modal__content"> {successMessage} </div>
                    :
                    <div className="modal__content">
                        <form onSubmit={handleSubmit}>
                            <ul>
                                <li>
                                    <label htmlFor="Email"> Enter your email:<span className="required"></span></label>
                                    <input
                                        name="username"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <div className="error-msg">{error}</div>
                                </li>
                                <li>
                                    <button className="submit-btn" type="submit">submit</button>

                                </li>
                            </ul>
                        </form>
                    </div>
                }
            </div>
        </div>
    );
}

export default ForgotPassword;
