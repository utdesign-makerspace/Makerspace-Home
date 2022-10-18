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

import { FaArrowDown, FaQuestion, FaYoutube, FaUserPlus } from "react-icons/fa";
import WorkspaceImg from "../images/info/undraw_team_collaboration_re_ow29.svg";
import Sponsors from "../components/sponsors";
import Accordion from "../components/accordion";

const Infos = [
  {
    title: "A cosmic-scale event.",
    description:
      "UTDesign Makerspace is proud to announce Got Game 2023, a three-day event that will bring together creative minds to develop games for PC and an arcade cabinet.",
    img: WorkspaceImg,
    imgAlt: "People collaborating on a project",
    buttonLink: "https://utd.ms/",
    buttonName: "Learn More About UTDesign Makerspace",
    buttonIcon: FaQuestion,
  },
  {
    title: "Available to all Comets.",
    description:
      "Got Game 2023 will be fully available in-person to all UT Dallas students, and will also be available online through our YouTube channel to all participants worldwide.",
    img: WorkspaceImg,
    imgAlt: "People collaborating on a project",
    buttonLink: "https://www.youtube.com/channel/UC3G92uIpEy31awnKisxhGWg",
    buttonName: "YouTube Channel",
    buttonIcon: FaYoutube,
  },
  {
    title: "Limited availability.",
    description:
      "We expect Got Game 2023 to be one of our biggest events yet, so make sure to sign up ASAP to guarantee your spot in-person for free food, merch, industry talks, and more.",
    img: WorkspaceImg,
    imgAlt: "People collaborating on a project",
    buttonLink: "https://www.youtube.com/channel/UC3G92uIpEy31awnKisxhGWg",
    buttonName: "Sign Up",
    buttonIcon: FaUserPlus,
  },
];

const sponsors = [
  {
    name: "UTDesign Capstone",
    img: "sponsors/utdesign.png",
    link: "https://utdesign.utdallas.edu/",
  },
];
const partners = [
  {
    name: "UT Dallas Esports",
    img: "sponsors/esports_dark.png",
    link: "https://esports.utdallas.edu/",
  },
  {
    name: "Student Game Developer Association",
    img: "sponsors/sgda.png",
    link: "https://utdsgda.club/",
  },
];
const sponsorsGroups = [
  {
    name: "Sponsors",
    description:
      "Sponsors are groups providing food, merchandise, prizes, and other amenities.",
    array: sponsors,
  },
  {
    name: "Partners",
    description:
      "Partners are student groups helping us run and promote Got Game.",
    array: partners,
  },
];

const accordionValues = [
  {
    title: "This is an example question?",
    content: "This is your example answer. It can be as long as necessary!",
  },
  {
    title: "Where will the event be taking place?",
    content:
      "Got Game will take place in UTDesign Makerspace but be accessible online.",
  },
];

const GotGamePage = () => {
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
      <Accordion values={accordionValues} />
      <Sponsors sponsorArr={sponsorsGroups} />
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  --makerspace-red: #01b7db;
  --makerspace-red-hover: #0097b5;
  --makerspace-nav-hover: #fdd1ff;
  --makerspace-gray: #343a40;
  --makerspace-background-main: #121212;
  --makerspace-background-secondary: #242424;
  --makerspace-text: #fff;
  --makerspace-text-footer: #fff;
  --makerspace-accordion-title: #fff;

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

export default GotGamePage;
