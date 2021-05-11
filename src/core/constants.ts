export enum Page {
  HOME = 'HOME',
  LOGIN = 'LOGIN',
  PASSWORD_CHANGE = 'PASSWORD_CHANGE',
  CONTACTS_NEW = 'CONTACTS_NEW',
}

export const paths = {
  [Page.LOGIN]: '/client_account/login',
  [Page.PASSWORD_CHANGE]: '/client_account/password/change',
  [Page.CONTACTS_NEW]: '/client_account/contacts/new',
  [Page.HOME]: '/',
};
