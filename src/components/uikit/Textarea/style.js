import styled from 'styled-components';
import { colors } from '../../../common/colors';

export const StyledTextarea = styled.textarea`
    width: 97%;
    height: 100px;
    background-color: ${colors.minorShade};
    border-color: ${colors.minorShade};
    font-size: 16px;
    color: ${colors.darkGrey};
    border-radius: 6px;
    padding: calc(1em * 0.4) 10px;
    font-family: 'Fira Sans';
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    outline: none;

    &:focus {
        transition: 0.15s ease-in-out;
        box-shadow: 0 0 0 0.2rem rgba(0, 0, 0, 0.05);
        border-color: ${colors.chineseSilver};
    }

    &::placeholder {
        ${({ color }) => `color: ${color ?? '#999999'}`};
    }
`
