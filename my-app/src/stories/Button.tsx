import React from "react";
import styled from "styled-components";

export interface ButtonProps {
  text: string;
  handleClick?: () => void;
}

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colours["tertiary"]};
  padding: ${(props) => props.theme.spacing["padding"]};
  font-size: ${(props) => props.theme.font["xsmall"]};
  border-radius: ${(props) => props.theme.general["border-radius"]};
  border: none;
  &:active {
    background-color: ${(props) => props.theme.colours["primary"]};
  }
  &:hover {
    background-color: ${(props) => props.theme.colours["primary"]};
    border: ${(props) => props.theme.general["border"]};
  }
  &:focus {
    outline: none;
    border: ${(props) => props.theme.general["border"]};
  }
`;

export const Button = ({ text, handleClick, ...props }: ButtonProps) => {
  return (
    <>
      <StyledButton onClick={handleClick} {...props}>
        {text}
      </StyledButton>
    </>
  );
};
