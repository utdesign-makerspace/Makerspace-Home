import React, { useState } from "react";
import { useWindowDimensions } from "../lib/hooks";
import styled from "styled-components";

import Navbar from "../components/navbar/index";
import Sidebar from "../components/sidebar/index";
import HelmetComponent from "../components/helmet";
import HeroImage from "../components/heroimage";
import Footer from "../components/footer";
import Info from "../components/info";
import "./style.css";

import { FaArrowDown } from "react-icons/fa";
import WorkspaceImg from "../images/info/undraw_team_collaboration_re_ow29.svg";

const Infos = [
  {
    title: "A cosmic-scale event.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique risus nec feugiat in. Nulla aliquet enim tortor.",
    img: WorkspaceImg,
    imgAlt: "People collaborating on a project",
    buttonLink: "https://wiki.utd.ms/faq",
    buttonName: "Frequently Asked Questions",
  },
];

const Project2023Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { height, width } = useWindowDimensions();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <HelmetComponent title="Project 2023" />
      <Navbar
        toggle={toggle}
        absolute={width / height > 0.618996798}
        background={
          width / height > 0.618996798
            ? "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))"
            : "#01b7db"
        }
      />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      {width / height > 0.618996798 ? (
        <>
          <div
            style={{
              background: "#121212",
              height: "100vh",
              width: "100%",
              maskImage:
                "linear-gradient(rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%)",
              WebkitMaskImage:
                "linear-gradient(rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%)",

              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Video
              title="Project 2023 Teaser"
              frameborder="0"
              scrolling="no"
              type="text/html"
              allow="fullscreen;"
              src="https://www.youtube.com/embed/sOY9NRIhdkM"
            />
            <HeroImage
              filename={"project-2023/teaser-synth.png"}
              eager={true}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FaArrowDown
              style={{
                zIndex: 100,
                fontSize: "2.5em",
                color: "#fff",
                position: "absolute",
                bottom: "5vh",
              }}
            />
          </div>
        </>
      ) : (
        <iframe
          title="Project 2023 Teaser"
          frameborder="0"
          scrolling="no"
          type="text/html"
          allow="fullscreen;"
          src="https://www.youtube.com/embed/sOY9NRIhdkM"
          width="100%"
          height={width * (9 / 16)}
        />
      )}
      <Info info={Infos} />
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  --makerspace-red: #01b7db;
  --makerspace-red-hover: #0097b5;
  --makerspace-nav-hover: #fdd1ff;
  --makerspace-gray: #343a40;
  --makerspace-background-main: #fff;
  --makerspace-background-secondary: #f6f6f6;
  --makerspace-text: #fff;
  --makerspace-text-footer: #fff;

  background: #121212;
`;

const Video = styled.iframe`
  border: none;
  z-index: 10;
  margin-top: 4px;

  width: calc(100% * 0.333333333);
  aspect-ratio: 1.6;

  @media (max-aspect-ratio: 16/9) {
    width: calc(100vh * 0.37037037 * 1.6);
    height: calc(100vh * 0.37037037);
  }
`;

export default Project2023Page;
