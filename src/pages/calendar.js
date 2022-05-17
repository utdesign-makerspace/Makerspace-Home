import React, { useState } from "react";
import Fonts from "../fonts/fonts";
import Navbar from "../components/navbar/index";
import Sidebar from "../components/sidebar/index";
import GoogleCalendar from "../components/googlecalendar";
import "./style.css";

const CalendarPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Fonts />
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <GoogleCalendar />
    </>
  );
};

export default CalendarPage;
