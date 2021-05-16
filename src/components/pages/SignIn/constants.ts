import { Page, paths } from '../../../core/routes/constants';

const NAME = 'NAME';
const PASSWORD = 'PASSWORD';
const ENTER = 'ENTER';
const FORGOTTEN_PASSWORD = 'FORGOTTEN_PASSWORD';
const REGISTER = 'REGISTER';

export const signIn = {
  pageTitle: 'Вход в кабинет покупателя',
  inputNames: [
    {
      type: NAME,
      name: 'Телефон или email',
    },
    {
      type: PASSWORD,
      name: 'Пароль',
    },
  ],
  buttons: [
    {
      type: ENTER,
      path: paths[Page.LOGIN],
      name: 'Войти',
    },
    {
      type: FORGOTTEN_PASSWORD,
      path: paths[Page.FORGOTTEN_PASSWORD],
      name: 'Восстановить пароль',
    },
    {
      type: REGISTER,
      path: paths[Page.SIGN_UP],
      name: 'Зарегистрироваться',
    },
  ],
};
