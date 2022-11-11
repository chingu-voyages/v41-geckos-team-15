import { Link } from "react-router-dom";
import './contact.css';
import ContactCover from '../../assets/images/contact/contact-cover.jpg'
import Address from '../../assets/images/contact/address.png';
import Phone from '../../assets/images/contact/phone.png';
import Email from '../../assets/images/contact/email.png';
import './leaflet.css'
import { useState } from "react";

import Location from "./Location";


const Contact = () => {
    const [formValue, setFormValue] = useState({ name: '', email: '', message: '' });
    const [formError, setFormError] = useState({})
    const [submit, setSubmit] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm(formValue))
            return false;

        setSubmit(true);
        setFormValue({ name: '', email: '', message: '' });
    }

    const handleValidation = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value })
    }

    const validateForm = (value) => {
        let errors = {}
        let isValid = true;
        const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (!value.name) {
            errors.name = "Please enter a valid name"
            isValid = false;
        }
        if (!value.email) {
            errors.email = "Please enter email"
            isValid = false;
        }
        else if (!emailRegex.test(value.email)) {
            errors.email = "Please enter valid email"
            isValid = false;
        }
        if (!value.message) {
            errors.message = "Please enter a valid message"
            isValid = false;
        }
        if (!isValid)
            setFormError(errors);

        return isValid;
    }
    return (
        <main className="contact">
            <article className="contact-us-form">
                <h2>Contact us</h2>
                <p>We are here to support you throughout your journey 24/7</p>
                <section className="contact-us-form-section">
                    {submit ?
                        <h3>You message has been sent successfully!</h3>
                        : <form onSubmit={handleSubmit}>
                            <label htmlFor="name">Name
                                <input onChange={handleValidation} value={formValue.name} type="text" name="name" />
                                <span className="contact-input-err">{formError.name}</span>
                            </label>
                            <label htmlFor="email">Email
                                <input onChange={handleValidation} value={formValue.email} type="text" name="email" />
                                <span className="contact-input-err">{formError.email}</span>
                            </label>
                            <label htmlFor="message">Message
                                <textarea onChange={handleValidation} value={formValue.message} rows="5" type="text" name="message" />
                                <span className="contact-input-err">{formError.message}</span>
                            </label>
                            <section className="terms-checkbox">
                                <input type="checkbox" name="checkbox" required />
                                <span>I accept the <Link to="terms">Terms</Link></span>
                            </section>
                            <button type="submit" className="basic-button">Submit</button>
                        </form>}
                    <img src={ContactCover} alt="Contact us" />
                </section>
            </article>
            <article className="contact-info">
                <section>
                    <img src={Email} alt="" />
                    <h3>Email</h3>
                    <p>Chat with our sales team</p>
                    <p className="contact-info-detail">hello@expenseless.mail</p>
                </section>
                <section>
                    <img src={Phone} alt="" />
                    <h3>Phone</h3>
                    <p>Call us directly at</p>
                    <p className="contact-info-detail">+1 (555) 000-0000</p>
                </section>
                <section>
                    <img src={Address} alt="" />
                    <h3>Office</h3>
                    <p>We are waiting for you at</p>
                    <p className="contact-info-detail">123 Sample St, Sydney NSW 2000 AU</p>
                </section>
            </article>
            <Location />
        </main>
    )
}

export default Contact;