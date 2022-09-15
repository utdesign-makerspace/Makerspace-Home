import React, { useState } from "react";
import Navbar from "../components/navbar/index";
import Sidebar from "../components/sidebar/index";
import Hero from "../components/hero/index";
import LinkBanner from "../components/linkbanner";
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
      <HelmetComponent />
      <Navbar toggle={toggle} transparent={true} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Hero />
      <LinkBanner
        text="Something big is coming in early 2023."
        url="/store"
        background={`#881df7`}
      />
      <Info />
      <Sponsors />
      <Footer />
    </>
  );
};

export default IndexPage;
