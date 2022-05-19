import React from "react";
import { Helmet } from "react-helmet";
import Icon from "../../images/icon.png";
import AppleTouchIcon from "./apple-touch-icon.png";
import SafariPinnedTab from "./safari-pinned-tab.svg";

const HelmetComponent = ({ title }) => {
  const newTitle = title
    ? `UTDesign Makerspace - ${title}`
    : `UTDesign Makerspace`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{newTitle}</title>
      <meta name="title" content={newTitle} />
      <meta
        name="description"
        content="UTDesign Makerspace is a free-to-use place of innovation, collaboration, and education for all majors."
      />
      <meta name="theme-color" content="#c1393d" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="UTDesign Makerspace" />
      <meta
        property="og:description"
        content="UTDesign Makerspace is a free-to-use place of innovation, collaboration, and education for all majors."
      />
      <meta property="og:image" content={Icon} />

      {/* Twitter */}
      <meta property="twitter:title" content="UTDesign Makerspace" />
      <meta
        property="twitter:description"
        content="UTDesign Makerspace is a free-to-use place of innovation, collaboration, and education for all majors."
      />
      <meta property="twitter:image" content={Icon} />

      {/* Other */}
      <link rel="apple-touch-icon" sizes="180x180" href={AppleTouchIcon} />
      <link rel="mask-icon" href={SafariPinnedTab} color="#c1393d" />
      <meta name="msapplication-TileColor" content="#b91d47" />
    </Helmet>
  );
};

export default HelmetComponent;
