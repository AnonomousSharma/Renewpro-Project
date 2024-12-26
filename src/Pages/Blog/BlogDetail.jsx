import React from "react";
import "./BlogDetail.css";
import { useParams, useNavigate } from "react-router-dom";
import blogs from "../data/blogs";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const blog = blogs.find((blog) => blog.id === parseInt(id, 10));

  if (!blog) {
    return <h1>Blog Not Found</h1>;
  }

  return (
    <div className="blog-detail">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back to Blogs
      </button>
      <h1>{blog.title}</h1>
      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: blog.fullContent }}
      ></div>
    </div>
  );
};

export default BlogDetail;
