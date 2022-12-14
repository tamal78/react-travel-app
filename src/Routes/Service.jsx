import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import ServiceImg from "../Components/assets/2.jpg";
import Footer from "../Components/Footer";
import Trip from "../Components/Trip";
const Service = () => {
  return (
    <>
      <Navbar />
      <Hero cName="hero-abt" img={ServiceImg} title="Service" />
      <Trip />
      <Footer />
    </>
  );
};

export default Service;
