import React from "react";
import { graphql } from "gatsby";
import Navbar from "../components/navbar";
import HelmetComponent from "../components/helmet";
import BlogComponent from "../components/blog";
import Footer from "../components/footer";
import "./style.css";

const Blog = ({ data }) => {
  return (
    <>
      <HelmetComponent title="Blog" />
      <Navbar />
      <BlogComponent data={data} />
      <Footer />
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
