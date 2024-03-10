import Hero from "../component/Hero";
import Benifits from "../component/Benifits";
import Footer from "../component/Footer";
import Testimonial from "../component/Testimonial";
import NavBar from "../component/NavBar";
import Cta from "../component/Cta";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, y: -200 }}
      exit={{ opacity: 0 }}
    >
      <NavBar />
      <Hero />
      <Benifits />
      <Testimonial />
      <Cta />
      <Footer />
    </motion.div>
  );
};

export default HomePage;
