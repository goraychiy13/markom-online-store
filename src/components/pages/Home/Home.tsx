import { memo } from 'react';
import { HomeWrapper, CarouselTitle, CarouselItem, ProductCardsWrapper, NewArrivalTitle } from './style';
import { Carousel } from 'react-responsive-carousel';
import ProductCard from '../../modules/ProductCard';
import { productCardInfo } from './constants';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Home = (props: any): JSX.Element => {
  return (
    <HomeWrapper>
      <Carousel showThumbs={false} showArrows>
        <CarouselItem>
          <img src="https://static-sl.insales.ru/r/nlEYOkOZekE/fit/1408/0/ce/1/plain/files/1/2110/14641214/original/slider.jpg@webp" />
          <CarouselTitle>Премиум продукты высокого качества</CarouselTitle>
        </CarouselItem>
        <CarouselItem>
          <img src="https://static-sl.insales.ru/r/nlEYOkOZekE/fit/1408/0/ce/1/plain/files/1/2110/14641214/original/slider.jpg@webp" />
          <CarouselTitle>Описание слайда 2</CarouselTitle>
        </CarouselItem>
      </Carousel>
      <div style={{ marginTop: 50 }}>
        <NewArrivalTitle>Новое поступление</NewArrivalTitle>
        <ProductCardsWrapper>
          {productCardInfo.map((card) => {
            return <ProductCard key={card.id} {...card} />;
          })}
        </ProductCardsWrapper>
      </div>
    </HomeWrapper>
  );
};

export default memo(Home);
