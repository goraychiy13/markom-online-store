import { memo } from 'react';
import { Container, Tytle, Body } from './style';

type Props = {
  title: string;
  body: string;
  image: string;
};

function OurPlusesItem(props: Props): JSX.Element {
  return (
    <Container>
      <img src={props.image} alt="" />
      <Tytle>{props.title}</Tytle>
      <Body>{props.body}</Body>
    </Container>
  );
}

export default memo(OurPlusesItem);
