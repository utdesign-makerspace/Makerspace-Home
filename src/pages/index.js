import React, { useState } from "react";
import Fonts from "../fonts/fonts";
import Navbar from "../components/navbar/index";
import Sidebar from "../components/sidebar/index";
import Hero from "../components/hero/index";
import Info from "../components/info";
import Sponsors from "../components/sponsors";
import Footer from "../components/footer";
import HelmetComponent from "../components/helmet";
import "./style.css";

const IndexPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Fonts />
      <HelmetComponent />
      <Navbar toggle={toggle} transparent={true} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Hero />
      <Info />
      <Sponsors />
      <Footer />
    </>
  );
};

export default IndexPage;
