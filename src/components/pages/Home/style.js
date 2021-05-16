import styled from 'styled-components';
import { colors } from '../../../common/colors';

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const CarouselItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CarouselTitle = styled.div`
  position: absolute;
  color: ${colors.white};
  font-size: 48px;
  font-weight: bold;
`

export const NewArrivalTitle = styled.h1`
  font-size: 32px;
  color: ${colors.darkGrey};
  margin-bottom: 8px;
`

export const ProductCardsWrapper = styled.div`
  display: flex;
`