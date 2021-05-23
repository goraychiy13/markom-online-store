import styled from 'styled-components';
import { colors } from '../../../common/colors';

export const AuthWrapper = styled.div`
  font-family: 'Fira Sans';
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
`;

export const AuthHeader = styled.h1`
  margin: 0;
  padding: 1rem 0;
  line-height: 1.2;
  font-size: 2rem;
  color: ${colors.darkGrey};
`;

export const AuthForm = styled.div`
  padding: 1rem 0;
  display: grid;
  grid-template-columns: 0.5fr;
`;

export const AuthRow = styled.div`
  margin-top: 1rem;

  &:first-child {
    margin-top: 0rem;
  }
`;

export const AuthLabel = styled.div`
  margin-bottom: 0.5em;
  line-height: 1;
  color: ${colors.darkGrey};

  &::after {
    font-size: 0.9em;
    margin-left: 0.2em;
    line-height: 0.7em;
    color: red;
    ${({ hasContent }) => !hasContent && `content: '*'`}
  }
`;

export const AuthSelectWrapper = styled.div`
  position: relative;

  &::after {
    content: '▼';
    display: block;
    position: absolute;
    width: 20px;
    height: 20px;
    right: 10px;
    top: 10px;
    opacity: 0.8;
    pointer-events: none;
    color: ${colors.grey};
  }
`;

export const AuthButtons = styled.div`
  padding-top: 1rem;
  display: flex;
`;
