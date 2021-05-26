import { memo } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Banner from '../../modules/Banner';
import ProductCard from '../../modules/ProductCard';
import {
  bannersInfo,
  brands,
  carouselItems,
  customerReviews,
  drinksInfo,
  nutsInfo,
  ourPlusesInfo,
  productCardInfo,
  productsCategory,
  promotions,
} from './constants';
import CustomerReview from './CustomerReview';
import DesertBanner from './DessertBanner';
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
  NutsWrapper,
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
    <HomeWrapper data-name="home-wrapper">
      <Carousel showThumbs={false} showArrows data-name="carousel">
        {carouselItems.map((item) => (
          <CarouselItem key={item.id} data-name="carousel-item">
            <img src={item.urlImage} alt="slide" />
            <CarouselTitle data-name="carousel-title">
              {item.title}
            </CarouselTitle>
          </CarouselItem>
        ))}
      </Carousel>
      <NewArrivalWrapper data-name="new-arrival-wrapper">
        <NewArrivalTitle data-name="new-arrival-title">
          {productsCategory.newArrival}
        </NewArrivalTitle>
        <ProductCardsWrapper data-name="product-cards-wrapper">
          {productCardInfo.map((card) => (
            <ProductCard
              key={card.id}
              {...card}
              productCategory={productsCategory.newArrival}
            />
          ))}
        </ProductCardsWrapper>
      </NewArrivalWrapper>
      <BannerWrapper data-name="banner-wrapper">
        {bannersInfo.map((banner) => (
          <Banner key={banner.id} {...banner} />
        ))}
      </BannerWrapper>
      <DesertBanner />
      <DrinksWrapper data-name="drinks-wrapper">
        <DrinksTitle data-name="drinks-title">
          {productsCategory.drinks}
        </DrinksTitle>
        <ProductCardsWrapper data-name="product-cards-wrapper">
          {drinksInfo.map((card) => (
            <ProductCard
              key={card.id}
              {...card}
              productCategory={productsCategory.drinks}
            />
          ))}
        </ProductCardsWrapper>
      </DrinksWrapper>
      <NutsWrapper data-name="nuts-wrapper">
        <NutsTitle data-name="nuts-title">{productsCategory.nuts}</NutsTitle>
        <ProductCardsWrapper data-name="product-cards-wrapper">
          {nutsInfo.map((card) => (
            <ProductCard
              key={card.id}
              {...card}
              productCategory={productsCategory.nuts}
            />
          ))}
        </ProductCardsWrapper>
      </NutsWrapper>
      <OurPlusesWrapper data-name="our-pluses-wrapper">
        <OurPlusesTitle data-name="our-pluses-title">Наши плюсы</OurPlusesTitle>
        <OurPluses data-name="our-pluses">
          {ourPlusesInfo.map((item) => (
            <OurPlusesItem key={item.id} {...item} />
          ))}
        </OurPluses>
      </OurPlusesWrapper>
      <BrandsWrapper data-name="brands-wrapper">
        <BrandsTitle data-name="brands-title">Бренды</BrandsTitle>
        <Brands data-name="brands">
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
      <PromotionsWrapper data-name="promotions-wrapper">
        <PromotionsTitle data-name="promotions-title">Акции</PromotionsTitle>
        <Promotions data-name="promotions">
          {promotions.map((promotion) => (
            <Promotion key={promotion.id} {...promotion} />
          ))}
        </Promotions>
      </PromotionsWrapper>
      <CustomerReviewWrapper data-name="customer-review-wrapper">
        <CustomerReviewTitle data-name="customer-review-title">
          Отзывы клиентов
        </CustomerReviewTitle>
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
