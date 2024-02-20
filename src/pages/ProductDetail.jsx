import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../components/ui/Button";
import { useAuthContext } from "../context/AuthContext";
import { addOrUpdateToCart } from "../api/firebase";

export default function ProductDetail() {
  const { uid } = useAuthContext();
  const {
    state: {
      product: { id, image, title, description, category, price, options },
    },
  } = useLocation();
  const [selected, setSelected] = useState(options && options[0]);
  const handleSelect = (e) => setSelected(e.target.value);
  const handleClick = (e) => {
    const product = { id, image, title, price, option: selected, quantity: 1 };
    addOrUpdateToCart(uid, product);
  };
  return (
    <>
      <p className="mx-12 mt-4 text-gray-700">{category}</p>
      <section className="flex flex-col p-4 md:flex-row">
        <img className="w-full px-4 basis-7/12" src={image} alt={title} />
        <div className="flex flex-col w-full p-4 basis-5/12">
          <h2 className="pt-2 text-2xl">{title}</h2>
          <p className="py-4 text-xl font-semibold border-b border-gray-300">
            {price}원
          </p>
          <p className="py-4">{description}</p>
          <div className="flex items-center">
            <label className="mr-10 font-semibold" htmlFor="select">
              사이즈
            </label>
            <select
              className="p-2 m-4 border-2 rounded-md"
              id="select"
              onChange={handleSelect}
              value={selected}
            >
              {options &&
                options.map((option, index) => (
                  <option key={index}>{option}</option>
                ))}
            </select>
          </div>
          <Button text="장바구니에 추가" onClick={handleClick} />
        </div>
      </section>
    </>
  );
}
