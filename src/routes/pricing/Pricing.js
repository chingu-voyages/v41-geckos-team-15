
import HaveQuestions from './HaveQuestions';
import './pricing.css';
import PricingComparison from './PricingComparison';
import PricingFeatures from './PricingFeatures';
import PricingPlans from './PricingPlans';

const Pricing = () => {
    return (
        <main className="pricing">
            <PricingPlans />
            <PricingFeatures />
            <PricingComparison />
            <HaveQuestions />
        </main>
    )
}

export default Pricing;