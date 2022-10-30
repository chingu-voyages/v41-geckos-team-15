import PricingCover from '../../assets/images/pricing/pricing-cover.jpg';

const PricingFeatures = () => {
    return (
        <article className='pricing-features'>
            <section className='pricing-feature'>
                <section>
                    <h3>Save  <span className='highlight-title'>time</span></h3>
                    <p>No more need to spend hours on trying to figure out the expenses and incomes yourself. We have created an amazing solution for you that will save your time</p>
                </section>
                <section>
                    <h3>Track <span className='highlight-title'>money</span></h3>
                    <p>Tracking money has never been easier! With various cards, accounts, categories and labels you can easily and effortlessly track your expenses and incomes</p>
                </section>
                <section>
                    <h3>Get important <span className='highlight-title'>insights</span></h3>
                    <p>Even if you keep track of your expenses or incomes, it’s hard to understand the overall statistics just by daily tracking. We are offering you weekly, monthly and annual reports to better understand your expenses</p>
                </section>
            </section>
            <img src={PricingCover} alt='Calculator' />
        </article>
    )
}

export default PricingFeatures;