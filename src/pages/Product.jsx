import React from 'react'
import Nav from '../component/product/Nav'
import FlipkartProductPage from '../component/product/FlipkartProductPage';
import BottomNavBar from "../component/product/BottomNavBar";
import FlipStyleCatalog from '../component/product/FlipStyleCatalog';

const Product = () => {
  return (
   <>
  <Nav/>
  <FlipkartProductPage/>
   <FlipStyleCatalog/>
    <BottomNavBar />
   
   </>
  )
}

export default Product;
