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
} from "./elements";
import SponsorImage from "../sponsorimage";

const sponsors = [
  {
    name: "Dallas Makerspace",
    img: "sponsors/dallasmakerspace.png",
    link: "https://dallasmakerspace.org/",
  },
  {
    name: "ECS Student Council",
    img: "sponsors/ecsstuco.png",
    link: "https://www.instagram.com/utd.ecs.stuco/",
  },
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
    name: "Comet Cosplay",
    img: "sponsors/cosplay.png",
    link: "https://discord.gg/GcYmcUQf",
  },
  {
    name: "Comet Keyboards",
    img: "sponsors/keyboards.png",
    link: "https://discord.gg/5bSPh7GKMC",
  },
  {
    name: "Comet Robotics",
    img: "sponsors/combatrobotics.png",
    link: "https://linktr.ee/utdcombatrobotics",
  },
  {
    name: "Comet FIRST Alumni",
    img: "sponsors/cfa.png",
    link: "https://discord.gg/dkdZmJq",
  },
  // DBF merged with AIAA as of the end of the Spring 2023 semester
  // {
  //   name: "Design Build Fly",
  //   img: "sponsors/dbf.png",
  //   link: "https://www.instagram.com/aiaa_utd/",
  // },
  {
    name: "Institute of Electrical and Electronics Engineers",
    img: "sponsors/ieee.png",
    link: "https://ieeeutd.org/",
  },
  // OpenUTD quit hosting meetings at Makerspace as of 9/8/23
  // {
  //   name: "OpenUTD",
  //   img: "sponsors/openutd.png",
  //   link: "https://openutd.club/",
  // },
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
  {
    name: "Wind Energy Club",
    img: "sponsors/wec.png",
    link: "https://utd.link/wec",
  },
];

const Sponsors = () => {
  return (
    <SponsorsContainer>
      <SponsorsGroup
        name={"Sponsors"}
        description={
          "Our sponsors are groups and individuals that provide us with new technology, speakers for events, prizes, and general donations."
        }
        array={sponsors}
      />
      <SponsorsGroup
        name={"Partners"}
        description={
          "Our partners are student groups that use the space frequently or help promote UTDesign Makerspace through their group."
        }
        array={partners}
      />
    </SponsorsContainer>
  );
};

const SponsorsGroup = ({ name, description, array }) => {
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
    <motion.div ref={ref} initial={{ y: 10, opacity: 0 }} animate={animation}>
      <SponsorsWrapper>
        <SponsorsText>
          <SponsorsH1>{name}</SponsorsH1>
          <SponsorsP>{description}</SponsorsP>
        </SponsorsText>
        <SponsorLinksContainer>
          {array.map((item) => (
            <SponsorLink href={item.link} target="_blank">
              <SponsorImage filename={item.img} name={item.name} />
            </SponsorLink>
          ))}
        </SponsorLinksContainer>
      </SponsorsWrapper>
    </motion.div>
  );
};

export default Sponsors;
