import styled from "styled-components";
import { Button, OutlineButton } from "./Buttons/buttons";

export default function RollDice({
  resetGame,
  currentDice,
  rollDice,
  Setrulespage,
  rulespage,
}) {
  return (
    <DicesCont>
      <div className="dice" onClick={rollDice}>
        <img src={`dices/dice_${currentDice}.png`} height={"200px"} alt="" />
      </div>
      <div className="contentBox">
        <h4>Click on Dice to roll</h4>
        <div className="buttons">
          <Button onClick={resetGame}>Reset Score</Button>
          <OutlineButton onClick={() => Setrulespage(!rulespage)}>
            {rulespage ? "Hide" : "Show"} Rules
          </OutlineButton>
        </div>
      </div>
    </DicesCont>
  );
}
const DicesCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 30px;
  h4 {
    text-align: center;
  }
  .buttons {
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 500px) {
    img {
      width: 170px;
      height: auto;
    }
  }
`;
