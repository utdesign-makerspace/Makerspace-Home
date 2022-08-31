import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const MerchImage = (props) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                gatsbyImageData(placeholder: NONE)
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n) => {
        return n.node.relativePath.includes(props.filename);
      });
      if (!image) {
        return null;
      }

      return (
        <GatsbyImage
          image={image.node.childImageSharp.gatsbyImageData}
          alt={props.name}
          title={props.name}
          layout="fixed"
          objectFit="cover"
          style={{
            width: "300px",
            height: "300px",
            borderBottom: "2px solid #f0f0f0",
            borderRadius: "8px 8px 0 0",
          }}
          formats={["auto", "webp"]}
          backgroundColor={"#f9f9f9"}
        />
      );
    }}
  />
);

export default MerchImage;
