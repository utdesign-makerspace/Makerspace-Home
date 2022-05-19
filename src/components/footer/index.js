import React from "react";
import {
  FooterContainer,
  FooterLogo,
  FooterP,
  FooterCopyright,
  FooterWrapper,
} from "./elements";
import MakerspaceLogo from "../../images/navbarlogo.png";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <FooterLogo src={MakerspaceLogo} />
          <FooterCopyright>
            © 2022, UTDesign Makerspace. All rights reserved.
          </FooterCopyright>
          <FooterP>
            This website is not an official publication of UT Dallas and does
            not represent the views of the university or its officers. The
            University of Texas at Dallas is an Equal Opportunity/Affirmative
            Action University. Students with disabilities needing special
            assistance to attend please call (972&#8209;883&#8209;2946). Texas
            Relay Operation: 1&#8209;800&#8209;RELAYTX.
          </FooterP>
        </FooterWrapper>
      </FooterContainer>
    </>
  );
};

export default Footer;
