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

const biggerSponsors = [
  // On-going sponsor as they provide us with equipment and space
  // (NOTE: We only use this if we're low on sponsors to keep the list short)
  // {
  //   name: "UTDesign Capstone",
  //   img: "sponsors/utdesign.png",
  //   link: "https://utdesign.utdallas.edu/",
  // },

  // On-going sponsor as they provide us with equipment and use our space for community service
  // (NOTE: We only use this if we're low on sponsors to keep the list short)
  // {
  //   name: "UTDesign EPICS",
  //   img: "sponsors/epics.png",
  //   link: "https://epics.utdallas.edu/",
  // },

  // Sponsor until the end of the Fall 2024 semester
  {
    name: "GLYDR",
    img: "sponsors/glydr.png",
    link: "https://www.glydr.gg/",
  },

  // On-going sponsor as they hold events and have other plans if everything goes well
  {
    name: "Repairify",
    img: "sponsors/repairify.png",
    link: "https://www.repairify.com/",
  },
];
const sponsors = [
  // On-going sponsor as we are encouraged to take items from their auction(?) area
  {
    name: "Dallas Makerspace",
    img: "sponsors/dallasmakerspace.png",
    link: "https://dallasmakerspace.org/",
  },

  // On-going sponsor as we consistently request money depending on our needs
  {
    name: "ECS Student Council",
    img: "sponsors/ecsstuco.png",
    link: "https://www.instagram.com/utd.ecs.stuco/",
  },

  // Sponsor until the end of the Fall 2024 semester
  {
    name: "Mouser Electronics",
    img: "sponsors/mouser.png",
    link: "https://www.mouser.com/",
  },
];
const partners = [
  {
    name: "Accessible Prosthetics Initiative at UT Dallas",
    img: "sponsors/api.png",
    link: "https://www.utdapi.com/",
  },

  {
    name: "American Institute of Aeronautics and Astronautics",
    img: "sponsors/aiaa.png",
    link: "https://www.instagram.com/aiaa_utd/",
  },

  {
    name: "Arters & Crafters",
    img: "sponsors/arters.png",
    link: "https://linktr.ee/artersandcraftersutd",
  },

  // Comet Cosplay had low membership Fall 2023 and used different spaces starting Spring 2024
  // {
  //   name: "Comet Cosplay",
  //   img: "sponsors/cosplay.png",
  //   link: "https://discord.gg/GcYmcUQf",
  // },

  {
    name: "Comet Keyboards",
    img: "sponsors/keyboards.png",
    link: "https://discord.gg/5bSPh7GKMC",
  },

  {
    name: "Comet Robotics",
    img: "sponsors/combatrobotics.png",
    link: "https://linktr.ee/cometrobotics",
  },

  // Comet FIRST Alumni merged with Comet Robotics as of the end of the Summer 2023 semester
  // {
  //   name: "Comet FIRST Alumni",
  //   img: "sponsors/cfa.png",
  //   link: "https://discord.gg/dkdZmJq",
  // },

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
          <>
            Our sponsors are groups and individuals that provide us with new
            technology, speakers for events, prizes, and general donations.
            <br />
            <br />
            Want to support our organization?{" "}
            <a
              href={"https://utdallas.box.com/v/makerspace-sponsorship-packet"}
              target="_blank"
              rel="noreferrer"
            >
              Check out our sponsorship packet!
            </a>
          </>
        }
        largeArray={biggerSponsors}
        array={sponsors}
      />
      <SponsorsGroup
        name={"Partners"}
        description={
          <>
            Our partners are student groups that use the space frequently or
            help promote UTDesign Makerspace through their group.
            <br />
            <br />
            Want to become a partner?{" "}
            <a
              href={
                "https://wiki.utd.ms/en/faq#events-and-student-organizations"
              }
              target="_blank"
              rel="noreferrer"
            >
              Check out our student organizations FAQ!
            </a>
          </>
        }
        array={partners}
      />
    </SponsorsContainer>
  );
};

const SponsorsGroup = ({ name, description, largeArray, array }) => {
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
        {largeArray && (
          <SponsorLinksContainer>
            {largeArray.map((item) => (
              <SponsorLink href={item.link} target="_blank" size={144}>
                <SponsorImage filename={item.img} name={item.name} />
              </SponsorLink>
            ))}
          </SponsorLinksContainer>
        )}
        <SponsorLinksContainer>
          {array.map((item) => (
            <SponsorLink href={item.link} target="_blank" size={96}>
              <SponsorImage filename={item.img} name={item.name} />
            </SponsorLink>
          ))}
        </SponsorLinksContainer>
      </SponsorsWrapper>
    </motion.div>
  );
};

export default Sponsors;
