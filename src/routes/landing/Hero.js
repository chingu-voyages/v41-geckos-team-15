import HeaderCover from '../../assets/images/landing/header-cover.jpg'

const Hero = () => {
    return (
        <article className='hero'>
            <section className='hero-content'>
                <p>Expenseless</p>
                <h1>Save more, Spend less</h1>
                <p>
                    Espensless helps you to manage your money and track all your income & expenses effortlessly to reach your financial goals faster
                </p>
                <form className='hero-signup'>
                    <label for="sign-up">
                        <input type="text" for="sign-up" name="sign-up" />
                    </label>
                    <button type="button">Sign Up</button>
                    <span>By clicking Sign Up you're confirming that you agree with our Terms and Conditions.</span>
                </form>

            </section>
            <img src={HeaderCover} alt="Girl counting statistics" />


        </article>
    )
}

export default Hero;