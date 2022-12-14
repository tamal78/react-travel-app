import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import ContactImg from "../Components/assets/1.jpg";
import Footer from "../Components/Footer";
import ContactForm from "../Components/ContactForm";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Hero cName="hero-abt" img={ContactImg} title="Contact Us" />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Contact;
