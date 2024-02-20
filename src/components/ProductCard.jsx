import React from "react";

export default function ProductCard({
  product: { id, image, title, category, price },
}) {
  return (
    <li className="overflow-hidden rounded-lg shadow-md cursor-pointer">
      <img className="w-full" src={image} alt={title} />
      <div className="px-2 mt-2 text-lg">
        <h3 className="mb-2 truncate">{title}</h3>
        <p className="font-semibold">{`${price}원`}</p>
      </div>
      <p className="px-2 mb-2 text-gray-600">{category}</p>
    </li>
  );
}
