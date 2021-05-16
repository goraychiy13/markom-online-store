import { memo } from 'react';
import { Container, Title, Body, buttonStyles } from './style';
import Button from '../../../uikit/Button';
import { translations } from './constants';

function DesertBanner(): JSX.Element {
  return (
    <Container>
      <Title>{translations.title}</Title>
      <Body>{translations.body}</Body>
      <Button {...buttonStyles}>{translations.buttonName}</Button>
    </Container>
  );
}

export default memo(DesertBanner);
