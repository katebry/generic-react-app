import React from "react";
import "./button.css";

export interface Button1Props {
  text: string;
  handleClick: () => void
}

export const Button1 = ({ text, handleClick, ...props }: Button1Props) => {
  return (
    <>
    <button onClick={handleClick} {...props}>{text}</button>
    </>
  )
};
