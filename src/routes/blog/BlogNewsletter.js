import { Link } from 'react-router-dom';
import { useState } from 'react';
import ScrollToTop from '../../helpers/ScrollToTop';

const BlogNewsletter = () => {
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
        }
    }
    return (
        <article className="blog-newsletter">
            <section className="blog-newsletter-title">
                <h3>Subscribe to our newsletter</h3>
                <p>Signup for our weekly newsletter to get the latest news, updates and amazing offers delivered directly in your inbox.</p>
            </section>
            <form className='blog-form' onSubmit={submitForm}>
                <section className='blog-input'>
                    <input name='subscribe' type="text" placeholder='Enter your email' onChange={saveInputValues} />
                    {invalidInput ? <p className='blog-input-error'>Please enter a valid email</p> : null}
                    <button type='submit'>Subscribe</button>
                </section>
                <span>By clicking subscribe you're confirming that you agree with our  <Link to='/terms' onClick={ScrollToTop}>Terms and Conditions.</Link></span>
            </form>

        </article>
    )
}

export default BlogNewsletter;