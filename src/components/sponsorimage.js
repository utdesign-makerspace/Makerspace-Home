import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const SponsorImage = (props) => (
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
          objectFit="contain"
          style={{
            width: "96px",
            height: "96px",
          }}
          formats={["auto", "webp"]}
        />
      );
    }}
  />
);

export default SponsorImage;
