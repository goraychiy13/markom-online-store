import styled from 'styled-components';
import { colors } from '../../../../common/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 448px;
  height: 350px;
  margin-bottom: 20px;
  color: ${colors.darkGrey};
`;

export const Tytle = styled.span`
  font-size: 24px;
  font-weight: bold;
`

export const Body = styled.p`
  font-size: 24px;
  text-align: center;
`