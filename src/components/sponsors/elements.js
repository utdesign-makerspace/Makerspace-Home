import styled from "styled-components";

export const SponsorsContainer = styled.div`
  background: #f6f6f6;
  position: relative;
  padding: 24px 24px;
`;

export const SponsorsWrapper = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
  padding: 24px 0px;
  justify-items: center;

  display: flex;
  flex-direction: column;
  align-items: center;
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
  margin: ${(props) => props.size / 8}px ${(props) => props.size / 8}px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  max-height: ${(props) => props.size}px;
  max-width: ${(props) => props.size * 1.5}px;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }

  img[role="presentation"] {
    max-height: ${(props) => props.size}px;
    max-width: ${(props) => props.size * 1.5}px;
  }
`;
