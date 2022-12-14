import React from "react";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import HeroImg from "../Components/assets/12.jpg";
import Destination from "../Components/Destination";
import Trip from "../Components/Trip";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        img={HeroImg}
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
};

export default Home;
