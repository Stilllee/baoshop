import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SiFoodpanda } from "react-icons/si";
import { FaPencilAlt } from "react-icons/fa";
import { login, logout, onUserStateChange } from "../api/firebase";
import User from "./User";
import Button from "./ui/Button";

export default function Navbar() {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange((user) => {
      setUser(user);
    });
  }, []);
  return (
    <header className="flex justify-between p-5 border-b border-black">
      <Link to="/" className="flex items-center gap-2 text-3xl font-semibold">
        <SiFoodpanda />
        <h1>Bao Shop</h1>
      </Link>
      <nav className="flex items-center gap-4 text-text">
        <Link to="/products">Products</Link>
        <Link to="/carts">Carts</Link>
        {user && user.isAdmin && (
          <Link to="/products/new">
            <FaPencilAlt />
          </Link>
        )}
        {user && <User user={user} />}
        {!user && <Button onClick={login} text={"Login"} />}
        {user && <Button onClick={logout} text={"Logout"} />}
      </nav>
    </header>
  );
}
