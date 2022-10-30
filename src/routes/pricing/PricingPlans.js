import Check from '../../assets/images/vectors/check.jpg'

const PricingPlans = () => {
    return (
        <article >
            <section className='pricing-content'>
                <p className='tagline'>Expenseless</p>
                <h2>Pricing plan</h2>
                <p>Two options, enless benefits. Choose your option</p>
            </section>
            <section className="billing">
                <button type="button">Monthly billing</button>
                <button type="button">Annual billing</button>
            </section>
            <section className="main-pricing-grid">
                <section className="basic-plan">
                    <section>
                        <h3>Basic plan</h3>
                        <p>For Beginners</p>
                    </section>

                    <hr />
                    <h4>$0/mo</h4>
                    <button type="button">Get Started</button>
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
                    <h4>$29/mo</h4>
                    <button type="button">Get Started</button>
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