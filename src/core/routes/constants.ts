export enum Page {
  HOME = 'HOME',
  LOGIN = 'LOGIN',
  FORGOTTEN_PASSWORD = 'FORGOTTEN_PASSWORD',
  SIGN_UP = 'SIGN_UP',
  CATALOG = 'CATALOG',
  ABOUT_COMPANY = 'ABOUT_COMPANY',
  CONTACTS = 'CONTACTS',
  DELIVERY = 'DELIVERY',
  PAYMENT = 'PAYMENT',
  BLOG = 'BLOG',
}

export const paths = {
  [Page.LOGIN]: '/auth/login',
  [Page.FORGOTTEN_PASSWORD]: '/auth/forgotten_password',
  [Page.SIGN_UP]: '/auth/sign_up',
  [Page.HOME]: '/',
  [Page.CATALOG]: '/catalog',
  [Page.ABOUT_COMPANY]: '/about-company',
  [Page.CONTACTS]: '/contacts',
  [Page.DELIVERY]: '/delivery',
  [Page.PAYMENT]: '/payment',
  [Page.BLOG]: '/blog',
};
