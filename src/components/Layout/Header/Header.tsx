import { memo } from 'react';
import { NavbarWrapper, NavbarContent, HeaderWrapper } from './style';
import Navbar from './Navbar';
import NavbarStatic from './NavbarStatic';
import Searchbar from './Searchbar';
import { useLocation } from 'react-router-dom';

function Header(): JSX.Element {
  const location = useLocation();

  return (
    <HeaderWrapper>
      <NavbarWrapper data-name="header-wrapper">
        <NavbarContent data-name="header-content">
          <Navbar />
          <NavbarStatic />
        </NavbarContent>
      </NavbarWrapper>
      <Searchbar />
      {/* <CurrentPage></CurrentPage> */}
    </HeaderWrapper>
  );
}

export default memo(Header);
