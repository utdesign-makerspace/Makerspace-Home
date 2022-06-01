import React from "react";
import { graphql } from "gatsby";
import { getSrc } from "gatsby-plugin-image";
import Navbar from "../../components/navbar";
import HelmetComponent from "../../components/helmet";
import Footer from "../../components/footer";
import {
  BlogPostContainer,
  BlogPostContent,
  BlogPostWrapper,
  BlogPostNavigation,
  BlogPostNavigationWrapper,
} from "./elements";

export default function BlogPost({ data }) {
  const post = data.markdownRemark;

  const previousIndex =
    data.blog.posts.findIndex((p) => p.fields.slug === post.fields.slug) - 1;
  const nextIndex =
    data.blog.posts.findIndex((p) => p.fields.slug === post.fields.slug) + 1;

  const previous = previousIndex >= 0 ? data.blog.posts[previousIndex] : null;
  const next =
    nextIndex < data.blog.posts.length ? data.blog.posts[nextIndex] : null;

  return (
    <>
      <HelmetComponent
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={getSrc(post.frontmatter.thumbnail)}
      />
      <Navbar />
      <BlogPostWrapper>
        <BlogPostContainer>
          <h1>{post.frontmatter.title}</h1>
          <p>{post.frontmatter.description}</p>
          <small>
            {new Date(post.frontmatter.date).toLocaleString("default", {
              month: "long",
              day: "numeric",
              year: "numeric",
              timeZone: "UTC",
            })}
          </small>
          <BlogPostContent dangerouslySetInnerHTML={{ __html: post.html }} />
          {(next || previous) && (
            <BlogPostNavigationWrapper>
              <li>
                {previous && (
                  <BlogPostNavigation to={previous.fields.slug}>
                    {"« " + previous.frontmatter.title}
                  </BlogPostNavigation>
                )}
              </li>
              <li>
                {next && (
                  <BlogPostNavigation to={next.fields.slug}>
                    {next.frontmatter.title + " »"}
                  </BlogPostNavigation>
                )}
              </li>
            </BlogPostNavigationWrapper>
          )}
        </BlogPostContainer>
      </BlogPostWrapper>
      <Footer />
    </>
  );
}
export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        description
        date
        thumbnail {
          childImageSharp {
            gatsbyImageData(formats: [AUTO, WEBP])
          }
        }
      }
    }
    blog: allMarkdownRemark(sort: { fields: frontmatter___date, order: ASC }) {
      posts: nodes {
        fields {
          slug
        }
        frontmatter {
          title
        }
      }
    }
  }
`;
