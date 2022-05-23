import React from "react";
import Loadable from "react-loadable";

const CalendarObject = Loadable({
  loader: () => import("../calendarxml/index.js"),
  loading() {
    return <div>Loading calendar...</div>;
  },
});

const Calendar = () => {
  return <CalendarObject />;
};

export default Calendar;
