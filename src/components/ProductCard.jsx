import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({
  product,
  product: { id, image, title, category, price },
}) {
  const navigate = useNavigate();
  return (
    <li
      onClick={() => navigate(`/products/${id}`, { state: { product } })}
      className="overflow-hidden transition-all rounded-lg shadow-md cursor-pointer hover:scale-105"
    >
      <img className="w-full" src={image} alt={title} />
      <div className="px-2 mt-2 text-lg">
        <h3 className="mb-2 truncate">{title}</h3>
        <p className="font-semibold">{`${price}원`}</p>
      </div>
      <p className="px-2 mb-2 text-gray-600">{category}</p>
    </li>
  );
}
