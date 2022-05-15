import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarWrapper,
  SidebarSocials,
  Social,
} from "./elements";
import { FaDiscord, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to="calendar"
            smooth={true}
            duration={500}
            spy={true}
            exact={true}
            offset={-80}
            onClick={toggle}
          >
            Calendar
          </SidebarLink>
          <SidebarLink
            to="training"
            smooth={true}
            duration={500}
            spy={true}
            exact={true}
            offset={-80}
            onClick={toggle}
          >
            Training
          </SidebarLink>
          <SidebarLink
            to="wiki"
            smooth={true}
            duration={500}
            spy={true}
            exact={true}
            offset={-80}
            onClick={toggle}
          >
            Wiki
          </SidebarLink>
          <SidebarSocials>
            <Social href="https://discord.gg/VQzQMnnWnx" target="_blank">
              <FaDiscord />
            </Social>
            <Social
              href="https://www.instagram.com/utdmakerspace/"
              target="_blank"
            >
              <FaInstagram />
            </Social>
            <Social href="mailto:utdmakerspace@gmail.com" target="_blank">
              <MdEmail />
            </Social>
          </SidebarSocials>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
