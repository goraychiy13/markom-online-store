import AboutCompany from '../../components/pages/AboutCompany';
import Auth from '../../components/pages/Auth';
import Contacts from '../../components/pages/Contacts';
import Delivery from '../../components/pages/Delivery';
import Home from '../../components/pages/Home';
import Payment from '../../components/pages/Payment';
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
      type: Page.ABOUT_COMPANY,
      path: paths[Page.ABOUT_COMPANY],
      component: <AboutCompany />,
    },
    {
      type: Page.CONTACTS,
      path: paths[Page.CONTACTS],
      component: <Contacts />,
    },
    {
      type: Page.DELIVERY,
      path: paths[Page.DELIVERY],
      component: <Delivery />,
    },
    {
      type: Page.PAYMENT,
      path: paths[Page.PAYMENT],
      component: <Payment />,
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
