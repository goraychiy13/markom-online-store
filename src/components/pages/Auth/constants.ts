import { Page, paths } from '../../../core/routes/constants';

export const AUTH_NAME = 'AUTH_NAME';
export const AUTH_PASSWORD = 'AUTH_PASSWORD';
export const AUTH_ENTER = 'AUTH_ENTER';
export const AUTH_FORGOTTEN_PASSWORD = 'AUTH_FORGOTTEN_PASSWORD';
export const AUTH_REGISTER = 'AUTH_REGISTER';
export const AUTH_EMAIL = 'AUTH_EMAIL';
export const AUTH_RESTORE_PASSWORD = 'AUTH_RESTORE_PASSWORD';
export const AUTH_REMEMBERED_PASSWORD = 'AUTH_REMEMBERED_PASSWORD';
export const AUTH_FULL_NAME = 'AUTH_FULL_NAME';
export const AUTH_CONTACT_TELEPHONE = 'AUTH_CONTACT_TELEPHONE';
export const AUTH_LANGUAGE = 'AUTH_LANGUAGE';
export const AUTH_REPEAT_PASSWORD = 'AUTH_REPEAT_PASSWORD';
export const AUTH_ALREADY_HAVE_ACCOUNT = 'AUTH_ALREADY_HAVE_ACCOUNT';
export const AUTH_MAIN_PAGE = 'AUTH_MAIN_PAGE';
export const AUTH_FORGOTTEN_PAGE = 'AUTH_FORGOTTEN_PAGE';
export const AUTH_REGISTRATION_PAGE = 'AUTH_REGISTRATION_PAGE';
export const LANGUAGE_RUSSIAN = 'LANGUAGE_RUSSIAN';
export const LANGUAGE_ENGLISH = 'LANGUAGE_ENGLISH';
export const LANGUAGE_ESPANOL = 'LANGUAGE_ESPANOL';

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

export const authForgotten = {
  pageTitle: 'Вход в кабинет покупателя',
  inputNames: [
    {
      type: AUTH_EMAIL,
      name: 'Email',
    },
  ],
  buttons: [
    {
      type: AUTH_RESTORE_PASSWORD,
      path: paths[Page.LOGIN],
      name: 'Восстановить пароль',
    },
    {
      type: AUTH_REMEMBERED_PASSWORD,
      path: paths[Page.LOGIN],
      name: 'Я вспомнил(-а) пароль!',
    },
  ],
};

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

export const selectOptions = [
  {
    type: LANGUAGE_RUSSIAN,
    value: 'Русский',
  },
  {
    type: LANGUAGE_ENGLISH,
    value: 'English',
  },
  {
    type: LANGUAGE_ESPANOL,
    value: 'Español',
  },
];
