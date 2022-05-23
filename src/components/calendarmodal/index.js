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

const CalendarModal = ({
  hideFunction,
  title,
  description,
  time,
  googleCalendar,
  link,
}) => {
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
          <CalButtonWrapper>
            <ButtonLink href={googleCalendar} target="_blank">
              Add to Google Calendar
            </ButtonLink>
            {link && (
              <ButtonLink href={link} target="_blank">
                More Info
              </ButtonLink>
            )}
          </CalButtonWrapper>
        </CalModalContainer>
      </CalModalWrapper>
    </>
  );
};

export default CalendarModal;
