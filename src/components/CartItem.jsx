import React from "react";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import useCart from "../hooks/useCart";

const ICON_CLASS = "mx-1 transition-all cursor-pointer hover:scale-110";

export default function CartItem({
  product,
  product: { id, image, title, option, quantity, price },
}) {
  const { addOrUpdateItem, removeItem } = useCart();
  const handleMinus = () => {
    if (quantity < 2) return;
    addOrUpdateItem.mutate({ ...product, quantity: quantity - 1 });
  };
  const handlePlus = () =>
    addOrUpdateItem.mutate({ ...product, quantity: quantity + 1 });

  const handleDelete = () => removeItem.mutate(id);
  return (
    <li className="flex items-center justify-between py-4 border-t border-gray-200">
      <img className="w-24 md:w-36 lg:w-48" src={image} alt={title} />
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
