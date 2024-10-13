import { useState } from "react";

import userAvatar from "../assets/images/user_avatar.png";
import shoppingCart from "../assets/images/shopping_cart.png";

export default function Navbar() {
  const [searchName, setSearchName] = useState("");
  const handleSearch = (event) => {
    setSearchName(event.target.value);
  };

  console.info("depuis navbar", searchName);

  return (
    <>
      <nav className="navbar">
        <button type="button" className="navbar-button">
          <img src={userAvatar} alt="" /> My account
        </button>
        <button type="button" className="navbar-button">
          My Basket <img src={shoppingCart} alt="" />
        </button>
      </nav>
      <section>
        <label htmlFor="search-bar">
          <button type="submit">Search</button>
        </label>
        <input type="text" id="search-bar" onChange={handleSearch} />
      </section>
    </>
  );
}
