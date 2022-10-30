import "./faq.css"
import FaqsQuestions from "./FaqsQuestions.js"
import HaveQuestions from "../pricing/HaveQuestions"
import FaqsCTA from "./FaqsCTA"

const Faq = () => {
    return (
        <div>
            <FaqsQuestions />
            <HaveQuestions />
            <FaqsCTA />
        </div>
    )
}

export default Faq;