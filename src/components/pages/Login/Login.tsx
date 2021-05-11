import { memo } from 'react';
import { Link } from 'react-router-dom';
import { colors } from '../../../common/colors';
import Button from '../../uikit/Button';
import Input from '../../uikit/Input';
import {
  loginForgotten,
  loginMain,
  loginRegistration,
  LOGIN_FORGOTTEN_PAGE,
  LOGIN_MAIN_PAGE,
  LOGIN_REGISTRATION_PAGE,
} from './constants';
import {
  LoginButtons,
  LoginForm,
  LoginHeader,
  LoginLabel,
  LoginRow,
  LoginWrapper,
} from './style';
import { TypeLoginPage } from './types';

type Props = {
  pageName: string;
};

const Login: React.FC<Props> = (props) => {
  const getLoginPage = (page: string): TypeLoginPage => {
    switch (page) {
      case LOGIN_MAIN_PAGE:
        return loginMain;
      case LOGIN_FORGOTTEN_PAGE:
        return loginForgotten;
      case LOGIN_REGISTRATION_PAGE:
        return loginRegistration;
      default:
        return loginMain;
    }
  };

  return (
    <LoginWrapper data-name="login-wrapper">
      <LoginHeader data-name="login-header">
        {getLoginPage(props.pageName).pageTitle}
      </LoginHeader>
      <LoginForm data-name="login-form">
        {getLoginPage(props.pageName).inputNames.map((input) => (
          <LoginRow key={input.type} data-name="login-row">
            <LoginLabel data-name="login-label">{input.name}</LoginLabel>
            <Input />
          </LoginRow>
        ))}
      </LoginForm>
      <LoginButtons data-name="login-buttons">
        {getLoginPage(props.pageName).buttons.map((button, buttonIndex) => (
          <Link
            key={button.type}
            to={button.path}
            style={{ textDecoration: 'none' }}
          >
            <Button
              maxWidth={'100%'}
              margin={'auto 16px auto 0'}
              height={buttonIndex === 0 ? '40px' : '100%'}
              padding={buttonIndex === 0 ? '0 16px' : '4px 0'}
              backgroundColor={
                buttonIndex === 0 ? colors.darkGreen : colors.white
              }
              colorModifier={buttonIndex === 0 ? colors.minorGreen : 'none'}
              color={buttonIndex === 0 ? colors.white : colors.darkGreen}
              textDecoration={buttonIndex === 0 ? 'none' : 'underline'}
              fontWeight={'400'}
            >
              {button.name}
            </Button>
          </Link>
        ))}
      </LoginButtons>
    </LoginWrapper>
  );
};

export default memo(Login);
