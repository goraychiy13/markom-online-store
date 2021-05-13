export enum Page {
  HOME = 'HOME',
  LOGIN = 'LOGIN',
  FORGOTTEN_PASSWORD = 'FORGOTTEN_PASSWORD',
  SIGN_UP = 'SIGN_UP',
}

export const paths = {
  [Page.LOGIN]: '/auth/login',
  [Page.FORGOTTEN_PASSWORD]: '/auth/forgotten_password',
  [Page.SIGN_UP]: '/auth/sign_up',
  [Page.HOME]: '/',
};
