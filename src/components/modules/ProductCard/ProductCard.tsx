import Button from '../../uikit/Button';
import { memo } from 'react';
import {
  Container,
  Discount,
  CardImage,
  CardName,
  OriginalPrice,
  CurrentPrice,
} from './style';
import { basketIcon } from '../../../icons/basketIcon';
import { colors } from '../../../common/colors';

type Props = {
  name: string;
  amount: string;
  originalPrice: number;
  currentPrice: number;
  discount: number;
  cardImage: string;
};

const ProductCard = (props: Props): JSX.Element => {
  console.log(props.cardImage);
  return (
    <Container>
      {props.discount ? <Discount>-{props.discount}%</Discount> : null}
      <CardImage cardImage={props.cardImage} />
      <CardName>{`${props.name}, ${props.amount}`}</CardName>
      {props.discount ? (
        <OriginalPrice>{props.originalPrice} руб</OriginalPrice>
      ) : null}
      <CurrentPrice style={!props.discount ? { marginTop: 23 } : {}}>
        {props.currentPrice} руб
      </CurrentPrice>
      <Button
        type="button"
        hasIcon
        width={'200px'}
        height={'40px'}
        iconWidth={'19px'}
        iconHeight={'19px'}
        backgroundColor={colors.darkGreen}
        colorModifier={colors.minorGreen}
        iconMargin={'0 0 0 5px'}
        fontWeight={'400'}
        icon={basketIcon}
        iconFill={colors.white}
        isRowReversed={true}
        margin={'10px 0 0 0'}
      >
        В корзину
      </Button>
    </Container>
  );
};

export default memo(ProductCard);
