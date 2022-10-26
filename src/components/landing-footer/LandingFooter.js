import { Link } from 'react-router-dom';
import ExpenselessLogo from '../../assets/images/expenseless-logo.jpg'
import './landingFooter.css';
import Respository from '../../assets/images/socials/repository.png';
import Website from '../../assets/images/socials/website.png';
import MaleIcon from '../../assets/images/socials/male-icon.png';
import FemaleIcon from '../../assets/images/socials/female-icon.png';
import { useLocation } from 'react-router-dom';




const LandingFooter = () => {
    const { pathname } = useLocation();
    /*footer doesn't show when user go to dashboard*/
    if (pathname === "/dashboard")
        return <></>
    else
        return (
            <footer>
                <article className='footer-article-one'>
                    <section className='footer-menus'>
                        <img className='footer-logo' src={ExpenselessLogo} alt='Expenseless logo' />
                        <nav>
                            <ul className='footer-menu'>
                                <li><Link to='/about'>About</Link></li>
                                <li><Link to='/pricing'>Pricing</Link></li>
                                <li><Link to='/faq'>FAQ</Link></li>
                                <li><Link to='/blog'>Blog</Link></li>
                                <li><Link to='/contact'>Contact</Link></li>
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
                    <form className='footer-form'>
                        <label for="subscribe">Subscribe</label>
                        <section className='form-input'>
                            <input name='subscribe' type="text" placeholder='Enter your email' />
                            <button type='button'>Subscribe</button>
                        </section>
                        <span>By subscribing you agree with our <Link to='/privacy'>Privacy Policy</Link></span>
                    </form>
                </article>
                <hr />
                <article className='footer-article-two'>
                    <ul>
                        <li><Link to='/privacy'>Privacy Policy</Link></li>
                        <li><Link to='/terms'>Terms of Service</Link></li>

                    </ul>
                    <p>2022 Expenseless. All rights reserved.</p>
                </article>
            </footer>
        )
}

export default LandingFooter;