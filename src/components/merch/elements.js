import styled from "styled-components";

export const MerchWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const MerchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1280px;
  margin: 40px 40px;
`;

export const MerchButton = styled.div`
  margin: 10px 10px;
  width: 300px;
  text-decoration: none;
  box-shadow: 0 0.5em 1em -0.125em rgb(0 0 0 / 10%), 0 0px 0 1px rgb(0 0 0 / 2%);
  transition: box-shadow 0.2s;
  border-radius: 8px;

  :hover {
    box-shadow: 0 0.5em 1em -0.125em rgb(0 0 0 / 20%),
      0 0px 0 1px rgb(0 0 0 / 2%);
  }

  * {
    color: #000;
  }
`;

export const MerchText = styled.div`
  padding: 8px 8px;
`;
