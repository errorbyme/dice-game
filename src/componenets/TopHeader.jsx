import React from "react";
import styled from "styled-components";

export default function TopHeader({ Hs }) {
  return (
    <HCont>
      <h3>Highest Score : {Hs}</h3>
    </HCont>
  );
}
const HCont = styled.div`
  width: 77%;
  padding: 4px;
  margin: auto;
  @media screen and (max-width: 700px) {
    padding-left: 30px;
    width: auto;
    h3 {
      font-size: 15px;
    }
  }
  @media screen and (max-width: 290px) {
    padding-left: 20px;
    width: auto;
    h3 {
      font-size: 13px;
    }
  }
`;
