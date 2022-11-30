import React from "react";
import {
  FooterContainer,
  FooterLogo,
  FooterSOC,
  FooterWrapper,
  FooterBigColumn,
  FooterColumn,
  FooterSpacerColumn,
  FooterColumnHeader,
  FooterLink,
  FooterText,
} from "./elements";
import MakerspaceLogo from "../../images/navbarlogo.svg";
import { CgExternal } from "react-icons/cg";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <FooterBigColumn>
            <FooterLogo src={MakerspaceLogo} />
            <FooterText>Dream it. Make it. Share it.</FooterText>
          </FooterBigColumn>
          <FooterSpacerColumn />
          <FooterColumn>
            <FooterColumnHeader>Services</FooterColumnHeader>
            <FooterLink href="https://utd.ms/blog">Blog</FooterLink>
            <FooterLink href="https://utd.ms/calendar">Calendar</FooterLink>
            <FooterLink href="https://utd.ms/store">Store</FooterLink>
            <FooterLink href="https://learn.utd.ms/">Training</FooterLink>
            <FooterLink href="https://wiki.utd.ms/">Wiki</FooterLink>
          </FooterColumn>
          <FooterColumn>
            <FooterColumnHeader>Social Media</FooterColumnHeader>
            <FooterLink href="https://utd.ms/discord">Discord</FooterLink>
            <FooterLink href="mailto:utdmakerspace@gmail.com">Email</FooterLink>
            <FooterLink href="https://utd.ms/github">GitHub</FooterLink>
            <FooterLink href="https://utd.ms/instagram">Instagram</FooterLink>
            <FooterLink href="https://utd.ms/linkedin">LinkedIn</FooterLink>
            <FooterLink href="https://utd.ms/youtube">YouTube</FooterLink>
          </FooterColumn>
          <FooterColumn>
            <FooterColumnHeader>Resources</FooterColumnHeader>
            <FooterLink href="https://wiki.utd.ms/faq#events-and-student-organizations">
              Organizations
            </FooterLink>
            <FooterLink href="https://utdesign.utdallas.edu/">
              UTDesign Capstone <CgExternal />
            </FooterLink>
            <FooterLink href="https://epics.utdallas.edu/">
              UTDesign EPICS <CgExternal />
            </FooterLink>
          </FooterColumn>
          <FooterColumn>
            <FooterColumnHeader>Policies</FooterColumnHeader>
            <FooterLink href="https://wiki.utd.ms/rules">Rules</FooterLink>
            <FooterLink href="https://wiki.utd.ms/faq">FAQ</FooterLink>
            <FooterLink href="https://wiki.utd.ms/code-of-ethics">
              Ethics
            </FooterLink>
            <FooterLink href="https://wiki.utd.ms/safety">Safety</FooterLink>
          </FooterColumn>
        </FooterWrapper>
        <FooterSOC>
          This website is not an official publication of UT Dallas and does not
          represent the views of the university or its officers. The University
          of Texas at Dallas is an Equal Opportunity/Affirmative Action
          University. Students with disabilities needing special assistance to
          attend events please call (972&#8209;883&#8209;2946). Texas Relay
          Operation: 1&#8209;800&#8209;RELAYTX.
        </FooterSOC>
      </FooterContainer>
    </>
  );
};

export default Footer;
