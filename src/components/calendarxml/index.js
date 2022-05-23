import React from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import interactionPlugin from "@fullcalendar/interaction";

import CalendarModal from "../calendarmodal";
import { CalContainer, CalWrapper, CalModalAnimation } from "./elements";

class CalendarXML extends React.Component {
  constructor() {
    super();
    this.state = {
      modalOpen: false,
      currentEvent: {
        title: "Event Name Placeholder",
        description:
          "This is an event description placeholder. If you are seeing this message, you are likely viewing it in error. Please contact an officer if you run into this repeatedly.",
        start: new Date(),
        end: new Date(),
        link: "",
      },
    };
  }

  render() {
    let buttons;
    if (window.innerWidth > 768)
      buttons = "today dayGridMonth,listWeek prev,next";
    else buttons = "today prev,next";

    let def;
    if (window.innerWidth > 768) def = "dayGridMonth";
    else def = "listWeek";

    return (
      <>
        {this.state.modalOpen && (
          <CalModalAnimation
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
          >
            <CalendarModal
              hideFunction={() => this.setState({ modalOpen: false })}
              title={this.state.currentEvent.title}
              description={this.state.currentEvent.description}
              time={
                <span>
                  {this.state.currentEvent.start.toLocaleString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  })}{" "}
                  -{" "}
                  {this.state.currentEvent.end.toLocaleString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  })}{" "}
                  on{" "}
                  {this.state.currentEvent.start.toLocaleString("default", {
                    month: "long",
                  })}{" "}
                  {this.getNumeralOrdinal(
                    this.state.currentEvent.start.getDate()
                  )}
                </span>
              }
              link={this.state.currentEvent.link}
            />
          </CalModalAnimation>
        )}
        <CalContainer>
          <CalWrapper>
            <FullCalendar
              initialView={def}
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
                right: buttons,
              }}
              buttonText={{
                today: "Today",
                month: "Calendar",
                list: "List",
              }}
              eventClick={this.handleDateClick}
            />
          </CalWrapper>
        </CalContainer>
      </>
    );
  }
  getNumeralOrdinal = (number) =>
    number +
    (["th", "st", "nd", "rd"][((number % 100) - 20) % 10] ||
      ["th", "st", "nd", "rd"][number % 100] ||
      ["th", "st", "nd", "rd"][0]);

  handleDateClick = (arg) => {
    arg.jsEvent.preventDefault();
    // console.dir(arg);
    const { title, start, end } = arg.event;
    let { description, location } = arg.event._def.extendedProps;
    try {
      description = description.replace(/<[^>]*>/g, "").replace(/"/g, "");
    } catch (e) {}

    // console.dir({
    //   title,
    //   start,
    //   end,
    //   description,
    //   location,
    // });
    let link = null;
    try {
      let FindURL = description.match(
        /(ftp:\/\/|www\.|https?:\/\/){1}[a-zA-Z0-9u00a1-\uffff0-]{2,}\.[a-zA-Z0-9u00a1-\uffff0-]{2,}(\S*)/g
      );
      if (FindURL.length > 0) {
        link = FindURL[0];
        description = description.replace(link, "");
      }
    } catch (e) {
      link = null;
    }
    this.setState({
      currentEvent: { title, start, end, description, link, location },
      modalOpen: true,
    });
    // console.log(this.state.currentEvent);
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };
}

export default CalendarXML;
