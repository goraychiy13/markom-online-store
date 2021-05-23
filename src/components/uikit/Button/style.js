import styled from 'styled-components';
import { colors } from '../../../common/colors';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Fira Sans';
  border: 0;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;
  box-shadow: none;
  ${({ fontSize }) => `font-size: ${fontSize ?? '16px'}`};
  ${({ isRowReversed }) =>
    `flex-direction: ${isRowReversed ? 'row-reverse' : 'row'}`};
  ${({ borderRadius }) =>
    `border-radius: ${borderRadius ? borderRadius : '5px'}`};
  ${({ height }) => `height: ${height}`};
  ${({ width }) => `width: ${width}`};
  ${({ margin }) => `margin: ${margin}`};
  ${({ padding }) => `padding: ${padding}`};
  ${({ maxWidth }) => `max-width: ${maxWidth}`};
  ${({ color }) => `color: ${color || colors.white}`};
  ${({ backgroundColor }) => `background-color: ${backgroundColor}`};
  ${({ textDecoration }) => `text-decoration: ${textDecoration}`};
  ${({ fontWeight }) => `font-weight: ${fontWeight ?? 'bold'}`};

  &:hover {
    ${({ colorModifier }) => `color: ${colorModifier}`};
    ${({ boxShadowModifier }) => `box-shadow: ${boxShadowModifier}`};
    ${({ backgroundColorModifier }) =>
      `background-color: ${backgroundColorModifier}`};
  }
`;
