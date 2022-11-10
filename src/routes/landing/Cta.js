import Partner1 from '../../assets/images/partner-logos/company-logo-1.jpg'
import Partner2 from '../../assets/images/partner-logos/company-logo-2.jpg'
import Partner3 from '../../assets/images/partner-logos/company-logo-3.jpg'
import Partner4 from '../../assets/images/partner-logos/company-logo-4.jpg'
import Partner5 from '../../assets/images/partner-logos/company-logo-5.jpg'
import Partner6 from '../../assets/images/partner-logos/company-logo-6.jpg'

const Cta = ({ openSignup }) => {
    return (
        <section className='cta'>
            <section className='cta-content'>
                <h2>
                    Expenseless is your new best friend
                </h2>
                <p>
                    Our lifetime memebership gives you an all-access pass to almost all the features we have to offer. You change your plan and expand possibilities even further
                </p>
                <button type='button' className='basic-button' onClick={openSignup}>Get started</button>
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
    )
}

export default Cta;