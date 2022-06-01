import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="title">Rajon Quiz Store</Link>
      <hr className="devider"
      ></hr>
    </div>
  );
};

export default Header;
