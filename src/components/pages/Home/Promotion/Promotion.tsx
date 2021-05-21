import { memo } from 'react';
import { Container, PromotionTitle, PromotionDate, PromotionImage } from './style';

type Props = {
  image: string;
  title: string;
  date: string;
};

function Promotion(props: Props): JSX.Element {
  return (
    <Container>
      <PromotionImage width="328px" height="328px" src={props.image} alt="" />
      <PromotionTitle>{props.title}</PromotionTitle>
      <PromotionDate>{props.date}</PromotionDate>
    </Container>
  );
}

export default memo(Promotion);
