import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSeletor from "./NumberSeletor";
import RollDice from "./RollDice";
import Rules from "./Rules";
import TopHeader from "./TopHeader";

export default function GamePage() {
  const [score, Setscore] = useState(0);
  const [selectedN, SetselectedN] = useState();
  const [currentDice, setcurrentDice] = useState(1);
  const [error, seterror] = useState("");
  const [rulespage, Setrulespage] = useState(false);
  const [Hs, SetHs] = useState(0);
  var h = localStorage.getItem("Highest_score");
  if (parseInt(h) === null || parseInt(h) == NaN) {
    localStorage.setItem("Highest_score", Hs);
  }
  if (parseInt(h) >= Hs) {
    SetHs(parseInt(h) + 1);
  }
  useEffect(() => {
    if (score > Hs) {
      SetHs(score);
      localStorage.setItem("Highest_score", Hs);
    }
  }, [score]);

  const rollDice = () => {
    if (!selectedN) {
      seterror("Please select a Number");
      return;
    }
    const randomNo = Math.floor(Math.random() * 6 + 1);
    setcurrentDice(randomNo);
    if (selectedN == randomNo) {
      Setscore(score + randomNo);
    } else {
      Setscore(score - 2);
    }
    SetselectedN();
  };
  const resetGame = () => {
    Setscore(0);
    setcurrentDice(1);
    SetselectedN();
  };
  return (
    <Main>
      <TopHeader Hs={Hs} />
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSeletor
          SetselectedN={SetselectedN}
          selectedN={selectedN}
          error={error}
          seterror={seterror}
        />
      </div>
      <div className="main_section">
        <RollDice
          currentDice={currentDice}
          rollDice={rollDice}
          resetGame={resetGame}
          Setrulespage={Setrulespage}
          rulespage={rulespage}
        />
      </div>
      <div className="bottom_section">{rulespage && <Rules />}</div>
    </Main>
  );
}
const Main = styled.div`
  padding-top: 20px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .bottom_section {
    display: flex;
    justify-content: center;
  }
`;
