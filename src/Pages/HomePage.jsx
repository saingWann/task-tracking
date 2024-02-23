import React from "react";
import Hero from "../component/Hero";
import Benifits from "../component/Benifits";
import Footer from "../component/Footer";
import Testimonial from "../component/Testimonial";
import NavBar from "../component/NavBar";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Benifits />
      <Testimonial />
      <Footer />
    </>
  );
};

export default HomePage;
