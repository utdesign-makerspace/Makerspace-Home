import React from "react";
import {
  BlogLink,
  BlogLinkWrapper,
  BlogLinkThumbnail,
  BlogLinkText,
  BlogLinkContainer,
} from "./elements";

const Blog = ({ data }) => {
  const { posts } = data.blog;

  return (
    <>
      <BlogLinkWrapper>
        <BlogLinkContainer>
          {posts.map((post) => (
            <>
              <BlogLink to={post.fields.slug}>
                <BlogLinkThumbnail
                  image={
                    post.frontmatter.thumbnail.childImageSharp.gatsbyImageData
                  }
                />
                <BlogLinkText key={post.id}>
                  <h2>{post.frontmatter.title}</h2>
                  <p>{post.frontmatter.description}</p>
                  <small>{post.frontmatter.date}</small>
                </BlogLinkText>
              </BlogLink>
            </>
          ))}
        </BlogLinkContainer>
      </BlogLinkWrapper>
    </>
  );
};

export default Blog;
