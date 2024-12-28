import React from "react";
import SlidingOffers from "../../components/slidingOffers/SlidingOffers";
import TopProductsSection from "../../components/topProducts/TopProductsSection";
import classes from "./Homepage.module.css"

const Homepage = () => {
  return (
    <div className={classes.container}>
      <SlidingOffers />
      <TopProductsSection title="Top Products" totalProducts={30}/>
      <SlidingOffers />
      <h1>Top Categories</h1>
      <h1>Top Brands</h1>
      <h1>Live Consultation</h1>
      <TopProductsSection title="Suggestions" totalProducts={30}/>
      <h1>Service Highlights</h1>
      <h1>Top Offers</h1>
    </div>
  )
}

export default Homepage;
