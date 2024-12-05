import "./App.css";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import axios from "axios";
import Search from "./components/Search";
import Welcome from "./components/Welcome";
import FoodCard from "./components/FoodCard";
import Login from "./components/Login";
import Chart from "./components/Chart";

function App() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const api_key = process.env.REACT_APP_API_KEY;
  const api_id = process.env.REACT_APP_API_ID;

  const [data, setData] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [filteredFood, setFilteredFoods] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${apiUrl}/api/food-database/v2/parser?app_key=${api_key}&app_id=${api_id}`
      );
      setData(response.data.hints);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredItems = data.filter(
    (item) =>
      item.food.label &&
      item.food.label.toLowerCase().includes(searchItem.toLowerCase())
  );

  useEffect(() => {
    setFilteredFoods(filteredItems);
  }, [searchItem, data]);

  const handleInputChange = (e) => {
    const searchItem = e.target.value;
    setSearchItem(searchItem);
  };

  return (
    <div className="app">
      <div className="content">
        <Router>
          <Routes>
            <Route path="" exact element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/Home"
              element={
                <Home
                  data={data}
                  toggleSeacrh={handleInputChange}
                  setFilteredFoods={setFilteredFoods}
                  searchItem={searchItem}
                  filteredFood={filteredFood}
                />
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
