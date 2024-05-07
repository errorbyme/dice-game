import React from "react";
import styled from "styled-components";

export default function StartPage({ toggleGamepage }) {
  return (
    <Container>
      <div>
        <img src="./dice.png" alt="" />
      </div>
      <div className="side-box">
        <h1>Dice Game</h1>
        <Button onClick={toggleGamepage}>Play Now</Button>
      </div>
    </Container>
  );
}
const Container = styled.div`
  margin: 0 auto;
  max-width: 1180px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;

  img {
    width: 450px;
  }

  .side-box {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
  @media screen and (max-width: 990px) {
    img {
      width: 400px;
    }
    .side-box {
      h1 {
        font-size: 80px;
      }
    }
  }
  @media screen and (max-width: 860px) {
    img {
      width: 330px;
    }
    .side-box {
      h1 {
        font-size: 60px;
      }
    }
  }
  @media screen and (max-width: 715px) {
    img {
      width: 300px;
    }
    .side-box {
      h1 {
        font-size: 40px;
      }
    }
  }
  @media screen and (max-width: 567px) {
    flex-direction: column;
    justify-content: center;
    img {
      width: 300px;
    }
    .side-box {
      h1 {
        font-size: 40px;
      }
    }
  }
  @media screen and (max-width: 320px) {
    img {
      width: 230px;
    }
    .side-box {
      h1 {
        font-size: 30px;
      }
    }
  }
`;
const Button = styled.button`
  padding: 10px;
  width: 220px;
  border: none;
  background-color: black;
  cursor: pointer;
  color: white;
  float: inline-end;
  font: 16px;
  border: 1px solid transparent;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;
