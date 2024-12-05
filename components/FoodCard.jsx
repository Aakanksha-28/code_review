import React, { useState } from "react";
import { Card } from "smart-webcomponents-react/card";
import { Dialog, Button } from "@mui/material";

function FoodCard({ filteredFood }) {
  const [selectedCard, setSelectedCard] = useState(null);
  const [dialog, setDialog] = useState(false);

  const handleCardClick = (cardData) => {
    setSelectedCard(cardData);
    setDialog(true);
  };

  const handleCloseDialog = () => {
    setDialog(false);
  };

  return (
    <div className="basic-card">
      {filteredFood.map((cardData, index) => (
        <Card
          key={index}
          className="card"
          onClick={() => handleCardClick(cardData)}
        >
          <div>
            <span className="food-name">{cardData.food.label}</span>
          </div>
          <div>
            <p>{cardData.food.nutrients.ENERC_KCAL}</p>
          </div>
        </Card>
      ))}
      {selectedCard && (
        <div>
          <Dialog
            className="dialog-container"
            open={dialog}
            onClose={handleCloseDialog}
          >
            <div className="card-content">
              <h2>Selected Food Details</h2>
              <h4 className="hori-line">
                Food Name: {selectedCard.food.label}
              </h4>
              <p className="hori-line">Nutrition Facts</p>
              <p className="hori-line">
                Calories: {selectedCard.food.nutrients.ENERC_KCAL}
              </p>
              <p className="hori-line">
                Total Fat: {selectedCard.food.nutrients.FAT}
              </p>
              <p className="hori-line">
                Protein: {selectedCard.food.nutrients.PROCNT}
              </p>
              <p className="hori-line">
                Total Carbohydrate: {selectedCard.food.nutrients.CHOCDF}
              </p>
              <Button onClick={handleCloseDialog} className="btn">
                Close
              </Button>
            </div>
          </Dialog>
        </div>
      )}
    </div>
  );
}

export default FoodCard;
