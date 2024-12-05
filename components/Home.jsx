import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import FoodCard from "./FoodCard";

function Home({
  data,
  toggleSeacrh,
  setFilteredFoods,
  searchItem,
  filteredFood,
}) {
  return (
    <>
      <Navbar toggleSeacrh={toggleSeacrh} searchItem={searchItem} />
      <FoodCard data={data} filteredFood={filteredFood} />
    </>
  );
}
export default Home;
