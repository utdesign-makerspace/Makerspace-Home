import React from "react";
import Loadable from "react-loadable";
import { CalContainer, CalWrapper } from "./elements";

const Calendar = Loadable({
  loader: () => import("../calendarxml/index.js"),
  loading() {
    return <div>Loading calendar...</div>;
  },
});

export default () => (
  <CalContainer>
    <CalWrapper>
      <Calendar />
    </CalWrapper>
  </CalContainer>
);
