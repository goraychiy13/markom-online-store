import { Page, paths } from '../../../core/routes/constants';

const AUTH_PASSWORD = 'AUTH_PASSWORD';
const AUTH_REGISTER = 'AUTH_REGISTER';
const AUTH_EMAIL = 'AUTH_EMAIL';
const AUTH_FULL_NAME = 'AUTH_FULL_NAME';
const AUTH_CONTACT_TELEPHONE = 'AUTH_CONTACT_TELEPHONE';
const AUTH_LANGUAGE = 'AUTH_LANGUAGE';
const AUTH_REPEAT_PASSWORD = 'AUTH_REPEAT_PASSWORD';
const AUTH_ALREADY_HAVE_ACCOUNT = 'AUTH_ALREADY_HAVE_ACCOUNT';

export const authSignUp = {
  pageTitle: 'Регистрация',
  inputNames: [
    {
      type: AUTH_FULL_NAME,
      name: 'Контактное лицо (ФИО)',
    },
    {
      type: AUTH_CONTACT_TELEPHONE,
      name: 'Контактный телефон',
    },
    {
      type: AUTH_EMAIL,
      name: 'Email',
    },
    {
      type: AUTH_LANGUAGE,
      name: 'Язык',
    },
    {
      type: AUTH_PASSWORD,
      name: 'Пароль',
    },
    {
      type: AUTH_REPEAT_PASSWORD,
      name: 'Повторите пароль',
    },
  ],
  buttons: [
    {
      type: AUTH_REGISTER,
      path: paths[Page.LOGIN],
      name: 'Зарегистрироваться',
    },
    {
      type: AUTH_ALREADY_HAVE_ACCOUNT,
      path: paths[Page.LOGIN],
      name: 'У меня уже есть аккаунт',
    },
  ],
};
