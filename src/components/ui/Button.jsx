import React from "react";

export default function Button({ text, onClick, disabled, orderButton }) {
  return (
    <button
      className={`px-4 py-2 text-lg rounded-md hover:brightness-110 ${
        orderButton
          ? "bg-zinc-900 hover:bg-black text-white rounded-none px-24 py-4 mb-8 w-full"
          : "bg-mint"
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
