import React, { useState } from "react";
import { graphql } from "gatsby";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import HelmetComponent from "../components/helmet";
import BlogComponent from "../components/blog";
import Footer from "../components/footer";
import "./style.css";

const Blog = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HelmetComponent title="Blog" />
      <Navbar toggle={toggle} transparent={false} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <BlogComponent data={data} />
      <Footer />
    </>
  );
};

export default Blog;

export const pageQuery = graphql`
  query BlogQuery {
    blog: allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      posts: nodes {
        fields {
          slug
        }
        frontmatter {
          date
          title
          description
          thumbnail {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
        excerpt(pruneLength: 160)
      }
    }
  }
`;
