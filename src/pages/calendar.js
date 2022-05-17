import React, { useState } from "react";
import Fonts from "../fonts/fonts";
import Navbar from "../components/navbar/index";
import Sidebar from "../components/sidebar/index";
import Calendar from "../components/calendar";
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
      <Calendar />
    </>
  );
};

export default CalendarPage;
