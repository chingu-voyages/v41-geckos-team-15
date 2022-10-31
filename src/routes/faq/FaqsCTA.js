import React from 'react'
import { Link } from 'react-router-dom'
import "./faq.css"
import FaqsPic from '../../assets/images/faqs/faqs-cta.jpg';

const FaqsCTA = () => {
    return (
        <div>
            <div className="CTA-content">
                <h1> Personal finance management tips for young adults </h1>
                <p>Creating a monthly budget and sticking to a spending plan can help you get to a point where you have enough money, financial priorities, and spending habits without going into debt.</p>
                <div className='CTA-button'><Link to="/blog">Read blog</Link> </div>
            </div>
            <img src={FaqsPic} alt='Money Investment' className="faqs-pic" />
        </div>
    )
}

export default FaqsCTA