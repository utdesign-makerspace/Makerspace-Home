import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { LinkBannerContainer } from "./elements";

const LinkBanner = ({ text, url, background }) => {
  return (
    <LinkBannerContainer to={url} background={background}>
      {text}
      <FaArrowRight style={{ marginLeft: "8px" }} />
    </LinkBannerContainer>
  );
};

export default LinkBanner;
