import { colors } from '../../../common/colors';
import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 0;
  font-family: 'Fira Sans';
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  border: 0;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;
  box-shadow: none;
  ${({ width }) => `width: ${width}`};
  ${({ height }) => `height: ${height}`};
  ${({ margin }) => `margin: ${margin}`};
  ${({ backgroundColor }) => `background-color: ${backgroundColor}`};
  ${({ color }) => `color: ${color || colors.white}`};
  ${({ textDecoration }) => `text-decoration: ${textDecoration}`};
  ${({ fontWeight }) => `font-weight: ${fontWeight}`};

  &:hover {
    ${({ colorModifier }) => `background-color: ${colorModifier}`};
  }
`;
