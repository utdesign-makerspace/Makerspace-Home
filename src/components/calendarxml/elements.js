import styled from "styled-components";
import { motion } from "framer-motion";

export const CalContainer = styled.div`
  margin: 50px 0;
  background: #fff;
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 80px - 100px);
`;

export const CalWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 50px;
`;

export const CalModalAnimation = styled(motion.div)`
  position: relative;
  z-index: 5;
`;
