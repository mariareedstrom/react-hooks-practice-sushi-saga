import React from "react";

function Sushi({ id, name, img_url, price, handleEatSushi, eatenSushi }) {
  return (
    <div className="sushi">
      <div className="plate" onClick={() => handleEatSushi(id)}>
        {!eatenSushi.includes(id) ? (
          <img src={img_url} alt={name} width="100%" />
        ) : null}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
