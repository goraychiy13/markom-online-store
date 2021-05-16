import { Page, paths } from '../../../core/routes/constants';

const PASSWORD = 'PASSWORD';
const REGISTER = 'REGISTER';
const EMAIL = 'EMAIL';
const FULL_NAME = 'FULL_NAME';
const CONTACT_TELEPHONE = 'CONTACT_TELEPHONE';
const LANGUAGE = 'LANGUAGE';
const REPEAT_PASSWORD = 'REPEAT_PASSWORD';
const ALREADY_HAVE_ACCOUNT = 'ALREADY_HAVE_ACCOUNT';

export const signUp = {
  pageTitle: 'Регистрация',
  inputNames: [
    {
      type: FULL_NAME,
      name: 'Контактное лицо (ФИО)',
    },
    {
      type: CONTACT_TELEPHONE,
      name: 'Контактный телефон',
    },
    {
      type: EMAIL,
      name: 'Email',
    },
    {
      type: LANGUAGE,
      name: 'Язык',
    },
    {
      type: PASSWORD,
      name: 'Пароль',
    },
    {
      type: REPEAT_PASSWORD,
      name: 'Повторите пароль',
    },
  ],
  buttons: [
    {
      type: REGISTER,
      path: paths[Page.LOGIN],
      name: 'Зарегистрироваться',
    },
    {
      type: ALREADY_HAVE_ACCOUNT,
      path: paths[Page.LOGIN],
      name: 'У меня уже есть аккаунт',
    },
  ],
};
