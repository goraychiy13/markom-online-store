import Button from '../../uikit/Button';
import { memo } from 'react';
import {
  Container,
  Discount,
  CardImage,
  CardName,
  OriginalPrice,
  CurrentPrice,
  buttonStyles,
} from './style';

type Props = {
  name: string;
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
    <Container>
      {props.discount ? <Discount>-{props.discount}%</Discount> : null}
      <CardImage cardImage={props.cardImage} />
      <CardName>{getCardName()}</CardName>
      {props.discount ? (
        <OriginalPrice>{props.originalPrice} руб</OriginalPrice>
      ) : null}
      <CurrentPrice style={!props.discount ? { marginTop: 23 } : {}}>
        {props.currentPrice} руб
      </CurrentPrice>
      <Button {...buttonStyles}>В корзину</Button>
    </Container>
  );
};

export default memo(ProductCard);
