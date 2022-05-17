import React from "react";
import {
  SponsorsContainer,
  SponsorsWrapper,
  SponsorsH1,
  SponsorsP,
  SponsorsText,
  SponsorLink,
  SponsorLinksContainer,
  SponsorImg,
} from "./elements";

import SGDAImg from "../../images/sponsors/sgda.png";
import UTDesignImg from "../../images/sponsors/utdesign.svg";

const sponsors = [
  {
    name: "UTDesign Capstone",
    img: UTDesignImg,
    link: "https://utdesign.utdallas.edu/",
  },
];
const partners = [
  {
    name: "Student Game Developer Association",
    img: SGDAImg,
    link: "https://utdsgda.club/",
  },
];

const Sponsors = () => {
  return (
    <SponsorsContainer>
      <SponsorsWrapper>
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
              <SponsorImg src={item.img} alt={item.name} title={item.name} />
            </SponsorLink>
          ))}
        </SponsorLinksContainer>
      </SponsorsWrapper>
      <SponsorsWrapper>
        <SponsorsText>
          <SponsorsH1>Partners</SponsorsH1>
          <SponsorsP>
            Our partners are student groups that use the space regularly.
          </SponsorsP>
        </SponsorsText>
        <SponsorLinksContainer>
          {partners.map((item) => (
            <SponsorLink href={item.link} target="_blank">
              <SponsorImg src={item.img} alt={item.name} title={item.name} />
            </SponsorLink>
          ))}
        </SponsorLinksContainer>
      </SponsorsWrapper>
    </SponsorsContainer>
  );
};

export default Sponsors;
