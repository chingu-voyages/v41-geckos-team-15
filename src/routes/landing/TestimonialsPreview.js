import customerTestimonials from "../../data/Testimonials";

const TestimonialsPreview = () => {
    return (
        <article>
            <h2>Customer <span>testimonials</span>
            </h2>
            <p>This is what our customers have to say</p>
            <section className="testimonials-list">
                {customerTestimonials.map((customer) =>
                    <section className="single-testimonial">
                        <img src={customer.rating} alt="" />
                        <p>{customer.testimonial}</p>
                        <section>
                            <img src={customer.icon} alt="" />
                            <h3>{customer.name}</h3>
                            <p>{customer.profession}</p>
                        </section>
                    </section>
                )}
            </section>
        </article>
    )
}

export default TestimonialsPreview;