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
      <Navbar toggle={toggle} background={"#fff0"} absolute={true} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Hero />
      <LinkBanner
        text="Something big is coming in early 2023."
        url="/project-2023"
        background={`#01b7db`}
      />
      <Info />
      <Sponsors />
      <Footer />
    </>
  );
};

export default IndexPage;
