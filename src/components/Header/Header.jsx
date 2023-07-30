import React from "react";
import "./Header.css";
const Header = () => {
  const headerList = [
    "Best Sellers",
    "Gift Ideas",
    "New Releases",
    "Today's Deals",
    "Customer Service",
  ];

  return (
    <div className="header-container">
      <ul>
        {headerList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
