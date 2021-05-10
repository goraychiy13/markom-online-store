import { memo } from 'react';
import { colors } from '../../../common/colors';
import Button from '../../uikit/Button';
import Input from '../../uikit/Input';
import { loginButtons, loginInputs, LOGIN_ENTER } from './constants';
import {
  LoginButtons,
  LoginForm,
  LoginHeader,
  LoginLabel,
  LoginRow,
  LoginWrapper,
} from './style';

type Props = {};

const Login: React.FC<Props> = (props: any): JSX.Element => {
  return (
    <LoginWrapper data-name="login-wrapper">
      <LoginHeader>Вход в кабинет покупателя</LoginHeader>
      <LoginForm>
        {loginInputs.map((field) => (
          <LoginRow key={field.type}>
            <LoginLabel>{field.value}</LoginLabel>
            <Input />
          </LoginRow>
        ))}
      </LoginForm>
      <LoginButtons>
        {loginButtons.map((button) => (
          <Button
            key={button.type}
            width={button.type === LOGIN_ENTER ? '80px' : 'none'}
            height={button.type === LOGIN_ENTER ? '40px' : '100%'}
            margin={'auto 16px auto 0'}
            backgroundColor={
              button.type === LOGIN_ENTER ? colors.darkGreen : colors.white
            }
            colorModifier={
              button.type !== LOGIN_ENTER ? 'none' : colors.minorGreen
            }
            color={
              button.type === LOGIN_ENTER ? colors.white : colors.darkGreen
            }
            textDecoration={button.type !== LOGIN_ENTER ? 'underline' : 'none'}
            fontWeight={'400'}
          >
            {button.value}
          </Button>
        ))}
      </LoginButtons>
    </LoginWrapper>
  );
};

export default memo(Login);
