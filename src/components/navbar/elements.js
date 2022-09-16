import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link } from "gatsby";

export const Nav = styled.nav`
  background: ${({ background }) => (background ? background : `#c1393d`)};
  position: ${({ absolute }) => (absolute ? "absolute" : "static")};
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  top: 0;
  z-index: 10;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  min-width: 0;
`;

export const NavLogoImg = styled.img`
  height: 32px;

  @media screen and (max-width: 768px) {
    height: 24px;
  }

  @media screen and (max-width: 350px) {
    height: 16px;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    color: #fff;
    display: flex;
    justify-self: flex-end;
    align-items: center;
    margin-right: 24px;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  padding: 0 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  :last-of-type {
    padding-right: 0;
  }

  @media screen and (max-width: 900px) {
    padding: 0.5rem;
  }
  @media screen and (max-width: 820px) {
    padding: 0.3rem;
  }
`;

export const NavLinkS = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: #f2d1c9;
  }
`;

export const NavLinkG = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: #f2d1c9;
  }
`;

export const NavLinkA = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: #f2d1c9;
  }
`;

export const NavSocials = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 10px;
  height: 100%;
  cursor: pointer;
  transition: 0.2s;

  :first-of-type {
    padding-left: 0;
  }

  :last-of-type {
    padding-right: 0;
  }

  &:hover {
    color: #f2d1c9;
  }
`;
