import React from "react";
import { Link } from "gatsby";

const Blog = ({ data }) => {
  const { posts } = data.blog;

  return (
    <>
      <h1>My blog posts</h1>

      {posts.map((post) => (
        <article key={post.id}>
          <Link to={post.fields.slug}>
            <h2>{post.frontmatter.title}</h2>
          </Link>
          <p>{post.frontmatter.description}</p>
          <small>{post.frontmatter.date}</small>
        </article>
      ))}
    </>
  );
};

export default Blog;
