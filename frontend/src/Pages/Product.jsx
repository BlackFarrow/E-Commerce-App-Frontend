import React, { useContext } from "react";
import { ShopContext } from "../context/Shopcontext";
import { useParams } from "react-router-dom";
import BreadCrum from "../Components/BreadCrum";

function Product() {
  const { all_product } = useContext(ShopContext);

  const { productid } = useParams();

  const product = all_product.find((e) => e.id === Number(productid));

  return (
    <div>
      <BreadCrum product={product} />
    </div>
  );
}

export default Product;
