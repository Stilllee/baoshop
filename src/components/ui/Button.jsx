import React from "react";

export default function Button({ text, onClick, disabled }) {
  return (
    <button
      className="px-4 py-2 text-lg rounded-md bg-mint hover:brightness-110"
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
