import React, { useEffect, useState } from 'react'
import Nav from '../component/product/Nav'
import FlipkartProductPage from '../component/product/FlipkartProductPage';
import BottomNavBar from "../component/product/BottomNavBar";
import FlipStyleCatalog from '../component/product/FlipStyleCatalog';
import { useParams } from 'react-router-dom';

const Product = () => {


  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetch(`http://localhost/ecom-backend/products/get-product.php?id=${id}`)
      .then(res => res.json())
      .then(data => {
        if (data.status === 200) {
          setProduct(data.data);
        }
      })
      .catch(err => console.error(err));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
   <>
  <Nav product={product}/>
  <FlipkartProductPage  product={product}/>
   <FlipStyleCatalog  product={product}/>
    <BottomNavBar product={product} />
   
   </>
  )
}

export default Product;
