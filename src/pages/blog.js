import React from "react";
import { graphql } from "gatsby";
import Navbar from "../components/navbar";
import Fonts from "../fonts/fonts";
import HelmetComponent from "../components/helmet";
import BlogComponent from "../components/blog";
import "./style.css";

const Blog = ({ data }) => {
  return (
    <>
      <Fonts />
      <HelmetComponent title="Blog" />
      <Navbar />
      <BlogComponent data={data} />
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
        }
        excerpt
        id
      }
    }
  }
`;
