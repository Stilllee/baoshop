import React from "react";
import { Link } from "react-router-dom";
import { SiFoodpanda } from "react-icons/si";
import { FaPencilAlt } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="flex justify-between border-b border-black p-5">
      <Link to="/" className="flex items-center text-3xl gap-2 font-semibold">
        <SiFoodpanda />
        <h1>Bao Shop</h1>
      </Link>
      <nav className="flex items-center gap-4 text-text">
        <Link to="/products">Products</Link>
        <Link to="/carts">Carts</Link>
        <Link to="/products/new">
          <FaPencilAlt />
        </Link>
        <button>Login</button>
      </nav>
    </header>
  );
}
