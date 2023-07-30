import React, { useState } from "react";
import "./HeroSection.css";
import { BsFillCartFill, BsSearch } from "react-icons/bs";
import { BiSolidUser, BiMenu } from "react-icons/bi";
import Header from "../Header/Header";
const HeroSection = ({ handleCategory, handleSearch }) => {
  return (
    <div className="hero-section-container">
      <Header />
      <div className="eflyer-heading">
        <h2
          style={{
            color: "white",
          }}
        >
          Eflyer
        </h2>
      </div>

      <div className="hero-navigation">
        <BiMenu
          style={{
            fontSize: "70px",
            color: "white",
          }}
        />
        <select onChange={handleCategory} className="category">
          <option value={"categories"}>All Category</option>
          <option value={`men's clothing`}>Men's Fashion</option>
          <option value={`women's clothing`}>Women's fashion</option>
          <option value={"electronics"}>Electronics</option>
          <option value={"jewelery"}>Jewelery</option>
        </select>
        <div className="search">
          <input
            name="searchbar"
            className="searchbar"
            type="search"
            placeholder="Search this blog"
            onChange={(e) => handleSearch(e)}
          />
          <BsSearch className="search-icon" />
        </div>

        <select className="language-select">
          <option>🇳🇱&emsp;Netherlands</option>
          <option>🇩🇪&emsp;Germany</option>
          <option>🇫🇷&emsp;France</option>
          <option>🇪🇸&emsp;Spain</option>
        </select>

        <button className="cart-button">
          <BsFillCartFill />
          &nbsp;Cart
        </button>
        <button className="cart-button">
          <BiSolidUser />
          &nbsp;User
        </button>
      </div>
      <div className="hero-bottom">
        <h1>
          GET STARTED <br /> YOUR FAVIOURITE SHOPPPING
        </h1>
        <button>Buy Now</button>
      </div>
    </div>
  );
};

export default HeroSection;
