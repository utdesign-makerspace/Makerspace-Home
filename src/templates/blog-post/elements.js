import styled from "styled-components";

export const BlogPostWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const BlogPostContainer = styled.div`
  margin: 50px 20px;
  max-width: 1000px;
`;

export const BlogPostContent = styled.section`
  *:first-child {
    margin-top: 0px;
  }

  p {
    margin-top: 10px;
  }

  h2 {
    margin-top: 20px;
  }
`;
