import { colors } from '../../../../common/colors';
import { memo } from 'react';
import Input from '../../../uikit/Input';
import { Container, Title, NameEmailWrapper, buttonStyles } from './style';
import Textarea from '../../../uikit/Textarea';
import Button from '../../../uikit/Button';
import Checkbox from '../../../uikit/Checkbox';

type Props = {};

function Feedback(props: Props): JSX.Element {
  return (
    <Container>
      <Title>
        Обратная связь
      </Title>
      <NameEmailWrapper>
        <Input
          border="none"
          background={colors.minorShade}
          placeholder="Имя*"
          color={colors.halfShade}
          marginRight={'32px'}
          height={'37px'}
        />
        <Input
          border="none"
          background={colors.minorShade}
          placeholder="Ваша почта*"
          color={colors.halfShade}
          height={'37px'}
        />
      </NameEmailWrapper>
      <Textarea placeholder="Ваш вопрос, отзыв или пожелание*" />
      <Checkbox title="Настоящим подтверждаю, что я ознакомлен и согласен с условиями оферты и политики конфиденциальности *" />
      <Button {...buttonStyles}>
        Отправить
      </Button>
    </Container>
  );
}

export default memo(Feedback);
