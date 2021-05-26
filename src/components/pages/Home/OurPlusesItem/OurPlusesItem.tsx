import { memo } from 'react';
import { Body, Container, Title } from './style';

type Props = {
  title: string;
  body: string;
  image: string;
};

function OurPlusesItem(props: Props): JSX.Element {
  return (
    <Container data-name="container">
      <img src={props.image} alt="" />
      <Title data-name="title">{props.title}</Title>
      <Body data-name="body">{props.body}</Body>
    </Container>
  );
}

export default memo(OurPlusesItem);
