import { Link } from "react-router-dom";
import blogPosts from "../../data/BlogPosts";
import './blog.css';
import BlogNewsletter from "./BlogNewsletter";
import ScrollToTop from "../../helpers/ScrollToTop";

const Blog = () => {
    return (
        <main className="blog">
            <article>
                <section className="blog-title">
                    <p className='tagline'>Blog</p>
                    <h2>All about expenses and so much more</h2>
                    <p>Discover the latest news and insights in expense management innovation</p>
                </section>
                <section className="blog-grid">
                    {blogPosts.map(post =>
                        <section className="blog-post" key={post.id}>
                            <img className="blog-cover" src={post.img} alt={post.title} />
                            <Link to={`${post.title}`} className="link-to-post" onClick={ScrollToTop}>
                            <h3>{post.title}</h3>
                            <p>{post.snippet}</p>
                            </Link>
                            <section className="blog-info">
                                <img src={post.authorImg} alt={post.author} />
                                <section>
                                    <h4>{post.author}</h4>
                                    <section>
                                        <p>{post.date}</p>
                                        <p>·</p>
                                        <p>{post.readTime}</p>
                                    </section>
                                </section>
                            </section>
                        </section>
                    )}
                </section>
            </article>
            <BlogNewsletter />
        </main>
    )
}

export default Blog;