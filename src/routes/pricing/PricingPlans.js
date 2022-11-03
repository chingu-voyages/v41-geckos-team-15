import Check from '../../assets/images/vectors/check.jpg'
import { useState } from 'react';
const PricingPlans = ({ openSignup }) => {
    const [activePlan, setActivePlan] = useState('monthly');

    const setPricingPlan = (plan) => {
        setActivePlan(plan);
    }
    return (
        <article >
            <section className='pricing-content'>
                <p className='tagline'>Expenseless</p>
                <h2>Pricing plan</h2>
                <p>Two options, enless benefits. Choose your option</p>
            </section>
            <section className="billing">
                <button type="button" onClick={() => setPricingPlan('monthly')} className={`plan-btn${activePlan === 'monthly' ? ` active` : ``}`}>Monthly billing</button>
                <button type="button" onClick={() => setPricingPlan('annual')} className={`plan-btn${activePlan === 'annual' ? ` active` : ``}`}>Annual billing</button>
            </section>
            <section className="main-pricing-grid">
                <section className="basic-plan">
                    <section>
                        <h3>Basic plan</h3>
                        <p>For Beginners</p>
                    </section>

                    <hr />
                    <h4>$0/mo</h4>
                    <button type="button" onClick={openSignup}>Get Started</button>
                    <hr />
                    <ul className='pricing-list'>
                        <li><img src={Check} alt="" /> <p>App Store or Play Store</p></li>
                        <li><img src={Check} alt="" /> <p>All Countries</p></li>
                        <li><img src={Check} alt="" /> <p>Connect banks for auto-sync</p></li>
                    </ul>
                </section>
                <section className="business-plan">
                    <section>
                        <h3>Business plan</h3>
                        <p>More Space to Grow</p>
                    </section>
                    <hr />
                    {activePlan === 'monthly' ? <h4>$29/mo</h4> : <h4><span className='old-pricing'>$348/y </span> $260/y</h4>}
                    <button type="button" onClick={openSignup}>Get Started</button>
                    <hr />
                    <ul className='pricing-list'>
                        <li><img src={Check} alt="" /> <p>App Store or Play Store</p></li>
                        <li><img src={Check} alt="" /> <p>All Countries</p></li>
                        <li><img src={Check} alt="" /> <p>Connect banks for auto-sync</p></li>
                        <li><img src={Check} alt="" /> <p>Exclusive Premium features</p></li>
                        <li><img src={Check} alt="" /> <p>Optional Invoicing</p></li>
                    </ul>
                </section>
            </section>
        </article>
    )
}

export default PricingPlans;