import Home from '../components/pages/Home';
import Login from '../components/pages/Login';
import {
  LOGIN_FORGOTTEN_PAGE,
  LOGIN_MAIN_PAGE,
  LOGIN_REGISTRATION_PAGE,
} from '../components/pages/Login/constants';
import { Page, paths } from './constants';
import { TypeRoute } from './type';

export function getRoutes(): TypeRoute[] {
  return [
    {
      type: Page.HOME,
      path: paths[Page.HOME],
      component: <Home />,
      exact: true,
    },
    {
      type: Page.LOGIN,
      path: paths[Page.LOGIN],
      component: <Login pageName={LOGIN_MAIN_PAGE} />,
    },
    {
      type: Page.PASSWORD_CHANGE,
      path: paths[Page.PASSWORD_CHANGE],
      component: <Login pageName={LOGIN_FORGOTTEN_PAGE} />,
    },
    {
      type: Page.CONTACTS_NEW,
      path: paths[Page.CONTACTS_NEW],
      component: <Login pageName={LOGIN_REGISTRATION_PAGE} />,
    },
  ];
}
