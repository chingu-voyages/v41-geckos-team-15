import { Link } from 'react-router-dom';
import Partner1 from '../../assets/images/partner-logos/company-logo-1.jpg'
import Partner2 from '../../assets/images/partner-logos/company-logo-2.jpg'
import Partner3 from '../../assets/images/partner-logos/company-logo-3.jpg'
import Partner4 from '../../assets/images/partner-logos/company-logo-4.jpg'
import Partner5 from '../../assets/images/partner-logos/company-logo-5.jpg'
import Partner6 from '../../assets/images/partner-logos/company-logo-6.jpg'
const Features = () => {
    return (
        <article className='features'>
            <section className='feature-content'>
                <section>
                    <p>Expenseless features</p>
                    <h2>
                        What <span>Expenseless</span> brings to the table
                    </h2>
                    <p>With our personal finance app you do not need any experience! Just open the app, enter you income and add new expenses on the way! Very simple registration and tons of benefits lifetime!</p>
                    <Link to="./about">Read more &gt;</Link>
                </section>
                <section className='features-list'>
                    <section>
                        <h3>Track income & expenses</h3>
                        <p>Know where your money is going by adding income and expenses for any type transaction. You can have separate card, account and categories to keep things tidy</p>
                    </section>
                    <section>
                        <h3>Categorize your transactions</h3>
                        <p>Keep your transactions categorized to understand your earning & spending and to track your budgets. You can chexk trends, most used categories and much more</p>
                    </section>
                    <section>
                        <h3>Expense Reporting</h3>
                        <p>Each month we send you analytics of your expenses so you can keep track of the progress. You can also specify what kind of reports you need the most</p>
                    </section>
                    <section>
                        <h3>Unlimited categories</h3>
                        <p>Add any categories you wish or use the once we offer. It makes your finance process much easier and help you to understand where your money flows</p>
                    </section>
                </section>
            </section>
            <section className='feature-partners'>
                <section>
                    <h2>
                        Expenseless is your new best friend
                    </h2>
                    <p>
                        Our lifetime memebership gives you an all-access pass to almost all the features we have to offer. You change your plan and expand possibilities even further
                    </p>
                    <Link to="/about">Get started</Link>
                </section>
                <section className='partners'>
                    <img src={Partner1} alt='Expenseless partner' />
                    <img src={Partner2} alt='Expenseless partner' />
                    <img src={Partner3} alt='Expenseless partner' />
                    <img src={Partner4} alt='Expenseless partner' />
                    <img src={Partner5} alt='Expenseless partner' />
                    <img src={Partner6} alt='Expenseless partner' />
                </section>
            </section>
        </article>
    )
}

export default Features;