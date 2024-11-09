import React from "react";
import HomeBody from "./body/HomeBody";
import CollectionBody from "./body/CollectionBody";
import Trending from "./body/Trending";
import Testimonial from "./body/Testimonial";
import Footer from "./footer/Footer";
const Home = () => {
  return (
    <div>
      <HomeBody />
      <CollectionBody />
      <Trending />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
