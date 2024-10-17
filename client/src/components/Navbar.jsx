import { useState } from "react";
import { Link } from "react-router-dom";

import userAvatar from "../assets/images/user_avatar.png";
import shoppingCart from "../assets/images/shopping_cart.png";

export default function Navbar() {
  const [searchName, setSearchName] = useState("");
  const handleSearch = (event) => {
    setSearchName(event.target.value);
  };

  return (
    <>
      <Link to="/home" className="title">
        LebonRecoin
      </Link>
      <nav className="navbar">
        <Link to="/user/1" className="navbar-button">
          <img src={userAvatar} alt="" /> My account
        </Link>

        <button type="button" className="navbar-button">
          My Basket <img src={shoppingCart} alt="" />
        </button>
      </nav>
      <section className="search-bar-container">
        <Link to={`/items/${searchName}`}>
          <label htmlFor="search-bar">
            <button type="submit">Search</button>
          </label>
        </Link>
        <input type="text" id="search-bar" onChange={handleSearch} />
      </section>
    </>
  );
}
