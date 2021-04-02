import React from "react";
import "./button.css";

export interface Button1Props {
  text: string;
}

export const Button1 = ({ text }: Button1Props) => {
  return (
    <>
    <button>{text}</button>
    </>
  )
};
