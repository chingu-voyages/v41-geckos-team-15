import { useState } from 'react';
import HeaderCover from '../../assets/images/landing/header-cover.jpg';

const Hero = (props) => {
    const [inputValue, setInputValue] = useState('');
    const [invalidInput, setInvalidInput] = useState(false);

    const saveInputValues = (e) => {
        e.preventDefault();
        setInputValue(e.target.value);
    }
    const submitForm = (e) => {
        e.preventDefault();
        const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailRegex.test(inputValue) || inputValue.length === 0) {
            setInvalidInput(true);
        }
        else {
            setInvalidInput(false);
            props.openSignup();
        }
    }
    return (
        <article className='hero'>
            <section className='hero-content'>
                <p className='tagline'>Expenseless</p>
                <h1>Save more, Spend <span className='highlight-title'>less</span></h1>
                <p>Expenseless helps you to manage your money and track all your income & expenses effortlessly to reach your financial goals faster</p>
                <section className='hero-form'>
                    <form className='hero-signup' onSubmit={submitForm}>
                        <input type="text" name="signUpEmail" placeholder='Enter your email' onChange={saveInputValues} />
                        {invalidInput ? <p className='hero-input-error'>Please enter a valid email</p> : null}
                        <button type='submit' className='basic-button'>Sign up</button>
                    </form>
                    <span>By clicking Sign Up you're confirming that you agree with our Terms and Conditions.</span>
                </section>
            </section>
            <img src={HeaderCover} alt="Girl counting statistics" />
        </article>
    )
}

export default Hero;