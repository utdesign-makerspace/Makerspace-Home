import React from "react";
import {
  CalModalBackground,
  CalModalWrapper,
  CalModalContainer,
  EventName,
  EventTime,
  EventDescription,
  CalCloseModal,
  CalLink,
  CalLinkWrapper,
  CalICalendarLink,
} from "./elements";
import { FaTimes, FaLink, FaDownload } from "react-icons/fa";
import { SiGooglecalendar } from "react-icons/si";

const CalendarModal = ({
  hideFunction,
  title,
  description,
  time,
  googleCalendar,
  link,
  icalObject,
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
          <CalLinkWrapper>
            <CalICalendarLink filename="utdmsevent.ics" event={icalObject}>
              <FaDownload />
            </CalICalendarLink>
            <CalLink href={googleCalendar} target="_blank">
              <SiGooglecalendar />
            </CalLink>
            {link && (
              <CalLink href={link} target="_blank">
                <FaLink />
              </CalLink>
            )}
          </CalLinkWrapper>
        </CalModalContainer>
      </CalModalWrapper>
    </>
  );
};

export default CalendarModal;
