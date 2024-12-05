import React from "react";
import Search from "./Search";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="leftSide">
        <div className="logo">
          <img src="/favicon.ico" height={40} />
        </div>
        <div className="name">EatWise</div>
      </div>
      <div className="midSide">
        <Search />
      </div>
      <div className="rightSide"></div>
    </div>
  );
}

export default Navbar;
