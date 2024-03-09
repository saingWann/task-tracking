import Hero from "../component/Hero";
import Benifits from "../component/Benifits";
import Footer from "../component/Footer";
import Testimonial from "../component/Testimonial";
import NavBar from "../component/NavBar";
import Cta from "../component/Cta";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Benifits />
      <Testimonial />
      <Cta />
      <Footer />
    </>
  );
};

export default HomePage;
