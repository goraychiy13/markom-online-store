import styled from 'styled-components';
import { colors } from '../../../common/colors';

export const StyledInput = styled.input`
  width: calc(100% - 20px);
  padding: calc(1em * 0.4) 10px;
  font-family: 'Fira Sans';
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: ${colors.darkGrey};
  background: ${colors.white};
  border: 1px solid ${colors.trolleyGrey};
  border-radius: 6px;
  outline: none;
  vertical-align: middle;

  &:focus {
    transition: 0.15s ease-in-out;
    box-shadow: 0 0 0 0.2rem rgba(0, 0, 0, 0.05);
    border-color: ${colors.chineseSilver};
  }
`;
