
import HaveQuestions from './HaveQuestions';
import './pricing.css';
import PricingComparison from './PricingComparison';
import PricingFeatures from './PricingFeatures';
import PricingPlans from './PricingPlans';

const Pricing = (props) => {
    return (
        <main className="pricing">
            <PricingPlans openSignup={props.openSignup} />
            <PricingFeatures />
            <PricingComparison openSignup={props.openSignup} />
            <HaveQuestions />
        </main>
    )
}

export default Pricing;