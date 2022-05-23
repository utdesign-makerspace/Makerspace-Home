import React from "react";
import {
  CalModalBackground,
  CalModalWrapper,
  CalModalContainer,
  CalButtonWrapper,
  EventName,
  EventTime,
  EventDescription,
  CalCloseModal,
} from "./elements";
import { ButtonLink } from "../button";
import { FaTimes } from "react-icons/fa";

const CalendarModal = ({ hideFunction, title, description, time, link }) => {
  return (
    <>
      <CalModalBackground onClick={hideFunction} />
      <CalModalWrapper>
        <CalModalContainer onClick={null}>
          <CalCloseModal onClick={hideFunction}>
            <FaTimes size={"24px"} />
          </CalCloseModal>
          <EventName>{title}</EventName>
          <EventTime>{time}</EventTime>
          <EventDescription>{description}</EventDescription>
          {link && (
            <CalButtonWrapper>
              <ButtonLink href={link} target="_blank">
                More Info
              </ButtonLink>
            </CalButtonWrapper>
          )}
        </CalModalContainer>
      </CalModalWrapper>
    </>
  );
};

export default CalendarModal;
