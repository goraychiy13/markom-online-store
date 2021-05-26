import { memo } from 'react';
import { colors } from '../../../../common/colors';
import Button from '../../../uikit/Button';
import Checkbox from '../../../uikit/Checkbox';
import Input from '../../../uikit/Input';
import Textarea from '../../../uikit/Textarea';
import { buttonStyles, Container, NameEmailWrapper, Title } from './style';

type Props = {};

function Feedback(props: Props): JSX.Element {
  return (
    <Container data-name="container">
      <Title data-name="title">Обратная связь</Title>
      <NameEmailWrapper data-name="name-email-wrapper">
        <Input
          border="none"
          background={colors.minorShade}
          placeholder="Имя*"
          color={colors.trolleyGrey}
          marginRight={'32px'}
          height={'37px'}
        />
        <Input
          border="none"
          background={colors.minorShade}
          placeholder="Ваша почта*"
          color={colors.trolleyGrey}
          height={'37px'}
        />
      </NameEmailWrapper>
      <Textarea placeholder="Ваш вопрос, отзыв или пожелание*" />
      <Checkbox title="Настоящим подтверждаю, что я ознакомлен и согласен с условиями оферты и политики конфиденциальности *" />
      <Button {...buttonStyles}>Отправить</Button>
    </Container>
  );
}

export default memo(Feedback);
