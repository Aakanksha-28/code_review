import axios from "axios";
import React, { useState, useEffect } from "react";
import FoodCard from "./FoodCard";

function Fetch() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const api_key = process.env.REACT_APP_API_KEY;
  const api_id = process.env.REACT_APP_API_ID;

  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${apiUrl}/api/food-database/v2/parser?app_key=${api_key}&app_id=${api_id}&nutrition-type=cooking`
      );
      setData(response.data.hints);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <FoodCard data={data} />
    </div>
  );
}

export default Fetch;
