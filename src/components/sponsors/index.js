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
  PartnersColumn,
  SponsorsColumn,
} from "./elements";
import SponsorImage from "../sponsorimage";

const sponsors = [
  {
    name: "UTDesign Capstone",
    img: "sponsors/utdesign.png",
    link: "https://utdesign.utdallas.edu/",
  },
];
const partners = [
  {
    name: "American Institute of Aeronautics and Astronautics",
    img: "sponsors/aiaa.png",
    link: "https://www.instagram.com/aiaa_utd/",
  },
  {
    name: "Design Build Fly",
    img: "sponsors/dbf.png",
    link: "https://www.instagram.com/aiaa_utd/",
  },
  {
    name: "Institute of Electrical and Electronics Engineers",
    img: "sponsors/ieee.png",
    link: "https://ieeeutd.org/",
  },
  {
    name: "OpenUTD",
    img: "sponsors/openutd.png",
    link: "https://openutd.club/",
  },
  {
    name: "RoboSub",
    img: "sponsors/robosub.png",
    link: "https://discord.gg/5sVVqaRKpc",
  },
  {
    name: "Student Game Developer Association",
    img: "sponsors/sgda.png",
    link: "https://utdsgda.club/",
  },
  {
    name: "UT Dallas Discord",
    img: "sponsors/utdallasdiscord.png",
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
                  <SponsorImage filename={item.img} name={item.name} />
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
                  <SponsorImage filename={item.img} name={item.name} />
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
