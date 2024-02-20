import React from "react";
import { CiSquareMinus, CiSquarePlus, CiSquareRemove } from "react-icons/ci";
import { addOrUpdateToCart, removeFromCart } from "../api/firebase";

export default function CartItem({
  product,
  product: { id, image, title, option, quantity, price },
  uid,
}) {
  const handleMinus = () => {
    if (quantity < 2) return;
    addOrUpdateToCart(uid, { ...product, quantity: quantity - 1 });
  };
  const handlePlus = () =>
    addOrUpdateToCart(uid, { ...product, quantity: quantity + 1 });

  const handleDelete = () => removeFromCart(uid, id);
  return (
    <li>
      <img src={image} alt={title} />
      <div>
        <p>{title}</p>
        <p>{option}</p>
        <CiSquareMinus onClick={handleMinus} />
        <span>{quantity}</span>
        <CiSquarePlus onClick={handlePlus} />
        <CiSquareRemove onClick={handleDelete} />
      </div>
    </li>
  );
}
