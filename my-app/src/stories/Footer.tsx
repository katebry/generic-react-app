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
  grid-template-rows: repeat(2, 1fr) 2fr 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

const Divider = styled.div`
  grid-area: 2 / 2 / 3 / 6;
  border-top: 3px solid ${(props) => props.theme.colours["primary"]};
  width: 100%;
`;

const IconContainer = styled.div`
  grid-area: 3 / 2 / 4 / 3;
  margin-left: 1em;
  margin-top: 1em;
  display: flex;
`;

const MainTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1em;
`;

const SubTextContainer = styled.div`
  grid-area: 3 / 3 / 4 / 6;
  display: flex;
  align-items: center;
  margin-top: 1em;
  margin-left: 2em;
`;

export const Footer = ({ mainText, subText }: FooterProps) => {
  return (
    <>
      <FooterContainer>
        <Divider></Divider>
        <IconContainer>
          <Icon iconRef={IconType.REACT} />
          <MainTextContainer>{mainText}</MainTextContainer>
        </IconContainer>
        <SubTextContainer>{subText}</SubTextContainer>
      </FooterContainer>
    </>
  );
};
