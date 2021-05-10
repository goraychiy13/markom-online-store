import Home from '../components/pages/Home';
import Login from '../components/pages/Login';
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
      component: <Login />,
    },
  ];
}
