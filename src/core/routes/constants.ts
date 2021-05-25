export enum Page {
  HOME = 'HOME',
  ABOUT_COMPANY = 'ABOUT_COMPANY',
  CONTACTS = 'CONTACTS',
  DELIVERY = 'DELIVERY',
  PAYMENT = 'PAYMENT',
  LOGIN = 'LOGIN',
  FORGOTTEN_PASSWORD = 'FORGOTTEN_PASSWORD',
  SIGN_UP = 'SIGN_UP',
  CATALOG = 'CATALOG',
  BLOG = 'BLOG',
  BLOG_ROUTE = 'BLOG_ROUTE',
}

export const paths = {
  [Page.HOME]: '/',
  [Page.CATALOG]: '/catalog',
  [Page.ABOUT_COMPANY]: '/about-company',
  [Page.CONTACTS]: '/contacts',
  [Page.DELIVERY]: '/delivery',
  [Page.PAYMENT]: '/payment',
  [Page.LOGIN]: '/auth/login',
  [Page.FORGOTTEN_PASSWORD]: '/auth/forgotten-password',
  [Page.SIGN_UP]: '/auth/sign-up',
  [Page.BLOG]: '/blog',
  [Page.BLOG_ROUTE]: '/blog/:url',
};
