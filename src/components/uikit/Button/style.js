import styled from 'styled-components';
import { colors } from '../../../common/colors';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Fira Sans';
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  border: 0;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;
  box-shadow: none;
  ${({ height }) => `height: ${height}`};
  ${({ width }) => `width: ${width}`};
  ${({ maxWidth }) => `max-width: ${maxWidth}`};
  ${({ margin }) => `margin: ${margin}`};
  ${({ padding }) => `padding: ${padding}`};
  ${({ backgroundColor }) => `background-color: ${backgroundColor}`};
  ${({ color }) => `color: ${color || colors.white}`};
  ${({ textDecoration }) => `text-decoration: ${textDecoration}`};
  ${({ fontWeight }) => `font-weight: ${fontWeight}`};

  &:hover {
    ${({ colorModifier }) => `background-color: ${colorModifier}`};
  }
`;
