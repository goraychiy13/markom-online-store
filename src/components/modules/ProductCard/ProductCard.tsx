import { memo } from 'react';
import { productsCategory } from '../../pages/Home/constants';
import Button from '../../uikit/Button';
import {
  buttonStyles,
  CardImage,
  CardName,
  Container,
  CurrentPrice,
  Discount,
  OriginalPrice,
} from './style';

type Props = {
  name: string;
  productCategory: string;
  amount: string;
  originalPrice: number;
  currentPrice: number;
  discount: number;
  cardImage: string;
};

const ProductCard = (props: Props): JSX.Element => {
  function getCardName(): string {
    return `${props.name}, ${props.amount}`;
  }

  return (
    <Container data-name="container">
      {props.discount ? (
        <Discount data-name="discount">-{props.discount}%</Discount>
      ) : null}
      <CardImage cardImage={props.cardImage} data-name="card-image" />
      <CardName data-name="card-name">{getCardName()}</CardName>
      {props.discount ? (
        <OriginalPrice data-name="original-price">
          {props.originalPrice} руб
        </OriginalPrice>
      ) : null}
      <CurrentPrice
        style={
          !props.discount &&
          props.productCategory === productsCategory.newArrival
            ? { marginTop: 23 }
            : {}
        }
        data-name="current-price"
      >
        {props.currentPrice} руб
      </CurrentPrice>
      <Button {...buttonStyles}>В корзину</Button>
    </Container>
  );
};

export default memo(ProductCard);
