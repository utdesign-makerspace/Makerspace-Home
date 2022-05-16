import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #a83236;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 600px;
  position: relative;
  z-index: 1;
  overflow-x: hidden;
  user-select: none;
  pointer-events: none;

  @media (max-width: 768px) {
    height: 400px;
  }
`;

export const HeroBg = styled.img`
  position: absolute;
  object-fit: cover;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 800px;
  position: absolute;
  padding: 8px 32px;
  left: 200px;
  display: flex;
  flex-direction: column;
  align-items: left;

  @media screen and (max-width: 1200px) {
    // make content show in the center instead
    left: 0;
    right: 0;
    margin: 0 auto;
  }
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: left;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #f2d1c9;
  font-size: 24px;
  text-align: left;
  max-width: 800px;

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroCopyright = styled.p`
  color: #f2d1c9;
  font-size: 16px;
  text-align: right;
  position: absolute;
  bottom: 10px;
  right: 10px;

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
