import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const HeroImage = (props) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                gatsbyImageData(
                  quality: 100
                  layout: CONSTRAINED
                  placeholder: NONE
                )
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
          layout="fixed"
          objectFit="cover"
          width={1920}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
          }}
          formats={["auto", "webp"]}
          loading={props.eager ? "eager" : "lazy"}
        />
      );
    }}
  />
);

export default HeroImage;
