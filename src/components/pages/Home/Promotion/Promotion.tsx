import { memo } from 'react';
import {
  Container,
  PromotionDate,
  PromotionImage,
  PromotionTitle,
} from './style';

type Props = {
  image: string;
  title: string;
  date: string;
};

function Promotion(props: Props): JSX.Element {
  return (
    <Container data-name="container">
      <PromotionImage
        width="328px"
        height="328px"
        src={props.image}
        alt=""
        data-name="promotion-image"
      />
      <PromotionTitle data-name="promotion-title">{props.title}</PromotionTitle>
      <PromotionDate data-name="promotion-data">{props.date}</PromotionDate>
    </Container>
  );
}

export default memo(Promotion);
