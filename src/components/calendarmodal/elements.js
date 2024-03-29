import styled from "styled-components";
import ICalendarLink from "react-icalendar-link";

export const CalModalBackground = styled.div`
  position: fixed;
  height: calc(100vh - 80px);
  width: 100%;
  background: #00000055;
  z-index: 5;
`;

export const CalModalWrapper = styled.div`
  position: fixed;
  height: calc(100vh - 80px);
  width: 100%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;

export const CalModalContainer = styled.div`
  background: #fff;
  padding: 40px 40px;
  margin: 20px 20px;
  border-radius: 20px;
  max-width: 800px;
  position: fixed;
  pointer-events: all;
  box-shadow: 0 0.5em 1em -0.125em rgb(0 0 0 / 10%), 0 0px 0 1px rgb(0 0 0 / 2%);
`;

export const CalLinkWrapper = styled.div`
  display: flex;
  margin-left: auto;
  justify-content: left;
  margin-top: 8px;

  > * {
    margin-right: 10px;
  }
  > *:last-child {
    margin-right: 0px;
  }
`;

export const CalLink = styled.a`
  text-decoration: none;
  color: #000;
`;

export const CalICalendarLink = styled(ICalendarLink)`
  text-decoration: none;
  color: #000;
`;

export const CalCloseModal = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  outline: none;
`;

export const EventName = styled.h1``;

export const EventTime = styled.p`
  margin-bottom: 8px;
  font-weight: bolder;
`;

export const EventDescription = styled.p``;
