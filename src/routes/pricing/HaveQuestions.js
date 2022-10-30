import { Link } from "react-router-dom";

const HaveQuestions = () => {
    return (
        <article className='have-questions'>
            <section>
                <h2>Still have questions?</h2>
                <p>We are here to support you throughout your journey 24/7</p>
            </section>
            <Link to="/contact">Contact us</Link>
        </article>
    )
}


export default HaveQuestions;