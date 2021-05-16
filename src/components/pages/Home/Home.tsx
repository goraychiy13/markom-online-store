import { memo } from 'react';
import {
  HomeWrapper,
  CarouselTitle,
  CarouselItem,
  ProductCardsWrapper,
  NewArrivalTitle,
  BannerWrapper,
  NewArrivalWrapper,
} from './style';
import { Carousel } from 'react-responsive-carousel';
import ProductCard from '../../modules/ProductCard';
import { bannersInfo, productCardInfo } from './constants';
import Banner from '../../modules/Banner';
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
        <NewArrivalTitle>Новое поступление</NewArrivalTitle>
        <ProductCardsWrapper>
          {productCardInfo.map((card) => {
            return <ProductCard key={card.id} {...card} />;
          })}
        </ProductCardsWrapper>
      </NewArrivalWrapper>
      <BannerWrapper>
        {bannersInfo.map((banner) => {
          return <Banner {...banner} />;
        })}
      </BannerWrapper>
    </HomeWrapper>
  );
};

export default memo(Home);
