import React from "react";
import { graphql } from "gatsby";
import Navbar from "../../components/navbar";
import HelmetComponent from "../../components/helmet";
import Footer from "../../components/footer";
import {
  BlogPostContainer,
  BlogPostContent,
  BlogPostWrapper,
} from "./elements";

export default function BlogPost({ data }) {
  const post = data.markdownRemark;

  return (
    <>
      <HelmetComponent title={post.frontmatter.title} />
      <Navbar />
      <BlogPostWrapper>
        <BlogPostContainer>
          <h1>{post.frontmatter.title}</h1>
          <small>
            {new Date(post.frontmatter.date).toLocaleString("default", {
              month: "long",
              day: "numeric",
              year: "numeric",
              timeZone: "UTC",
            })}
          </small>
          <br />
          <br />
          <BlogPostContent dangerouslySetInnerHTML={{ __html: post.html }} />
        </BlogPostContainer>
      </BlogPostWrapper>
      <Footer />
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
