import React from "react";
import styled from "styled-components";

export default function TotalScore({ score }) {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
}
const ScoreContainer = styled.div`
  max-width: 200px;
  text-align: center;
  h1 {
    font-size: 80px;
    line-height: 80px;
  }
  p {
    font-size: 26px;
    font-weight: 500px;
  }
  @media screen and (max-width: 700px) {
    h1 {
      font-size: 50px;
      line-height: 80px;
    }
    p {
      font-size: 15px;
    }
  }
  @media screen and (max-width: 400px) {
    h1 {
      font-size: 25px;
      line-height: 50px;
    }
    p {
      font-size: 10px;
    }
  }
`;
