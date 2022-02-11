import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushiData, setSushuData] = useState([]);
  const [eatenSushi, setEatenSushi] = useState([]);
  const [wallet, setWallet] = useState(100);

  useEffect(() => {
    fetch(API)
      .then((resp) => resp.json())
      .then((data) => setSushuData(data));
  }, []);

  function handleEatSushi(sushiId) {
    const sushi = sushiData.find((sushiObj) => sushiObj.id === sushiId);

    if (!eatenSushi.includes(sushiId) && wallet - sushi.price >= 0) {
      setEatenSushi((prevArray) => [...prevArray, sushiId]);
      setWallet((prevWallet) => prevWallet - sushi.price);
    } else {
      alert("You already ate this or you can't afford it!");
    }
  }

  return (
    <div className="app">
      <SushiContainer
        eatenSushi={eatenSushi}
        handleEatSushi={handleEatSushi}
        sushiData={sushiData}
      />
      <Table wallet={wallet} eatenSushi={eatenSushi} />
    </div>
  );
}

export default App;
