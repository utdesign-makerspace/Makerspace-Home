import styled from "styled-components";
import { Link } from "gatsby";

export const LinkBannerContainer = styled(Link)`
  background: ${({ background }) => (background ? background : `#c1393d`)};
  color: #fff;
  text-decoration: none;

  height: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  top: 0;
  z-index: 10;
`;
