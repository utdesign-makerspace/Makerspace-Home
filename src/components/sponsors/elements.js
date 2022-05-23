import styled from "styled-components";

export const SponsorsContainer = styled.div`
  background: #f6f6f6;
  position: relative;
`;

export const SponsorsWrapper = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 24px;
  grid-auto-columns: minmax(auto, 1fr);
  justify-items: center;
  grid-template-areas: "col1 col2";

  @media screen and (max-width: 768px) {
    grid-template-areas: "col1" "col2";
  }
`;

export const SponsorsColumn = styled.div`
  margin: 50px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: col1;

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`;

export const PartnersColumn = styled.div`
  margin: 50px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: col2;
`;

export const SponsorsText = styled.div`
  max-width: 600px;
  justify-content: center;
`;

export const SponsorsH1 = styled.h1`
  margin-bottom: 8px;
  text-align: center;
`;

export const SponsorsP = styled.p`
  margin-bottom: 16px;
  text-align: center;
`;

export const SponsorLinksContainer = styled.div`
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
`;

export const SponsorLink = styled.a`
  margin: 12px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SponsorImg = styled.img`
  height: 96px;
  width: 96px;
  object-fit: contain;
`;
