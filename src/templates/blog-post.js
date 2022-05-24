import React from "react";
import { graphql } from "gatsby";
import Navbar from "../components/navbar";
import Fonts from "../fonts/fonts";
import HelmetComponent from "../components/helmet";

export default function BlogPost({ data }) {
  const post = data.markdownRemark;

  return (
    <>
      <Fonts />
      <HelmetComponent title={post.frontmatter.title} />
      <Navbar />
      <h1>{post.frontmatter.title}</h1>
      <small>
        {new Date(post.frontmatter.date).toLocaleString("default", {
          month: "long",
          day: "numeric",
          year: "numeric",
          timeZone: "UTC",
        })}
      </small>
      <section dangerouslySetInnerHTML={{ __html: post.html }} />
    </>
  );
}
export const query = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`;
