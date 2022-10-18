import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import {
  AccordionContainer,
  AccordionTitle,
  AccordionContent,
} from "./elements";

const defaults = [
  {
    title: "This accordion has no questions?",
    content:
      'Nope! You need to write some content for it to show here. [{title: "Title goes here?", content: "Yep!"}]',
  },
];

const Accordion = ({ values }) => {
  if (!values || values.length === 0) values = defaults;

  return (
    <>
      <AccordionContainer>
        {values.map((value) => (
          <AccordionElement title={value.title} content={value.content} />
        ))}
      </AccordionContainer>
    </>
  );
};

const AccordionElement = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <AccordionTitle onClick={() => setIsActive(!isActive)}>
        <div style={{ maxWidth: "95%" }}>{title}</div>
        {isActive ? <FaMinus /> : <FaPlus />}
      </AccordionTitle>
      {isActive && <AccordionContent>{content}</AccordionContent>}
    </div>
  );
};

export default Accordion;
