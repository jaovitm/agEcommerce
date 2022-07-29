import React from "react";
import "./Header.css";
import Logo from "../../Assets/Logo.png";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = ({ qtd, Products }) => {
  let searchresults = [];

  const search = (e) => {
    const results = document.querySelector("#search-results");

    if (e.target.value.length > 0) {
      const exp = new RegExp(e.target.value, "i");
      searchresults = Products.filter((item) => exp.test(item.Name));
      results.innerHTML = "";
      searchresults.map(({id, category, image,Name,Price,Desc}) => {
        results.innerHTML += `<a href="${Name}"> <img src="${image}"/> ${Name}</a>`;
      })
    } else {
      searchresults = [];
      results.innerHTML = "";
    }
  };

  return (
    <>
      <div className="container header-container">
        <Link to="/" className="header-Logo">
          <img src={Logo} alt="AluraGeek Logo" />
        </Link>
        <div className="search-container">
          <input type="text" name="Search" id="search" onChange={search} />

          <div
            id="search-results"
          ></div>
        </div>
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
};

export default Header;
