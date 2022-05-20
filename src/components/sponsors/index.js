import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";
import {
  SponsorsContainer,
  SponsorsWrapper,
  SponsorsH1,
  SponsorsP,
  SponsorsText,
  SponsorLink,
  SponsorLinksContainer,
  SponsorImg,
  PartnersColumn,
  SponsorsColumn,
} from "./elements";

import AIAAImg from "../../images/sponsors/aiaa.png";
import DBFImg from "../../images/sponsors/dbf.png";
import IEEEImg from "../../images/sponsors/ieee.png";
import OpenImg from "../../images/sponsors/openutd.png";
import PRIDEImg from "../../images/sponsors/pride.png";
import RoboSubImg from "../../images/sponsors/robosub.png";
import SGDAImg from "../../images/sponsors/sgda.png";
import UTDesignImg from "../../images/sponsors/utdesign.svg";
import UTDallasDiscordImg from "../../images/sponsors/utdallasdiscord.png";

const sponsors = [
  {
    name: "UTDesign Capstone",
    img: UTDesignImg,
    link: "https://utdesign.utdallas.edu/",
  },
];
const partners = [
  {
    name: "American Institute of Aeronautics and Astronautics",
    img: AIAAImg,
    link: "https://www.instagram.com/aiaa_utd/",
  },
  {
    name: "Design Build Fly",
    img: DBFImg,
    link: "https://www.instagram.com/aiaa_utd/",
  },
  {
    name: "Institute of Electrical and Electronics Engineers",
    img: IEEEImg,
    link: "https://ieeeutd.org/",
  },
  {
    name: "OpenUTD",
    img: OpenImg,
    link: "https://openutd.club/",
  },
  {
    name: "PRIDE @ UTD",
    img: PRIDEImg,
    link: "https://www.prideutdallas.net/",
  },
  {
    name: "RoboSub",
    img: RoboSubImg,
    link: "https://discord.gg/5sVVqaRKpc",
  },
  {
    name: "Student Game Developer Association",
    img: SGDAImg,
    link: "https://utdsgda.club/",
  },
  {
    name: "UT Dallas Discord",
    img: UTDallasDiscordImg,
    link: "https://discord.gg/utdallas",
  },
];

const Sponsors = () => {
  const { ref, inView } = useInView({
    threshold: 0.25,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.5 },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <SponsorsContainer>
      <motion.div ref={ref} initial={{ y: 10, opacity: 0 }} animate={animation}>
        <SponsorsWrapper>
          <SponsorsColumn>
            <SponsorsText>
              <SponsorsH1>Sponsors</SponsorsH1>
              <SponsorsP>
                Our sponsors are groups and individuals that provide us with new
                technology, speakers for events, prizes, and general donations.
              </SponsorsP>
            </SponsorsText>
            <SponsorLinksContainer>
              {sponsors.map((item) => (
                <SponsorLink href={item.link} target="_blank">
                  <SponsorImg
                    src={item.img}
                    alt={item.name}
                    title={item.name}
                  />
                </SponsorLink>
              ))}
            </SponsorLinksContainer>
          </SponsorsColumn>
          <PartnersColumn>
            <SponsorsText>
              <SponsorsH1>Partners</SponsorsH1>
              <SponsorsP>
                Our partners are student groups that use the space frequently or
                help promote UTDesign Makerspace through their group.
              </SponsorsP>
            </SponsorsText>
            <SponsorLinksContainer>
              {partners.map((item) => (
                <SponsorLink href={item.link} target="_blank">
                  <SponsorImg
                    src={item.img}
                    alt={item.name}
                    title={item.name}
                  />
                </SponsorLink>
              ))}
            </SponsorLinksContainer>
          </PartnersColumn>
        </SponsorsWrapper>
      </motion.div>
    </SponsorsContainer>
  );
};

export default Sponsors;
