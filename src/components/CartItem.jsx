import React from "react";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import { addOrUpdateToCart, removeFromCart } from "../api/firebase";

const ICON_CLASS = "mx-1 transition-all cursor-pointer hover:scale-110";

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
    <li className="flex items-center justify-between my-2">
      <img className="w-24 md:w-48" src={image} alt={title} />
      <div className="flex justify-between flex-1 ml-6">
        <div className="basis-3/5">
          <p className="text-lg">{title}</p>
          <p className="text-gray-600">{option}</p>
          <p>{price}원</p>
        </div>
        <div className="flex items-center text-2xl">
          <CiSquareMinus className={ICON_CLASS} onClick={handleMinus} />
          <span>{quantity}</span>
          <CiSquarePlus className={ICON_CLASS} onClick={handlePlus} />
          <TfiClose
            className={`${ICON_CLASS} ml-4 text-base text-gray-500`}
            onClick={handleDelete}
          />
        </div>
      </div>
    </li>
  );
}
