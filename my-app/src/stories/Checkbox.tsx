import React from "react";
import styled from "styled-components";
import { IconType } from "./IconMap";
import { Icon } from "./Icon";

export interface CheckboxProps {
  isChecked: boolean;
  label?: string;
}

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const StyledCheckbox = styled.div<CheckboxProps>`
  flex: 0 0 auto;
  width: 2em;
  height: 2em;
  background-color: ${(props) => props.theme.colours["primary"]};
  border-radius: ${props => props.theme.general["border-radius"]};
  transition: all 100ms;
`;

const StyledIcon = styled(Icon)`
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const Checkbox = ({ isChecked }: CheckboxProps) => (
  <CheckboxContainer>
    <StyledCheckbox isChecked={isChecked}>
      {isChecked ? <StyledIcon iconRef={IconType.TICK}></StyledIcon> : null}
    </StyledCheckbox>
  </CheckboxContainer>
);
