import './profileDashboard.css'
import users from "../../data/Users";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileDashboard = (props) => {

    const user = users.find(u => u.username === props.user);
    const index = users.findIndex(u => u.id === user.id);

    const [editModeEnabled, setEditModeEnabled] = useState(false);
    const [userValue, setUserValue] = useState(user);
    const [formError, setFormError] = useState({});
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserValue({ ...userValue, [name]: value });
    }
    const handleSettingsChange = (e) => {
        const { name, value } = e.target;
        setUserValue({ ...userValue, settings: { ...userValue.settings, [name]: value } });
        console.log(userValue)
    }

    const validateForm = () => {
        let errors = {};
        let isValid = true;
        if (!userValue.email) {
            errors.email = 'Email is required'
            isValid = false
        }
        if (userValue.email && !/\S+@\S+\.\S+/.test(userValue.email)) {
            errors.email = 'Email format must be as example@mail.com'
            isValid = false
        }
        if (!userValue.password) {
            errors.password = 'Password is required'
            isValid = false
        }
        if (userValue.password && userValue.password.length < 6) {
            errors.password = 'Password must be at least 6 characters long'
            isValid = false
        }
        if (!isValid) {
            setFormError(errors)
        }
        return isValid
    }

    //Update profile
    const updateProfile = () => {
        if (!validateForm())
            return false;

        users[index] = Object.assign({}, userValue);

        setSuccessMessage("Updated Profile Information Successfuly!")
        setTimeout(() => {
            setSuccessMessage("")
        }, 2000);
        setEditModeEnabled(false);
    }

    //Cancel Update
    const cancelUpdate = () => {
        setEditModeEnabled(false);
        setUserValue(user);
        setFormError({});
    }

    //Deactivate account
    const deactivate = () => {
        const confirmBox = window.confirm(
            "Do you really want to deactivate your account?"
        )
        if (confirmBox === true) {
            users.splice(index, 1);
            props.logout()
            navigate('/')
        }
    }

    return (
        <main className="profile-dashboard">
            <div className="header">
                <h1>Profile</h1>
            </div>
            <article className="profile">

                {successMessage ? <div className="success-msg">{successMessage}</div> : null}
                <form onSubmit={(e) => e.preventDefault()}>
                    <ul>
                        <li>
                            <h3>Email</h3>
                            <input name="email" onChange={handleInputChange} value={userValue.email} disabled={!editModeEnabled} />
                            {formError.email ? <span className="input-err">{formError.email}</span> : null}
                        </li>
                        <li>
                            <h3>Password</h3>
                            <input type="password" name="password" onChange={handleInputChange} value={userValue.password} disabled={!editModeEnabled} />
                            {formError.password ? <span className="input-err">{formError.password}</span> : null}
                        </li>
                        <li>
                            <h3>Language</h3>
                            {editModeEnabled ?
                                <select onChange={handleSettingsChange} name="language" defaultValue={userValue.settings.language}>
                                    <option value="English (US)" >English (US)</option>
                                    <option value="Spanish">Spanish</option>
                                    <option value="French">French</option>
                                </select>
                                :
                                <p>{user.settings.language}</p>}
                        </li>
                        <li>
                            <h3>Currency</h3>
                            {editModeEnabled ?
                                <select onChange={handleSettingsChange} name="currency" defaultValue={userValue.settings.currency}>
                                    <option value="USD" >USD</option>
                                    <option value="EUR">EUR</option>
                                </select>
                                : <p>{user.settings.currency}</p>}
                        </li>
                        <li>
                            <h3>Subscribtion</h3>
                            {editModeEnabled ?
                                <select onChange={handleSettingsChange} name="subscribtion" defaultValue={userValue.settings.subscribtion}>
                                    <option value="Basic">Basic</option>
                                    <option value="Business">Business</option>
                                </select>
                                : <p>{user.settings.subscribtion}</p>}
                        </li>
                    </ul>
                    {editModeEnabled ?
                        <section className='profile-buttons'>
                            <button className='dash-button' onClick={updateProfile}>Save</button>
                            <button className='dash-button' onClick={cancelUpdate}>Cancel</button>
                        </section>
                        :
                        <section className='profile-buttons'>
                            <button className='dash-button' onClick={() => setEditModeEnabled(true)}>Edit</button>
                            <button className='deactivate-btn dash-button' onClick={deactivate}>Deactivate account</button>
                        </section>
                    }
                </form>
            </article>
        </main>
    )
}

export default ProfileDashboard;