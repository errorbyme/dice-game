import React, { useState } from "react";
import styled from "styled-components";

export default function NumberSeletor({
  seterror,
  error,
  selectedN,
  SetselectedN,
}) {
  const BoxNumbers = [1, 2, 3, 4, 5, 6];
  const numberselected = (v) => {
    SetselectedN(v);
    seterror("");
  };
  return (
    <NContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {BoxNumbers.map((v, i) => {
          return (
            <Box
              $isselected={+(v === selectedN)}
              key={i}
              onClick={() => numberselected(v)}
            >
              {v}
            </Box>
          );
        })}
      </div>
      <p>Select a Number</p>
    </NContainer>
  );
}
const NContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  img {
    transition: all 900ms;
  }
  .error {
    color: #ff4444;
  }
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700;
  }
  @media screen and (max-width: 680px) {
    .flex {
      display: flex;
      gap: 15px;
    }
    p {
      font-size: 15px;
      font-weight: 700;
    }
  }
  @media screen and (max-width: 400px) {
    .flex {
      display: flex;
      gap: 5px;
    }
    p {
      font-size: 12px;
      font-weight: 700;
    }
  }
`;

const Box = styled.div`
  height: 68px;
  width: 68px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 27px;
  font-weight: 700;
  cursor: pointer;
  background-color: ${({ $isselected }) => $isselected && "black"};
  color: ${({ $isselected }) => $isselected && "white"};

  @media screen and (max-width: 680px) {
    height: 40px;
    width: 40px;
    font-size: 20px;
  }
  @media screen and (max-width: 520px) {
    height: 30px;
    width: 30px;
  }
`;
