import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
import useCart from "../hooks/useCart";

export default function CartStatus() {
  const {
    cartQuery: { data: products },
  } = useCart();
  return (
    <div className="relative">
      <AiOutlineShopping className="text-3xl" />
      {products && (
        <p className="absolute w-5 h-5 text-sm font-semibold text-center rounded-full -top-1 -right-1 bg-mint">
          {products.length}
        </p>
      )}
    </div>
  );
}
