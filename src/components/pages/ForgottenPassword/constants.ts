import { Page, paths } from '../../../core/routes/constants';

const FORGOTTEN_PASSWORD_EMAIL = 'FORGOTTEN_PASSWORD_EMAIL';
const RESTORE_PASSWORD = 'RESTORE_PASSWORD';
const REMEMBER_PASSWORD = 'REMEMBER_PASSWORD';

export const forgottenPassword = {
  pageTitle: 'Вход в кабинет покупателя',
  inputNames: [
    {
      type: FORGOTTEN_PASSWORD_EMAIL,
      name: 'Email',
    },
  ],
  buttons: [
    {
      type: RESTORE_PASSWORD,
      path: paths[Page.LOGIN],
      name: 'Восстановить пароль',
    },
    {
      type: REMEMBER_PASSWORD,
      path: paths[Page.LOGIN],
      name: 'Я вспомнил(-а) пароль!',
    },
  ],
};
