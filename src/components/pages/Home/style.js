import styled from 'styled-components';
import { colors } from '../../../common/colors';

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CarouselItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CarouselTitle = styled.div`
  position: absolute;
  color: ${colors.white};
  font-size: 48px;
  font-weight: bold;
`;
export const NewArrivalWrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 70px;
`;

export const NewArrivalTitle = styled.h1`
  font-size: 32px;
  color: ${colors.darkGrey};
  margin-bottom: 8px;
`;
export const DrinksTitle = NewArrivalTitle;
export const NutsTitle = NewArrivalTitle;

export const ProductCardsWrapper = styled.div`
  display: flex;
`;

export const BannerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const DrinksWrapper = styled.div`
  margin-bottom: 70px;
`;

export const NutstWrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 70px;
`;

export const OurPluses = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const OurPlusesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
`;

export const OurPlusesTitle = styled.h1`
  margin-bottom: 48px;
  color: ${colors.darkGrey};
  font-size: 32px;
`;

export const BrandsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Brands = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BrandsTitle = styled.h1`
  margin-bottom: 20px;
  color: ${colors.darkGrey};
  font-size: 32px;
`;
