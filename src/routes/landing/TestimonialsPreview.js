import customerTestimonials from "../../data/Testimonials";

const TestimonialsPreview = () => {
    return (
        <article className="testimonials-preview">
            <section className="testimonials-preview-content">
                <h2>Customer <span className='highlight-title'>testimonials</span>
                </h2>
                <p>This is what our customers have to say</p>
            </section>
            <section className="testimonials-list">
                {customerTestimonials.map((customer) =>
                    <section className="single-testimonial" key={customer.id}>
                        <img className="testimonial-rating" src={customer.rating} alt="" />
                        <p>{customer.testimonial}</p>
                        <section className="testimonial-author">
                            <img className="testimonial-icon" src={customer.icon} alt="" />
                            <section> <h3>{customer.name}</h3>
                                <p>{customer.profession}</p>
                            </section>
                        </section>
                    </section>
                )}
            </section>
        </article>
    )
}

export default TestimonialsPreview;