import React from "react";
import { graphql, Link } from "gatsby";
import Navbar from "../components/navbar";
import Fonts from "../fonts/fonts";
import HelmetComponent from "../components/helmet";
import "./style.css";

const Blog = ({ data }) => {
  const { posts } = data.blog;

  return (
    <>
      <Fonts />
      <HelmetComponent title="Blog" />
      <Navbar />
      <h1>My blog posts</h1>

      {posts.map((post) => (
        <article key={post.id}>
          <Link to={post.fields.slug}>
            <h2>{post.frontmatter.title}</h2>
          </Link>
          <small>
            {post.frontmatter.author}, {post.frontmatter.date}
          </small>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </>
  );
};

export default Blog;

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark {
      posts: nodes {
        fields {
          slug
        }
        frontmatter {
          date(fromNow: true)
          title
          author
        }
        excerpt
        id
      }
    }
  }
`;
