import styled from "styled-components";

export const BlogPostWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const BlogPostContainer = styled.div`
  margin: 50px 32px;
  max-width: 700px;
`;

export const BlogPostContent = styled.section`
  display: flex;
  flex-direction: column;

  *:first-child {
    margin-top: 0px;
  }

  p {
    margin-top: 10px;
  }

  ul,
  ol {
    margin-top: 6px;
    margin-left: 15px;
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

  img {
    width: 100%;
    margin-top: 20px;
    padding-left: 100px;
    padding-right: 100px;
  }

  blockquote {
    color: #888;
    font-size: 0.8em;
    text-align: center;
  }
`;
