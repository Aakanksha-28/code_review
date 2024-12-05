import React, { useState, useEffect } from "react";

function Search({ toggleSearch, searchItem }) {
  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        className="search-bar"
        value={searchItem}
        onChange={toggleSearch}
      />
    </>
  );
}
export default Search;
