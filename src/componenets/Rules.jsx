import React from "react";
import styled from "styled-components";

export default function Rules() {
  return (
    <RulesCont>
      <h3>How to play dice game</h3>
      <div className="text">
        <p>
          - after click on dice if selected number is equal to dice number you
          will get same points as dice.
        </p>
        <p>- If u get wrong guess then 2 point wil deducted from score</p>
      </div>
    </RulesCont>
  );
}
const RulesCont = styled.div`
  padding: 5px 10px;
  border: #ffbcbc;
  text-align: center;
  background-color: #fcdbdb;
  width: 600px;
`;
