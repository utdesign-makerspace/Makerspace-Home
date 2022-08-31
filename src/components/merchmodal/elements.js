import styled from "styled-components";

export const MerchModalBackground = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  background: #00000055;
  z-index: 5;
  top: 0;
`;

export const MerchModalWrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  top: 0;
`;

export const MerchModalContainer = styled.div`
  background: #fff;
  padding: 40px 40px;
  margin: 20px 20px;
  border-radius: 20px;
  max-width: 800px;
  position: fixed;
  pointer-events: all;
  box-shadow: 0 0.5em 1em -0.125em rgb(0 0 0 / 10%), 0 0px 0 1px rgb(0 0 0 / 2%);

  display: flex;
  align-items: center;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const MerchCloseModal = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  outline: none;
`;

export const MerchTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 460px;
  padding-left: 40px;

  @media screen and (max-width: 900px) {
    padding-left: 0px;
    padding-top: 20px;
    max-width: 300px;
    width: auto;
  }
`;
