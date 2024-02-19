import React from "react";
import { Link } from "react-router-dom";
import { SiFoodpanda } from "react-icons/si";
import { FaPencilAlt } from "react-icons/fa";

export default function Navbar() {
  return (
    <header>
      <Link to="/">
        <SiFoodpanda />
        <h1>Bao Shop</h1>
      </Link>
      <nav>
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
