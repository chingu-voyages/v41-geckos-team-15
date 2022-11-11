import { Link } from 'react-router-dom';
import ExpenselessLogo from '../../assets/images/expenseless-logo.jpg'
import './landingFooter.css';
import Respository from '../../assets/images/socials/repository.png';
import Website from '../../assets/images/socials/website.png';
import MaleIcon from '../../assets/images/socials/male-icon.png';
import FemaleIcon from '../../assets/images/socials/female-icon.png';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import ScrollToTop from '../../helpers/ScrollToTop';
const LandingFooter = (props) => {
    const [inputValue, setInputValue] = useState('');
    const [invalidInput, setInvalidInput] = useState(false);
    const { pathname } = useLocation();

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
    /*footer doesn't show when user go to dashboard*/
    if (pathname.includes("dashboard"))
        return <></>
    else
        return (
            <footer>
                <article className='footer-article-one'>
                    <section className='footer-menus'>
                        <img className='footer-logo' src={ExpenselessLogo} alt='Expenseless logo' />
                        <nav>
                            <ul className='footer-menu'>
                                <li><Link onClick={ScrollToTop} to='/about'>About</Link></li>
                                <li><Link onClick={ScrollToTop} to='/pricing'>Pricing</Link></li>
                                <li><Link onClick={ScrollToTop} to='/faq'>FAQ</Link></li>
                                <li><Link onClick={ScrollToTop} to='/blog'>Blog</Link></li>
                                <li><Link  onClick={ScrollToTop} to='/contact'>Contact</Link></li>
                            </ul>
                        </nav>
                        <nav>
                            <ul className='socials-menu'>
                                <li><a href='https://github.com/chingu-voyages/v41-geckos-team-15'> <img src={Respository} alt='Github icon' /></a></li>
                                <li><a href='/'> <img src={Website} alt='Website icon' /></a></li>
                                <li><a href='https://github.com/NawalKH'> <img src={MaleIcon} alt='Male icon' /></a></li>
                                <li><a href='https://github.com/catherineisonline'> <img src={FemaleIcon} alt='Female icon' /></a></li>
                            </ul>
                        </nav>
                    </section>
                    <form className='footer-form' onSubmit={submitForm}>
                        <label htmlFor="subscribe">Subscribe</label>
                        <section className='form-input' >
                            <input name='subscribe' type="text" placeholder='Enter your email' onChange={saveInputValues} />
                            {invalidInput ? <p className='footer-input-error'>Please enter a valid email</p> : null}
                            <button type='submit' className='basic-button'>Subscribe</button>
                        </section>
                        <span>By subscribing you agree with our <Link onClick={ScrollToTop} to='/privacy'>Privacy Policy</Link></span>
                    </form>
                </article>
                <hr />
                <article className='footer-article-two'>
                    <ul>
                        <li><Link to='/privacy' onClick={ScrollToTop}>Privacy Policy</Link></li>
                        <li><Link to='/terms' onClick={ScrollToTop}>Terms of Service</Link></li>
                    </ul>
                    <p>2022 Expenseless. All rights reserved.</p>
                </article>
            </footer>
        )
}

export default LandingFooter;