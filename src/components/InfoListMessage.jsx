import React from "react";

export default function InfoListMessage({ text }) {
  return (
    <li className="relative px-2 text-sm before:content before:w-1 before:h-1 before:bg-gray-400 before:absolute before:top-2 before:-left-1 before:rounded-full">
      {text}
    </li>
  );
}
