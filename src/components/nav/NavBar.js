import { NavLink } from "react-router-dom";

import "../../styles/navbar.scss";

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/cart">Cart</NavLink>
    </div>
  );
};
export default NavBar;
