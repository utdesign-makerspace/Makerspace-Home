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
  box-shadow: 0 0.5em 1em -0.125em rgb(0 0 0 / 10%), 0 0px 0 1px rgb(0 0 0 / 2%);
  transition: box-shadow 0.2s;
  border-radius: 8px;

  :hover {
    box-shadow: 0 0.5em 1em -0.125em rgb(0 0 0 / 20%),
      0 0px 0 1px rgb(0 0 0 / 2%);
  }

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
  width: 400px;
  height: 150px;
  border-bottom: 2px solid #f0f0f0;
  border-radius: 8px 8px 0 0;
  /* 520 */
  @media screen and (max-width: 520px) {
    width: 100%;
  }
`;
