import styled from "styled-components";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export const BlogLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const BlogLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1260px;
  margin: 40px 40px;
`;

export const BlogLink = styled(Link)`
  margin: 10px 10px;
  width: 400px;
  text-decoration: none;
  border: 2px solid #eee;

  * {
    color: #000;
  }

  @media screen and (max-width: 520px) {
    width: 100%;
  }
`;

export const BlogLinkText = styled.div`
  padding: 8px 8px;
`;

export const BlogLinkThumbnail = styled(GatsbyImage)`
  object-fit: cover;
  width: 396px;
  height: 150px;
  border-bottom: 2px solid #eee;
  /* 520 */
  @media screen and (max-width: 520px) {
    width: 100%;
  }
`;
