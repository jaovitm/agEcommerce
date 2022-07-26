import React from 'react'
import './Header.css'
import Logo from '../../Assets/Logo.png'
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = ({qtd}) => {
 
  return (
    <>
      <div className="container header-container">
        <Link to="/" className="header-Logo">
          <img src={Logo} alt="AluraGeek Logo" />
        </Link>
        <input type="text" name="Search" id="search" />
        <div className="header-user-field">
          <Link to="/login" className="a">
            <AiOutlineUser className="header-icons user" />
          </Link>

          <Link to="/cart" className="a cart">
            <span>{qtd}</span>
            <AiOutlineShoppingCart className="header-icons" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header