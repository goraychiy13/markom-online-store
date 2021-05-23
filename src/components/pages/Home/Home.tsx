import { memo } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Banner from '../../modules/Banner';
import ProductCard from '../../modules/ProductCard';
import {
  bannersInfo,
  brands,
  customerReviews,
  drinksInfo,
  nutsInfo,
  ourPlusesInfo,
  productCardInfo,
  productsCategory,
  promotions,
} from './constants';
import CustomerReview from './CustomerReview';
import DesertBanner from './DesertBanner';
import Feedback from './Feedback';
import OurPlusesItem from './OurPlusesItem';
import Promotion from './Promotion';
import {
  BannerWrapper,
  Brands,
  BrandsTitle,
  BrandsWrapper,
  CarouselItem,
  CarouselTitle,
  CustomerReviews,
  CustomerReviewTitle,
  CustomerReviewWrapper,
  DrinksTitle,
  DrinksWrapper,
  HomeWrapper,
  NewArrivalTitle,
  NewArrivalWrapper,
  NutsTitle,
  NutstWrapper,
  OurPluses,
  OurPlusesTitle,
  OurPlusesWrapper,
  ProductCardsWrapper,
  Promotions,
  PromotionsTitle,
  PromotionsWrapper,
} from './style';

const Home: React.FC = () => {
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
          {productCardInfo.map((card) => (
            <ProductCard
              key={card.id}
              {...card}
              productCategory={productsCategory.newArrival}
            />
          ))}
        </ProductCardsWrapper>
      </NewArrivalWrapper>
      <BannerWrapper>
        {bannersInfo.map((banner) => (
          <Banner key={banner.id} {...banner} />
        ))}
      </BannerWrapper>
      <DesertBanner />
      <DrinksWrapper>
        <DrinksTitle>{productsCategory.drinks}</DrinksTitle>
        <ProductCardsWrapper>
          {drinksInfo.map((card) => (
            <ProductCard
              key={card.id}
              {...card}
              productCategory={productsCategory.drinks}
            />
          ))}
        </ProductCardsWrapper>
      </DrinksWrapper>
      <NutstWrapper>
        <NutsTitle>{productsCategory.nuts}</NutsTitle>
        <ProductCardsWrapper>
          {nutsInfo.map((card) => (
            <ProductCard
              key={card.id}
              {...card}
              productCategory={productsCategory.nuts}
            />
          ))}
        </ProductCardsWrapper>
      </NutstWrapper>
      <OurPlusesWrapper>
        <OurPlusesTitle>Наши плюсы</OurPlusesTitle>
        <OurPluses>
          {ourPlusesInfo.map((item) => (
            <OurPlusesItem key={item.id} {...item} />
          ))}
        </OurPluses>
      </OurPlusesWrapper>
      <BrandsWrapper>
        <BrandsTitle>Бренды</BrandsTitle>
        <Brands>
          {brands.map((brand) => (
            <img
              key={brand.id}
              width="210px"
              height="210px"
              src={brand.src}
              alt=""
            />
          ))}
        </Brands>
      </BrandsWrapper>
      <PromotionsWrapper>
        <PromotionsTitle>Акции</PromotionsTitle>
        <Promotions>
          {promotions.map((promotion) => (
            <Promotion key={promotion.id} {...promotion} />
          ))}
        </Promotions>
      </PromotionsWrapper>
      <CustomerReviewWrapper>
        <CustomerReviewTitle>Отзывы клиентов</CustomerReviewTitle>
        <CustomerReviews data-name="customer-reviews">
          {customerReviews.map((review) => (
            <CustomerReview key={review.id} {...review} />
          ))}
        </CustomerReviews>
      </CustomerReviewWrapper>
      <Feedback />
    </HomeWrapper>
  );
};

export default memo(Home);
