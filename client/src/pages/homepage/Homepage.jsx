import React from "react";
import SlidingOffers from "../../components/slidingOffers/SlidingOffers";
import TopProductsSection from "../../components/topProducts/TopProductsSection";
import classes from "./Homepage.module.css"
import TopCategories from "../../components/topCategories/TopCategories";
import TopProduct from "../../components/topProduct/TopProduct"
import TopBrand from "../../components/topBrand/TopBrand";
import LiveConsultation from "../../components/liveConsultation/LiveConsultation";
import SinglePageOffers from "../../components/singlePageOffers/SinglePageOffers";

const Homepage = () => {
  return (
    <div className={classes.container}>
      <SlidingOffers />
      <div className={classes.topProductsWrapper}>
        <TopProductsSection title="Top Products" totalProducts={30} TopProduct={TopProduct} />
      </div>
      <SlidingOffers />
      <TopCategories title="Top Categories" />
      <div className={classes.wrapper}>
        <TopProductsSection title="" totalProducts={16} TopProduct={TopBrand} slideLength={1500} />
      </div>
      <TopCategories title="Season Products" />
      <LiveConsultation />
      <TopProductsSection title="Suggestions" totalProducts={25} TopProduct={TopProduct} />
      <div className={classes.topCategoriesWrapper}>
        <TopCategories title="Service Highlights" />
      </div>
      <SinglePageOffers />
    </div>
  )
}

export default Homepage;
