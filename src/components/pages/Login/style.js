import styled from 'styled-components';
import { colors } from '../../../common/colors';

export const LoginWrapper = styled.div`
  margin: 0 auto;
  padding: 0 40px;
`;

export const LoginHeader = styled.h1`
  margin: 0;
  padding: 1rem 0;
  font-family: 'Fira Sans';
  line-height: 1.2;
  font-size: 2.1429rem;
  color: ${colors.darkGrey};
`;

export const LoginForm = styled.div`
  padding: 1rem 0;
  display: grid;
  grid-template-columns: 0.5fr;
`;

export const LoginRow = styled.div`
  &:last-child {
    margin-top: 1rem;
  }
`;

export const LoginLabel = styled.div`
  margin-bottom: 0.5em;
  font-family: 'Fira Sans';
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  color: ${colors.darkGrey};

  &::after {
    font-size: 0.9em;
    margin-left: 0.2em;
    line-height: 0.7em;
    content: '*';
    color: red;
  }
`;

export const LoginButtons = styled.div`
  padding-top: 1rem;
  display: flex;
`;
