import React, { useContext } from "react";
import { ShopContext } from "../context/Shopcontext";

function ShopCategory(props) {
  const {all_product} = useContext(ShopContext);

  return (
    <div>
      <img src={props.banner} alt="Banner" />
    </div>
  );
}

export default ShopCategory;
