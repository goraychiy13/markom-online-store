export const LOGIN_NAME = 'LOGIN_NAME';
export const LOGIN_PASSWORD = 'LOGIN_PASSWORD';
export const LOGIN_ENTER = 'LOGIN_ENTER';
export const LOGIN_FORGOTTEN_PASSWORD = 'LOGIN_FORGOTTEN_PASSWORD';
export const LOGIN_REGISTER = 'LOGIN_REGISTER';

export const loginInputs = [
  {
    type: LOGIN_NAME,
    value: 'Телефон или email',
  },
  {
    type: LOGIN_PASSWORD,
    value: 'Пароль',
  },
];

export const loginButtons = [
  {
    type: LOGIN_ENTER,
    value: 'Войти',
  },
  {
    type: LOGIN_FORGOTTEN_PASSWORD,
    value: 'Восстановить пароль',
  },
  {
    type: LOGIN_REGISTER,
    value: 'Зарегистрироваться',
  },
];
