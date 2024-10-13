import userAvatar from "../assets/images/user_avatar.png";
import shoppingCart from "../assets/images/shopping_cart.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <button type="button" className="navbar-button">
        <img src={userAvatar} alt="" /> My account
      </button>
      <button type="button" className="navbar-button">
        My Basket <img src={shoppingCart} alt="" />
      </button>
    </nav>
  );
}
