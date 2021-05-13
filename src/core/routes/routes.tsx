import Auth from '../../components/pages/Auth';
import Home from '../../components/pages/Home';
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
      component: <Auth />,
    },
    {
      type: Page.FORGOTTEN_PASSWORD,
      path: paths[Page.FORGOTTEN_PASSWORD],
      component: <Auth />,
    },
    {
      type: Page.SIGN_UP,
      path: paths[Page.SIGN_UP],
      component: <Auth />,
    },
  ];
}
