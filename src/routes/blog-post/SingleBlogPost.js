import { useEffect, useState } from 'react';
import {  useLocation } from 'react-router-dom';
import blogPosts from '../../data/BlogPosts';
import BlogNewsletter from '../blog/BlogNewsletter';
import './singleBlogPost.css';


const SingleBlogPost = () => {
    const { pathname } = useLocation();
    const [targetPost, setTargetPost] = useState('');
    const [blogPost, setBlogPost] = useState('');
    useEffect(() => {
       const removePath =  pathname.replace(/\/blog\//, '');
       const filterPath = removePath.replace(/%20/g, ' ');
        setTargetPost(filterPath);
        blogPosts.map(item => {
            if(item.title === targetPost) {
                setBlogPost(item);
            }
        })
    }, [pathname, targetPost]);

    return(
        <main>
            <article className='post'>
            <section className='post-header'>
            <h2>{blogPost.title}</h2>
            <p>{blogPost.snippet}</p>
            </section>
            <img className="blog-cover" src={blogPost.img} alt={blogPost.title} />
            <section className='post-info'>
           <p>{blogPost.author}</p>
           <p>·</p>
           <p>{blogPost.date}</p>
           <p>·</p>
           <p>{blogPost.readTime}</p>
           </section>
            <p className='post-content'>{blogPost.content}</p>
            </article>
            <BlogNewsletter/>
        </main>
    
    )
}
export default SingleBlogPost;