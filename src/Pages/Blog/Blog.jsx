import React from "react";
import "./Blog.css";
import blogs from "../data/blogs";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="blog-list">
      <h1 className="blog-list-title">Our Latest Blogs</h1>
      <div className="blog-container">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            
            <h2>{blog.title}</h2>
            <p>{blog.description}</p>
            <Link to={`/blog/${blog.id}`} className="read-more">
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;




