import styled from "styled-components";
import { motion } from "framer-motion";

export const MerchWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const MerchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1280px;
`;

export const MerchButton = styled.div`
  margin: 10px 10px;
  width: 300px;
  text-decoration: none;
  box-shadow: 0 0.5em 1em -0.125em rgb(0 0 0 / 10%), 0 0px 0 1px rgb(0 0 0 / 2%);
  transition: box-shadow 0.2s;
  border-radius: 8px;
  cursor: pointer;

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

export const MerchModalAnimation = styled(motion.div)`
  position: relative;
  z-index: 5;
`;

export const MerchHeader = styled.h1`
  width: 100%;
  font-size: 40px;
  text-align: center;
  margin-bottom: 6px;
`;

export const MerchDescription = styled.p`
  width: 100%;
  font-size: 18px;
  text-align: center;
  margin-bottom: 10px;
`;
