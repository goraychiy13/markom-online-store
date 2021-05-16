import styled from 'styled-components';
import { colors } from '../../../../common/colors';

export const Title = styled.h2`
  font-size: 32px;
  color: ${colors.white};
`
export const Body = styled.span`
  color: ${colors.white};
  font-size: 24px;
  margin-bottom: 20px;
`

export const buttonStyles = {
  width: '170px',
  height: '40px',
  backgroundColor: colors.darkGreen,
  colorModifier: colors.minorGreen,
  type: "button",
  fontWeight: 'normal',
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px 40px;
  height: 286px;
  max-height: 318px;
  margin-bottom: 60px;
  background-image: url(https://static-sl.insales.ru/r/MjqsHu0tN0g/fit/1408/0/ce/1/plain/files/1/2281/14797033/original/info_2.jpg);
`;
