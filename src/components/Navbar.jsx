import React from "react";
import { Link } from "react-router-dom";
import { FaPencilAlt } from "react-icons/fa";
import User from "./User";
import Button from "./ui/Button";
import { useAuthContext } from "../context/AuthContext";
import CartStatus from "./CartStatus";

export default function Navbar() {
  const { user, login, logout } = useAuthContext();
  return (
    <header className="flex justify-between p-5">
      <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
        <h1 className="uppercase">Bao Shop</h1>
      </Link>
      <nav className="flex items-center gap-4 text-text">
        <Link className="text-lg" to="/products">
          Products
        </Link>
        {user && (
          <Link to="/carts">
            <CartStatus />
          </Link>
        )}
        {user && user.isAdmin && (
          <Link to="/products/new">
            <FaPencilAlt className="text-xl" />
          </Link>
        )}
        {user && <User user={user} />}
        {!user && <Button onClick={login} text={"Login"} />}
        {user && <Button onClick={logout} text={"Logout"} />}
      </nav>
    </header>
  );
}
