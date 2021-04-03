import React from "react";
import styled from "styled-components";
import { IconType } from "./IconMap";
import { Icon } from "./Icon";

export interface FooterProps {
  mainText: string;
  subText: string;
  iconRef: IconType;
}

const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(4, 2fr) 1fr;
  grid-template-rows: repeat(2, 1fr) 2.5fr 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

const Divider = styled.div`
  grid-area: 2 / 2 / 3 / 6;
  border-top: 3px solid ${(props) => props.theme.colours["primary"]};
  width: 100%;
`;

export const Footer = ({ mainText, subText }: FooterProps) => {
  return (
    <>
      <FooterContainer>
        <Divider></Divider>
        {mainText}
        {subText}
      </FooterContainer>
    </>
  );
};
