import { userIcon, chartIcon, basketIcon } from '../../../../icons';

export const userToolTitles = {
  userInfo: 'userInfo',
  chartIcon: 'chartIcon',
  basketIcon: 'basketIcon',
};

export const userTools = [
  {
    title: 'userInfo',
    path: userIcon.path,
    viewBox: userIcon.viewBox,
    width: '35px',
    height: '35px',
    hasAmountProduct: false,
  },
  {
    title: 'chartIcon',
    path: chartIcon.path,
    viewBox: chartIcon.viewBox,
    width: '30px',
    height: '30px',
    hasAmountProduct: true,
  },
  {
    title: 'basketIcon',
    path: basketIcon.path,
    viewBox: basketIcon.viewBox,
    width: '35px',
    height: '35px',
    hasAmountProduct: true,
  },
];
