import React from "react";
import { CalContainer, CalWrapper } from "./elements";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import interactionPlugin from "@fullcalendar/interaction";

const GoogleCalendar = () => {
  return (
    <CalContainer>
      <CalWrapper>
        <Cal />
      </CalWrapper>
    </CalContainer>
  );
};

class Cal extends React.Component {
  render() {
    return (
      <FullCalendar
        defaultView="dayGridMonth"
        plugins={[
          dayGridPlugin,
          interactionPlugin,
          listPlugin,
          googleCalendarPlugin,
        ]}
        googleCalendarApiKey="AIzaSyCSNMxYW6PAh1QM0woCWwRnmZKZtm_6sFw"
        events={{
          googleCalendarId:
            "8sv5eeliouchn2dodnoqb5tj0g@group.calendar.google.com",
          className: "cal-event",
        }}
        height="100%"
        eventColor="#c1393d"
        headerToolbar={{
          right: "today dayGridMonth,listWeek prev,next",
        }}
        buttonText={{
          today: "Today",
          month: "Calendar",
          list: "List",
        }}
      />
    );
  }
}

export default GoogleCalendar;
