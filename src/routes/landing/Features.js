import { Link } from 'react-router-dom';
import ScrollToTop from '../../helpers/ScrollToTop';
const Features = () => {
    return (
        <article className='features'>
            <section className='feature-content'>
                <section className='features-description'>
                    <p className='tagline'>Expenseless features</p>
                    <h2>
                        What <span className='highlight-title'>Expenseless</span> brings to the table
                    </h2>
                    <p>With our personal finance app you do not need any experience! Just open the app, enter you income and add new expenses on the way! Very simple registration and tons of benefits lifetime!</p>
                    <Link className='feature-btn basic-button' to="./about" onClick={ScrollToTop}>Read more &gt;</Link>
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

        </article>
    )
}

export default Features;