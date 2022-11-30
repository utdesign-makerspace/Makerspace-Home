import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLinkG,
  SidebarLinkA,
  SidebarWrapper,
  SidebarSocials,
  Social,
} from "./elements";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLinkG to="/blog">Blog</SidebarLinkG>
          <SidebarLinkG to="/calendar">Calendar</SidebarLinkG>
          <SidebarLinkG to="/store">Store</SidebarLinkG>
          <SidebarLinkA href="https://learn.utd.ms/">Training</SidebarLinkA>
          <SidebarLinkA href="https://wiki.utd.ms/">Wiki</SidebarLinkA>
          <SidebarSocials>
            <Social href="https://utd.ms/discord" target="_blank">
              <FaDiscord />
            </Social>
            <Social href="https://utd.ms/instagram" target="_blank">
              <FaInstagram />
            </Social>
            <Social href="https://utd.ms/youtube" target="_blank">
              <FaYoutube />
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
