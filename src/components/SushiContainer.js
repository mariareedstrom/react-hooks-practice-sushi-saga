import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushiData, handleEatSushi, eatenSushi }) {
  const [beltPosition, setBeltPosition] = useState(0);

  function sushiToRender() {
    const displaySushi = sushiData.slice(beltPosition, beltPosition + 4);
    return displaySushi;
  }

  function handleMoreButton() {
    setBeltPosition((prevPosition) => prevPosition + 4);
  }

  return (
    <div className="belt">
      {sushiToRender().map((sushiObj) => (
        <Sushi
          key={sushiObj.id}
          {...sushiObj}
          handleEatSushi={handleEatSushi}
          eatenSushi={eatenSushi}
        />
      ))}
      <MoreButton handleMoreSushi={handleMoreButton} />
    </div>
  );
}

export default SushiContainer;
