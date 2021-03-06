import styled from "styled-components";
import { Link } from "gatsby";

export const BlogPostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const BlogPostContainer = styled.div`
  margin: 50px 32px;
  max-width: 700px;
`;

export const BlogPostContent = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  margin-top: 20px;
  border-top: 2px solid #eee;

  a {
    color: #c1393d;
    text-decoration: none;
  }

  *:first-child {
    margin-top: 0px;
  }

  p {
    margin-top: 10px;
  }

  ul,
  ol {
    margin-top: 6px;
    padding-inline-start: 24px;
  }

  li {
    margin-top: 4px;
    margin-bottom: 4px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 20px;
  }

  h1 {
    font-size: 1.5em;
  }

  .gatsby-resp-image-figure {
    margin-top: 20px;
  }

  .gatsby-resp-image-figcaption {
    margin-top: 2px;
    color: #888;
    font-size: 0.8em;
    text-align: center;
  }
`;

export const BlogPostNavigation = styled(Link)`
  text-decoration: none;
  font-weight: bolder;
  color: #c1393d;
`;

export const BlogPostNavigationWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  margin-top: 50px;
  max-width: 100%;
`;

export const BlogPostHeader = styled.div`
  padding-bottom: 10px;
`;
