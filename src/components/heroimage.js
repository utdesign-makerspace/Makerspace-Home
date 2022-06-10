import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const HeroImage = (props) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile(filter: { relativePath: { regex: "/hero/.+/g" } }) {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                gatsbyImageData(quality: 100, layout: CONSTRAINED)
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
          placeholder="blurred"
          layout="fixed"
          objectFit="cover"
          width={1920}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
          }}
          formats={["webp"]}
        />
      );
    }}
  />
);

export default HeroImage;
