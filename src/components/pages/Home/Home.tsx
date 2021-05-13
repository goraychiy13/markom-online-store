import { memo } from 'react';
import { HomeWrapper, CarouselTitle, CarouselItem } from './style';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
        <div>Новое поступление</div>
        <div></div>
      </div>
    </HomeWrapper>
  );
};

export default memo(Home);
