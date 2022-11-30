import styled from "styled-components";

export const FooterContainer = styled.div`
  background: #343a40;
  padding: 40px 40px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  box-shadow: 0 50vh 0 50vh #343a40;
`;

export const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1180px;
  display: grid;
  gap: 0 20px;
  border-bottom: 1px solid #c1393d;
  grid-template-columns: repeat(4, 1fr);

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(8, 1fr);
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(12, 1fr);
  }
`;

export const FooterBigColumn = styled.div`
  grid-column: span 3;
  grid-row-end: span 2;
  margin-bottom: 40px;
`;

export const FooterSpacerColumn = styled.div`
  grid-column: span 1;
  grid-row-end: span 2;
`;

export const FooterColumn = styled.div`
  grid-column: span 2;
  margin-bottom: 40px;
`;

export const FooterLogo = styled.img`
  width: 100%;
  padding: 3% 3%;
  background: #c1393d;
`;

export const FooterSOC = styled.p`
  color: #fff;
  text-align: center;
  font-size: 12px;
  width: 100%;
  max-width: 1180px;
  padding-top: 30px;
`;

export const FooterColumnHeader = styled.p`
  color: #c1393d;
`;

export const FooterText = styled.p`
  color: #fff;
  margin-top: 8px;
  display: block;
`;

export const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-top: 8px;
  display: block;
`;
