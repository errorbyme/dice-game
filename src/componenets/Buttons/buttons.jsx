import styled from "styled-components";

export const Button = styled.button`
  padding: 7px;
  width: 180px;
  margin: 10px 0px;
  background-color: black;
  border: 1px solid black;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
  }
`;
export const OutlineButton = styled(Button)`
  background-color: white;
  color: black;
  &:hover {
    background-color: black;
    color: white;
  }
`;
