import React from 'react';
import './css/Blog.css';

const Blog = () => {
    const posts = [
        {
            title: 'Exploring the Universe',
            description: 'A deep dive into the wonders of the cosmos and the discoveries made by the Hubble Space Telescope.',
            imageUrl: 'https://hubblesite.org/images/news/images/large/9493_1612854288.jpg',
        },
        {
            title: 'The Life Cycle of Stars',
            description: 'An exploration of how stars are born, live, and die in the universe.',
            imageUrl: 'https://hubblesite.org/images/news/images/large/9493_1612854288.jpg',
        },
        {
            title: 'Galaxies and Their Secrets',
            description: 'A look at the various types of galaxies and the secrets they hold.',
            imageUrl: 'https://hubblesite.org/images/news/images/large/9493_1612854288.jpg',
        },
    ];

    return (
        <div className="blog-container">
            <h1 className="blog-title">Hubble Space Telescope Blog</h1>
            <div className="blog-posts">
                {posts.map((post, index) => (
                    <div key={index} className="blog-post">
                        <img src={post.imageUrl} alt={post.title} className="post-image" />
                        <h2 className="post-title">{post.title}</h2>
                        <p className="post-description">{post.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
