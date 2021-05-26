import { memo } from 'react';
import Button from '../../../uikit/Button';
import { translations } from './constants';
import { Body, buttonStyles, Container, Title } from './style';

function DessertBanner(): JSX.Element {
  return (
    <Container data-name="container">
      <Title data-name="title">{translations.title}</Title>
      <Body data-name="body">{translations.body}</Body>
      <Button {...buttonStyles}>{translations.buttonName}</Button>
    </Container>
  );
}

export default memo(DessertBanner);
