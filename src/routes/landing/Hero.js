import HeaderCover from '../../assets/images/landing/header-cover.jpg'
import { Link } from "react-router-dom"

const Hero = () => {
    return (
        <article className='hero'>
            <section className='hero-content'>
                <p className='tagline'>Expenseless</p>
                <h1>Save more, Spend <span className='highlight-title'>less</span></h1>
                <p>
                    Espensless helps you to manage your money and track all your income & expenses effortlessly to reach your financial goals faster
                </p>
                <section className='hero-form'>
                    <form className='hero-signup'>
                        <input type="text" for="sign-up" name="sign-up" placeholder='Enter your email' />
                        <button type="button">
                            <Link to="/register">Sign Up</Link>
                        </button>
                    </form>
                    <span>By clicking Sign Up you're confirming that you agree with our Terms and Conditions.</span>
                </section>

            </section>
            <img src={HeaderCover} alt="Girl counting statistics" />


        </article>
    )
}

export default Hero;