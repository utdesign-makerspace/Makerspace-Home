import React from "react";
import {
  BlogLink,
  BlogLinkWrapper,
  BlogLinkThumbnail,
  BlogLinkText,
  BlogLinkContainer,
} from "./elements";
import moment from "moment";

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
                  <h3>{post.frontmatter.title}</h3>
                  <p>{post.frontmatter.description}</p>
                  <small>
                    {moment(post.frontmatter.date).local().fromNow()}
                  </small>
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
