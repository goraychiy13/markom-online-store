import { memo } from 'react';
import {
  HomeWrapper,
  CarouselTitle,
  CarouselItem,
  ProductCardsWrapper,
  NewArrivalTitle,
  BannerWrapper,
  NewArrivalWrapper,
  DrinksWrapper,
  DrinksTitle,
  NutstWrapper,
  NutsTitle,
  OurPluses,
  OurPlusesWrapper,
  OurPlusesTitle,
  BrandsWrapper,
  BrandsTitle,
  Brands,
} from './style';
import { Carousel } from 'react-responsive-carousel';
import ProductCard from '../../modules/ProductCard';
import {
  bannersInfo,
  productCardInfo,
  drinksInfo,
  nutsInfo,
  productsCategory,
  ourPlusesInfo,
  brands,
} from './constants';
import Banner from '../../modules/Banner';
import DesertBanner from './DesertBanner';
import OurPlusesItem from './OurPlusesItem';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Home = (): JSX.Element => {
  return (
    <HomeWrapper>
      <Carousel showThumbs={false} showArrows>
        <CarouselItem>
          <img
            src="https://static-sl.insales.ru/r/nlEYOkOZekE/fit/1408/0/ce/1/plain/files/1/2110/14641214/original/slider.jpg@webp"
            alt="slide"
          />
          <CarouselTitle>Премиум продукты высокого качества</CarouselTitle>
        </CarouselItem>
        <CarouselItem>
          <img
            src="https://static-sl.insales.ru/r/nlEYOkOZekE/fit/1408/0/ce/1/plain/files/1/2110/14641214/original/slider.jpg@webp"
            alt="slide"
          />
          <CarouselTitle>Описание слайда 2</CarouselTitle>
        </CarouselItem>
      </Carousel>
      <NewArrivalWrapper>
        <NewArrivalTitle>{productsCategory.newArrival}</NewArrivalTitle>
        <ProductCardsWrapper>
          {productCardInfo.map((card) => {
            return (
              <ProductCard
                key={card.id}
                {...card}
                productCategory={productsCategory.newArrival}
              />
            );
          })}
        </ProductCardsWrapper>
      </NewArrivalWrapper>
      <BannerWrapper>
        {bannersInfo.map((banner) => {
          return <Banner key={banner.id} {...banner} />;
        })}
      </BannerWrapper>
      <DesertBanner />
      <DrinksWrapper>
        <DrinksTitle>{productsCategory.drinks}</DrinksTitle>
        <ProductCardsWrapper>
          {drinksInfo.map((card) => {
            return (
              <ProductCard
                key={card.id}
                {...card}
                productCategory={productsCategory.drinks}
              />
            );
          })}
        </ProductCardsWrapper>
      </DrinksWrapper>
      <NutstWrapper>
        <NutsTitle>{productsCategory.nuts}</NutsTitle>
        <ProductCardsWrapper>
          {nutsInfo.map((card) => {
            return (
              <ProductCard
                key={card.id}
                {...card}
                productCategory={productsCategory.nuts}
              />
            );
          })}
        </ProductCardsWrapper>
      </NutstWrapper>
      <OurPlusesWrapper>
        <OurPlusesTitle>Наши плюсы</OurPlusesTitle>
        <OurPluses>
          {ourPlusesInfo.map((item) => {
            return <OurPlusesItem key={item.id} {...item} />;
          })}
        </OurPluses>
      </OurPlusesWrapper>
      <BrandsWrapper>
        <BrandsTitle>Бренды</BrandsTitle>
        <Brands>
          {brands.map((brand) => {
            return <img width="210px" height="210px" src={brand.src} alt="" />;
          })}
        </Brands>
      </BrandsWrapper>
    </HomeWrapper>
  );
};

export default memo(Home);
