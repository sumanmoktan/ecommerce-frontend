import React from "react";
import Header from "../component/Layout/Header";
import Hero from "../component/Route/Hero/Hero";
import Categories from "../component/Route/Categories/Categories";
import BestDeals from "../component/Route/BestDeals/BestDeals";
import FeaturesProduct from "../component/Route/FeaturesProduct/FeaturesProduct";
import Event from "../component/Event/Event";
// import Sponsor from "../component/Route/Sponsor";
import Footer from "../component/Layout/Footer";
import Recommendation from "../component/Recommendation/Recommendation";


const HomePage = () => {
  return (
    <div className="bg-green-100">
      <Header activeHeading={1} />
      <Hero/>
      <Categories/>
      <BestDeals/>
      <Event/>
      <FeaturesProduct/>
      {/* <Sponsor/> */}
      <Footer/>
    </div>
  );
};

export default HomePage;
