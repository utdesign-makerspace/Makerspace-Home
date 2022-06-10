import styled from "styled-components";

export const FooterContainer = styled.div`
  background: #343a40;
  padding: 20px 40px;
  justify-content: center;
  display: flex;
  box-shadow: 0 50vh 0 50vh #343a40;
`;

export const FooterWrapper = styled.div`
  max-width: 1000px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const FooterLogo = styled.img`
  height: 32px;
  margin-bottom: 8px;

  @media screen and (max-width: 768px) {
    height: 24px;
  }

  @media screen and (max-width: 350px) {
    height: 16px;
  }
`;

export const FooterCopyright = styled.p`
  color: #fff;
  text-align: center;
  margin-bottom: 3px;
`;

export const FooterP = styled.p`
  color: #fff;
  text-align: center;
  font-size: 12px;
`;
