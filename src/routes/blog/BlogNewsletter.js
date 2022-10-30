import { Link } from 'react-router-dom';

const BlogNewsletter = () => {
    return (
        <article className="blog-newsletter">
            <section className="blog-newsletter-title">
                <h3>Subscribe to our newsletter</h3>
                <p>Signup for our weekly newsletter to get the latest news, updates and amazing offers delivered directly in your inbox.</p>
            </section>
            <form className='blog-form'>
                <section className='blog-input'>
                    <input name='subscribe' type="text" placeholder='Enter your email' />
                    <button type='button'>Subscribe</button>
                </section>
                <span>By clicking Sign Up you're confirming that you agree with our  <Link to='/terms'>Terms and Conditions.</Link></span>
            </form>

        </article>
    )
}

export default BlogNewsletter;