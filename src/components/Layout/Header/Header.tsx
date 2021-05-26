import { memo } from 'react';
import CurrentPage from './CurrentPage';
import Navbar from './Navbar';
import NavbarStatic from './NavbarStatic';
import Searchbar from './Searchbar';
import { HeaderWrapper, NavbarContent, NavbarWrapper } from './style';

function Header(): JSX.Element {
  return (
    <HeaderWrapper data-name="header-wrapper">
      <NavbarWrapper data-name="navbar-wrapper">
        <NavbarContent data-name="navbar-content">
          <Navbar />
          <NavbarStatic />
        </NavbarContent>
      </NavbarWrapper>
      <Searchbar />
      <CurrentPage />
    </HeaderWrapper>
  );
}

export default memo(Header);
