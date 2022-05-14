import React from "react";
import { FaBars, FaDiscord, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavSocials,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./elements";
import MakerspaceLogo from "../../images/navbarlogo.png";
import { animateScroll as scroll } from "react-scroll";

const goHome = () => {
  scroll.scrollToTop({ duration: 500, spy: true, exact: true });
};

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/" onClick={goHome}>
          <img src={MakerspaceLogo} height="40%" />
        </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks
              to="calendar"
              smooth={true}
              duration={500}
              spy={true}
              exact={true}
              offset={-80}
            >
              Calendar
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="training"
              smooth={true}
              duration={500}
              spy={true}
              exact={true}
              offset={-80}
            >
              Training
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="wiki"
              smooth={true}
              duration={500}
              spy={true}
              exact={true}
              offset={-80}
            >
              Wiki
            </NavLinks>
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
