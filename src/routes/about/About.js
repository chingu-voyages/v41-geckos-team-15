import AboutUs from '../../assets/images/about-us/about-us.jpg';
import Location from "../../routes/contact/Location.js";
import Highlight from '../../assets/images/about-us/highlight-testimonial.jpg';
import BrightStudio from '../../assets/images/about-us/bright-studio.jpg';
import Star from '../../assets/images/vectors/star.jpg';
import './about.css';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import team from '../../data/Team';

const About = () => {
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + 3;
    const currentTeam = [...team].reverse().slice(itemOffset, endOffset);
    const pages = Math.ceil(team.length / 3);

    const handleSliderClick = (event) => {
        const newOffset = (event.selected * 5) % team.length;
        setItemOffset(newOffset);
    };
    return (
        <main className='about'>
            <article>
                <section className="about-title">
                    <h2>Expenseless: Budget Expense Tracker</h2>
                    <p>With us budgeting expenses has never been easier!</p>
                </section>
            </article>
            <article className="about-us">
                <section>
                    <p className='tagline'>Explore</p>
                    <h3>About <span className='highlight-title'>Expenseless</span></h3>
                    <p>Expenseless is a market-leading personal finance manager which was built to help you save money,  plan for the future, and see all your finances in one place. With Expenseless you can stay on top of your daily expenses automatically with bank synchronization, manage debt,  monitor expenses and incomes, dive into weekly reports on your spending, and track bills.
                        Expenseless allows you to see your finances your way - anywhere, any time. No more need for your notebooks and spreadsheets, and budget for clear, tangible goals that are easy to track in real-time. Tracking your spending will get a whole lot easier with us! Gain full control of your finances with beautifully designed reports on your accounts.</p>
                </section>
                <img src={AboutUs} alt="finance" />
            </article>
            <article className='our-team'>
                <section className='our-team-header'>
                    <p className='tagline'>Our team</p>
                    <h3>Who we are</h3>
                    <p>We want to be recognized for contributing to a better world through the balance between budgeting and personal life</p>
                </section>
                <section className='team-slider'>
                {currentTeam.map(member => <section key={member.id} className='team-member'>
                    <img src={member.icon} alt='' />
                    <section className='team-member-info'>
                    <h4>{member.name}</h4>
                    <p>{member.posiiton}</p>
                    </section>
                    <p>{member.about}</p>
                 
                </section>)}
                </section>
                <ReactPaginate
                            className="slider-pagination"
                            breakLabel="..."
                            nextLabel="&#62;"
                            onPageChange={handleSliderClick}
                            pageRangeDisplayed={3}
                            pageCount={pages}
                            previousLabel="&#60;"
                            renderOnZeroPageCount={null}
                        />
            </article>
            <article className='highlight-testimonial'>
            <section className='highlight-testimonial-1'>
                <img className='stars' src={Star} alt='stars' />
                <p>"Amazing budgeting app, especially for those that like both manual budgeting and automated budgeting! This app has both, and is very aesthetic in appearance. Prices for the Business are reasonable too.  I'm glad that I stumbled across this app, it's versatility and smoothness is top tier!  Without a doubt, the best one! Recommended!"</p>
                <section className='highlight-testimonials-author'>
                    <section className='highlight-author'>
                        <img  src={Highlight} alt='person' />
                        <section>
                            <p>Daniel White</p>
                            <p>CEO, Bright Studio</p>
                        </section>
                    </section>
                    <img className='bright-studio' src={BrightStudio} alt='BrightStudio' />
                </section>
                </section>
            </article>
            <Location />
        </main>
    )
}

export default About;