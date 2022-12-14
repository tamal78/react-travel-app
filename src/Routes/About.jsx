import Hero from "../Components/Hero";
import AboutImg from "../Components/assets/night.jpg";
import Navbar from "../Components/Navbar";
import AboutUs from "../Components/AboutUs";
import Footer from "../Components/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <Hero cName="hero-abt" img={AboutImg} title="About Us" />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default About;
