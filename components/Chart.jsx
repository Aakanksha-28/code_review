import React, { useState, useEffect } from "react";
import axios from "axios";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";

function Chart() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const api_key = process.env.REACT_APP_API_KEY;
  const api_id = process.env.REACT_APP_API_ID;

  const [data, setData] = useState([]);

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

  //   const food_details = [
  //     { value: data.hints.food.nutrients.FAT, label: "Fat" },
  //     { value: data.hints.food.nutrients.CHOCDF, label: "Carbs" },
  //     { value: data.hints.food.nutrients.PROCNT, label: "Protein" },
  //   ];

  const food_details = [
    { value: data.hints.food.nutrients.FAT, label: "Fat" },
    { value: data.hints.food.nutrients.CHOCDF, label: "Carbs" },
    { value: data.hints.food.nutrients.PROCNT, label: "Protein" },
  ];

  const size = {
    width: 400,
    height: 200,
  };
  const StyledText = styled("text")(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: "middle",
    dominantBaseline: "central",
    fontSize: 20,
  }));

  function PieCenterLabel({ children }) {
    const { width, height, left, top } = useDrawingArea();
    return (
      <StyledText x={left + width / 2} y={top + height / 2}>
        {children}
      </StyledText>
    );
  }

  return (
    <PieChart series={[{ food_details, innerRadius: 80 }]} {...size}>
      <PieCenterLabel>Center label</PieCenterLabel>
    </PieChart>
  );
}

export default Chart;
