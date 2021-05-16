import styled from 'styled-components';
import { colors } from '../../../../common/colors';
import { menuIcon } from '../../../../icons';

export const StyledSearchbar = styled.ul`
  display: flex;
  padding-left: 0;
  max-width: 1408px;
  align-items: center;
  margin-top: 63.5px;
`;

export default styled.div`
  background-image: url('https://static-sl.insales.ru/files/1/1171/14550163/original/markom_logo.svg');
  width: 220px;
  height: 51px;
  background-size: contain;
  background-repeat: no-repeat;
  margin-right: 50px;
  cursor: pointer;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  ${({ marginLeft }) => `margin-left: ${marginLeft ?? '0'}`};
  position: relative;
`
export const AmountProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  background-color: ${colors.darkOrange};
  color: ${colors.white};
  font: 12px 'Fira Sans';
  font-weight: bold;
  position: absolute;
  top: -5px;
  left: 23px;
`

export const TotalPuchase = styled.div`
  color: ${colors.green};
  margin-left: 5px;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
`

export const buttonStyles = {
  hasIcon: true,
  width: '128px',
  height: '50px',
  iconWidth: '30px',
  iconHeight: '30px',
  backgroundColor: colors.darkGreen,
  colorModifier: colors.minorGreen,
  iconMargin: '0 12px 0 0',
  icon: menuIcon,
  type: "button",
}