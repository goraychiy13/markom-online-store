import { Page, paths } from '../../../../core/routes/constants';

export const links = [
  {
    path: '/catalog',
    name: 'Каталог'
  },
  {
    path: '/about-company',
    name: 'О компании'
  },
  {
    path: '/contacts',
    name: 'Контакты'
  },
  {
    path: '/delivery',
    name: 'Доставка'
  },
  {
    path: '/payment',
    name: 'Оплата'
  },
  {
    path: paths[Page.LOGIN],
    name: 'Личный кабинет'
  },
  {
    path: '/blog',
    name: 'Блог'
  }
];
