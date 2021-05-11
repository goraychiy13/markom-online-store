import { Page, paths } from '../../../core/constants';

export const LOGIN_NAME = 'LOGIN_NAME';
export const LOGIN_PASSWORD = 'LOGIN_PASSWORD';
export const LOGIN_ENTER = 'LOGIN_ENTER';
export const LOGIN_FORGOTTEN_PASSWORD = 'LOGIN_FORGOTTEN_PASSWORD';
export const LOGIN_REGISTER = 'LOGIN_REGISTER';
export const LOGIN_EMAIL = 'LOGIN_EMAIL';
export const LOGIN_RESTORE_PASSWORD = 'LOGIN_RESTORE_PASSWORD';
export const LOGIN_REMEMBERED_PASSWORD = 'LOGIN_REMEMBERED_PASSWORD';
export const LOGIN_FULL_NAME = 'LOGIN_FULL_NAME';
export const LOGIN_CONTACT_TELEPHONE = 'LOGIN_CONTACT_TELEPHONE';
export const LOGIN_LANGUAGE = 'LOGIN_LANGUAGE';
export const LOGIN_REPEAT_PASSWORD = 'LOGIN_REPEAT_PASSWORD';
export const LOGIN_ALREADY_HAVE_ACCOUNT = 'LOGIN_ALREADY_HAVE_ACCOUNT';
export const LOGIN_MAIN_PAGE = 'LOGIN_MAIN_PAGE';
export const LOGIN_FORGOTTEN_PAGE = 'LOGIN_FORGOTTEN_PAGE';
export const LOGIN_REGISTRATION_PAGE = 'LOGIN_REGISTRATION_PAGE';

export const loginMain = {
  pageTitle: 'Вход в кабинет покупателя',
  inputNames: [
    {
      type: LOGIN_NAME,
      name: 'Телефон или email',
    },
    {
      type: LOGIN_PASSWORD,
      name: 'Пароль',
    },
  ],
  buttons: [
    {
      type: LOGIN_ENTER,
      path: paths[Page.LOGIN],
      name: 'Войти',
    },
    {
      type: LOGIN_FORGOTTEN_PASSWORD,
      path: paths[Page.PASSWORD_CHANGE],
      name: 'Восстановить пароль',
    },
    {
      type: LOGIN_REGISTER,
      path: paths[Page.CONTACTS_NEW],
      name: 'Зарегистрироваться',
    },
  ],
};

export const loginForgotten = {
  pageTitle: 'Вход в кабинет покупателя',
  inputNames: [
    {
      type: LOGIN_EMAIL,
      name: 'Email',
    },
  ],
  buttons: [
    {
      type: LOGIN_RESTORE_PASSWORD,
      path: paths[Page.LOGIN],
      name: 'Восстановить пароль',
    },
    {
      type: LOGIN_REMEMBERED_PASSWORD,
      path: paths[Page.LOGIN],
      name: 'Я вспомнил(-а) пароль!',
    },
  ],
};

export const loginRegistration = {
  pageTitle: 'Регистрация',
  inputNames: [
    {
      type: LOGIN_FULL_NAME,
      name: 'Контактное лицо (ФИО)',
    },
    {
      type: LOGIN_CONTACT_TELEPHONE,
      name: 'Контактный телефон',
    },
    {
      type: LOGIN_EMAIL,
      name: 'Email',
    },
    {
      type: LOGIN_LANGUAGE,
      name: 'Язык',
    },
    {
      type: LOGIN_PASSWORD,
      name: 'Пароль',
    },
    {
      type: LOGIN_REPEAT_PASSWORD,
      name: 'Повторите пароль',
    },
  ],
  buttons: [
    {
      type: LOGIN_REGISTER,
      path: paths[Page.LOGIN],
      name: 'Зарегистрироваться',
    },
    {
      type: LOGIN_ALREADY_HAVE_ACCOUNT,
      path: paths[Page.LOGIN],
      name: 'У меня уже есть аккаунт',
    },
  ],
};
