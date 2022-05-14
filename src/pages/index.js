import React, { useState } from "react";
import Fonts from "../fonts/fonts";
import Navbar from "../components/navbar/index";
import "./style.css";
import Sidebar from "../components/sidebar/index";

const IndexPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Fonts />
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <p>Hello world!</p>
    </>
  );
};

export default IndexPage;
