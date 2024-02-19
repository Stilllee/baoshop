import React from "react";

export default function Button({ text, onClick }) {
  return (
    <button
      className="px-4 py-2 rounded-md bg-mint hover:brightness-110"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
