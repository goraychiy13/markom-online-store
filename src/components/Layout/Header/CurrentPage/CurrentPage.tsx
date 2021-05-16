import { memo } from 'react';
import { StyledCurrentPage, HomePageLink, CurrentPageLink } from './style';
import { useLocation, useHistory } from 'react-router-dom';
import { Page, paths } from '../../../../core/routes/constants';

function CurrentPage(): JSX.Element {
  const homePageTitle = 'Главная';

  const location = useLocation();
  const history = useHistory();

  function goToHome(): void {
    history.push(paths[Page.HOME]);
  }

  function getCurrentPage(): string {
    switch (location.pathname) {
      case paths[Page.CATALOG]:
        return 'Каталог';
      case paths[Page.ABOUT_COMPANY]:
        return 'О компании';
      case paths[Page.CONTACTS]:
        return 'Контакты';
      case paths[Page.DELIVERY]:
        return 'Доставка из Маркома';
      case paths[Page.PAYMENT]:
        return 'Способ оплаты в Маркоме';
      case paths[Page.BLOG]:
        return 'Блог интернет-магазина Маркома';
      default:
        return '';
    }
  }

  return (
    <StyledCurrentPage
      isDisplayed={
        location.pathname === paths[Page.LOGIN] ||
        location.pathname === paths[Page.HOME] ||
        location.pathname === paths[Page.FORGOTTEN_PASSWORD] ||
        location.pathname === paths[Page.SIGN_UP]
          ? false
          : true
      }
    >
      <HomePageLink onClick={goToHome}>{homePageTitle}</HomePageLink>
      <span>/</span>
      <CurrentPageLink>{getCurrentPage()}</CurrentPageLink>
    </StyledCurrentPage>
  );
}

export default memo(CurrentPage);
