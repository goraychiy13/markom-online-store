import { memo } from 'react';
import { NavbarWrapper, NavbarContent, HeaderWrapper } from './style';
import Navbar from './Navbar';
import NavbarStatic from './NavbarStatic';
import Searchbar from './Searchbar';
import CurrentPage from './CurrentPage';

function Header(): JSX.Element {
  return (
    <HeaderWrapper>
      <NavbarWrapper data-name="header-wrapper">
        <NavbarContent data-name="header-content">
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
