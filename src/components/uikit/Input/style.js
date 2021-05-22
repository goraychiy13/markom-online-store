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
  outline: none;
  vertical-align: middle;
  ${({ border }) => `border: ${border ?? `1px solid ${colors.trolleyGrey}`}`};
  ${({ borderRadius }) => `border-radius: ${borderRadius ?? '6px'}`};
  ${({ background }) => `background: ${background ?? colors.white}`};
  ${({ marginRight }) => `margin-right: ${marginRight ?? 0}`};
  ${({ height }) => `height: ${height ?? '25px'}`};

  &:focus {
    transition: 0.15s ease-in-out;
    box-shadow: 0 0 0 0.2rem rgba(0, 0, 0, 0.05);
    border-color: ${colors.chineseSilver};
  }

  &::placeholder {
    ${({ color }) => `color: ${color ?? '#999999'}`};
    ${({ color }) => `opacity: ${color ? 0.8 : 0.3}`};
  }
`;
