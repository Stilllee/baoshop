import React from "react";

export default function PriceCard({ text, price }) {
  return (
    <div className="p-8 text-center md:text-lg">
      <p className="mb-2 text-xl md:text-2xl">{price}원</p>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}
