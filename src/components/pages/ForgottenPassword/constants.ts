import { Page, paths } from '../../../core/routes/constants';

const AUTH_EMAIL = 'AUTH_EMAIL';
const AUTH_RESTORE_PASSWORD = 'AUTH_RESTORE_PASSWORD';
const AUTH_REMEMBERED_PASSWORD = 'AUTH_REMEMBERED_PASSWORD';

export const authForgottenPassword = {
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
