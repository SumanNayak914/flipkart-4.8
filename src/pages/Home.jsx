import React from "react";
import Slider from "../component/Slider";
import CategoryNavigation from "../component/CategoryNavigation";
import Products from "../component/Products"

const Home = () => {
  return <div>
     <CategoryNavigation/>
    <Slider />
    <Products/>
  
    </div>;
};

export default Home;
