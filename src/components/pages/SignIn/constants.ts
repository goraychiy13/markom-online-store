import { Page, paths } from '../../../core/routes/constants';

const AUTH_NAME = 'AUTH_NAME';
const AUTH_PASSWORD = 'AUTH_PASSWORD';
const AUTH_ENTER = 'AUTH_ENTER';
const AUTH_FORGOTTEN_PASSWORD = 'AUTH_FORGOTTEN_PASSWORD';
const AUTH_REGISTER = 'AUTH_REGISTER';

export const authSignIn = {
  pageTitle: 'Вход в кабинет покупателя',
  inputNames: [
    {
      type: AUTH_NAME,
      name: 'Телефон или email',
    },
    {
      type: AUTH_PASSWORD,
      name: 'Пароль',
    },
  ],
  buttons: [
    {
      type: AUTH_ENTER,
      path: paths[Page.LOGIN],
      name: 'Войти',
    },
    {
      type: AUTH_FORGOTTEN_PASSWORD,
      path: paths[Page.FORGOTTEN_PASSWORD],
      name: 'Восстановить пароль',
    },
    {
      type: AUTH_REGISTER,
      path: paths[Page.SIGN_UP],
      name: 'Зарегистрироваться',
    },
  ],
};
