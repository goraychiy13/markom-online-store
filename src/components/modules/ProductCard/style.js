import styled from 'styled-components';
import { colors } from '../../../common/colors';
import { basketIcon } from '../../../icons/basketIcon';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid ${colors.minorShade};
  max-width: 202px;
  height: 388px;
  border-radius: 10px;
  position: relative;
  padding: 10px;
  margin-right: 15px;
`
export const Discount = styled.div`
  position: absolute;
  top: 3px;
  left: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.darkRed};
  border-radius: 6px;
  width: 52px;
  height: 30px;
  color: ${colors.white};
  font-size: 1.1rem;
  z-index: 1001;
`

export const CardName = styled.a`
  text-decoration: none;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 37px;
  margin-top: 15px;

  &:hover {
    color: ${colors.minorGreen}
  }
`
export const OriginalPrice = styled.span`
  text-decoration: line-through;
  font-size: 18px;
  color: ${colors.grey};
  line-height: 1.3;
`
export const CurrentPrice = styled.span`
  font-size: 28px;
  color: ${colors.darkGrey};
  font-weight: 600;
  line-height: 1.3;
`

export const CardImage = styled.div`
  width: 202px;
  height: 202px;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  ${({ cardImage }) => `background-image: url(${cardImage})`};
`

export const buttonStyles = {
  type: 'button',
  hasIcon: true,
  width: '200px',
  height: '40px',
  iconWidth: '19px',
  iconHeight: '19px',
  backgroundColor: colors.darkGreen,
  colorModifier: colors.minorGreen,
  iconMargin: '0 0 0 5px',
  fontWeight: '400',
  icon: basketIcon,
  iconFill: colors.white,
  isRowReversed: true,
  margin: '10px 0 0 0',
};
