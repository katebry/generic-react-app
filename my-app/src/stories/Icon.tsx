import { iconMap, IconType } from "./IconMap";
import styled from "styled-components";

export interface IconProps {
  iconRef: IconType;
}

const MappedIcon = (props: IconProps) => {
  const { iconRef, ...rest } = props;
  return iconMap[iconRef] ? iconMap[iconRef](rest) : null
};

export const Icon = styled(MappedIcon)`
  color: ${(props) => props.theme.colours["secondaryDark"]};
  width: 1rem;
  height: 1rem;
`;
