import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background: pink;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledButton = styled.button`
  border: 3px solid red;
  background-color: ${({ variant }) => {
    if (variant === "primary") {
      return "blue";
    }
    if (variant === "secondary") {
      return "green";
    }
    return "yellow";
  }};
  color: ${({ variant }) => {
    if (variant === "primary") {
      return "white";
    }
    if (variant === "secondary") {
      return "pink";
    }
    return "grey";
  }};
  width: 40%;
  height: 110px;
  font-size: 50px;
  border-radius: 20px;
  cursor: pointer;
`;

export const DiffButton = styled(StyledButton)`
  border: none;
  width: 40%;
`;
