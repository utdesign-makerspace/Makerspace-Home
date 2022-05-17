import styled from "styled-components";

export const SponsorsContainer = styled.div`
  background: #f6f6f6;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const SponsorsWrapper = styled.div`
  padding-bottom: 50px;
  padding-left: 56px;
  padding-right: 56px;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;

  :first-of-type {
    padding-top: 50px;
  }
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
  height: 96px;
  width: 128px;
  margin: 8px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SponsorImg = styled.img`
  height: 96px;
  width: 128px;
  object-fit: contain;
`;
