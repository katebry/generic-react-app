import React from "react";
import styled from "styled-components";
import { IconType } from "./IconMap";
import { Icon } from "./Icon";

export interface CheckboxProps {
  isChecked: boolean;
  label?: string;
}

const CheckboxContainer = styled.div`
  display: flex;
  vertical-align: middle;
`;

const LabelContainer = styled.div`
  margin-top: 7px;
  margin-left: 5px;
`;

const StyledCheckbox = styled.div<CheckboxProps>`
  flex: 0 0 auto;
  width: 2em;
  height: 2em;
  background-color: ${(props) => props.theme.colours["primary"]};
  border-radius: ${(props) => props.theme.general["border-radius"]};
  transition: all 100ms;
`;

const StyledIcon = styled(Icon)`
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const Checkbox = ({ isChecked, label }: CheckboxProps) => (
  <CheckboxContainer>
    <StyledCheckbox isChecked={isChecked}>
      {isChecked ? <StyledIcon iconRef={IconType.TICK}></StyledIcon> : null}
    </StyledCheckbox>
    <LabelContainer>{label}</LabelContainer>
  </CheckboxContainer>
);
