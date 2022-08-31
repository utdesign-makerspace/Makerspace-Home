import React from "react";
import { FaBars, FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavSocials,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinkA,
  NavLinkG,
  NavLogoImg,
} from "./elements";
import MakerspaceLogo from "../../images/navbarlogo.svg";
import { animateScroll as scroll } from "react-scroll";

const goHome = () => {
  scroll.scrollToTop({ duration: 500, spy: true, exact: true });
};

const Navbar = ({ toggle, transparent }) => {
  return (
    <Nav transparent={transparent}>
      <NavbarContainer>
        <NavLogo to="/" onClick={goHome}>
          <NavLogoImg src={MakerspaceLogo} />
        </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinkG to="/blog">Blog</NavLinkG>
          </NavItem>
          <NavItem>
            <NavLinkG to="/calendar">Calendar</NavLinkG>
          </NavItem>
          <NavItem>
            <NavLinkG to="/store">Store</NavLinkG>
          </NavItem>
          <NavItem>
            <NavLinkA href="https://learn.utd.ms/">Training</NavLinkA>
          </NavItem>
          <NavItem>
            <NavLinkA href="https://wiki.utd.ms/">Wiki</NavLinkA>
          </NavItem>
          <NavItem>
            <NavSocials href="https://discord.gg/VQzQMnnWnx" target="_blank">
              <FaDiscord />
            </NavSocials>
            <NavSocials
              href="https://www.instagram.com/utdmakerspace/"
              target="_blank"
            >
              <FaInstagram />
            </NavSocials>
            <NavSocials
              href="https://www.youtube.com/channel/UC3G92uIpEy31awnKisxhGWg"
              target="_blank"
            >
              <FaYoutube />
            </NavSocials>
            <NavSocials href="mailto:utdmakerspace@gmail.com" target="_blank">
              <MdEmail />
            </NavSocials>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
