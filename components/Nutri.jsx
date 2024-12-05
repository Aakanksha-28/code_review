import React, { useState, useEffect } from "react";
import axios from "axios";

function Nutri() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const api_key = process.env.REACT_APP_API_KEY;
  const api_id = process.env.REACT_APP_API_ID;

  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${apiUrl}/api/food-database/v2/nutrients?app_key=${api_key}&app_id=${api_id}`
      );
      setData(response.data.calories);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  console.log(data);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>erfbherfbe</h1>
    </div>
  );
}

export default Nutri;
