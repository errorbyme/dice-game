import React, { useState } from "react";
import StartPage from "./componenets/StartPage";
import "./App.css";
import GamePage from "./componenets/GamePage";

export default function App() {
  const [isGameStarted, SetisGameStarted] = useState(false);
  const toggleGamepage = () => {
    SetisGameStarted(!isGameStarted);
  };
  return (
    <>
      {/* {!isGameStarted ? (
        <StartPage toggleGamepage={toggleGamepage} />
      ) : (
        <GamePage />
      )} */}
      <GamePage />
    </>
  );
}
