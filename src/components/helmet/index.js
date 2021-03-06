import React from "react";
import { Helmet } from "react-helmet";
import Icon from "../../images/icon.png";
import AppleTouchIcon from "./apple-touch-icon.png";
import SafariPinnedTab from "./safari-pinned-tab.svg";

const HelmetComponent = ({ title, description, image }) => {
  const newTitle = title
    ? `${title} - UTDesign Makerspace`
    : `UTDesign Makerspace`;

  const newDescription = description
    ? description
    : "UTDesign Makerspace is a free-to-use place of innovation, collaboration, and education for all majors.";

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{newTitle}</title>
      <meta name="title" content={title ? title : "UTDesign Makerspace"} />
      <meta name="description" content={newDescription} />
      <meta name="theme-color" content="#c1393d" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={image ? "article" : "website"} />
      <meta
        property="og:title"
        content={title ? title : "UTDesign Makerspace"}
      />
      <meta property="og:site_name" content="UTDesign Makerspace" />
      <meta property="og:description" content={newDescription} />
      <meta property="og:image" content={image ? image : Icon} />

      {/* Twitter */}
      <meta
        property="twitter:title"
        content={title ? title : "UTDesign Makerspace"}
      />
      <meta property="twitter:description" content={newDescription} />
      <meta property="twitter:image" content={image ? image : Icon} />
      {image && <meta property="twitter:card" content="summary_large_image" />}

      {/* Other */}
      <link rel="apple-touch-icon" sizes="180x180" href={AppleTouchIcon} />
      <link rel="mask-icon" href={SafariPinnedTab} color="#c1393d" />
      <meta name="msapplication-TileColor" content="#b91d47" />
    </Helmet>
  );
};

export default HelmetComponent;
