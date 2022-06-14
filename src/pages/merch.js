import React, { useState } from "react";
import Navbar from "../components/navbar/index";
import Sidebar from "../components/sidebar/index";
import HelmetComponent from "../components/helmet";
import Merch from "../components/merch";
import Footer from "../components/footer";
import "./style.css";

const MerchPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HelmetComponent title="Merch" />
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Merch />
      <Footer />
    </>
  );
};

export default MerchPage;
