import { colors } from '../../../common/colors';
import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  border-color: ${colors.darkGreen};
  outline: none;
  transition: all 0.3s ease;
  box-shadow: none;
  ${({ width }) => `width: ${width}`};
  ${({ height }) => `height: ${height}`};
  ${({ backgroundColor }) => `background-color: ${backgroundColor}`};
  ${({ color }) => `color: ${color || colors.white}`};

  &:hover {
    background-color: ${colors.minorGreen};
  }
`;
