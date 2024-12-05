import React from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/login");
  };
  return (
    <div className="welcome">
      <div className="container">
        <div className="image-container">
          <img src="/favicon.ico" />
        </div>
        <h1>Welcome to EatWise!🙃</h1>
        <p>
          Welcome to EatWise, your ultimate nutrition guide! Simply search for
          any food item, and we'll provide you with detailed information on its
          nutritional content and calorie count. Whether you're following a
          specific diet or just curious about the foods you're consuming,
          EatWise is here to help you make informed choices for a healthier
          lifestyle
        </p>
      </div>
      <input
        id="submit-btn"
        type="submit"
        name="submit"
        value="LOGIN"
        onClick={handleLoginClick}
      />
    </div>
  );
}

export default Welcome;
