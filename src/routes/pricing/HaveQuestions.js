import { Link } from "react-router-dom";
import ScrollToTop from "../../helpers/ScrollToTop";
const HaveQuestions = () => {
    return (
        <article className='have-questions'>
            <section>
                <h2>Still have questions?</h2>
                <p>We are here to support you throughout your journey 24/7</p>
            </section>
            <Link to="/contact" className="basic-button" onClick={ScrollToTop}>Contact us</Link>
        </article>
    )
}


export default HaveQuestions;