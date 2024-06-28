import React from "react";

function BreadCrum(props) {
  const { product } = props;

  return (
    <div className="flex items-center h-4 gap-2 text-sm text-gray-500">
      HOME <img src="/Assets/breadcrum_arrow.png" alt="" /> SHOP{" "}
      <img src="/Assets/breadcrum_arrow.png" alt="" />
      {product.category} <img src="/Assets/breadcrum_arrow.png" alt="" /> {product.name}
    </div>
  );
}

export default BreadCrum;
