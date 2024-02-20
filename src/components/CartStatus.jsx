import { useQuery } from "@tanstack/react-query";
import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { getCart } from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";

export default function CartStatus() {
  const { uid } = useAuthContext();
  const { data: products } = useQuery({
    queryKey: ["carts"],
    queryFn: () => getCart(uid),
  });
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
