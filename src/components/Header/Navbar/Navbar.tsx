import { memo } from 'react';
import { Link } from 'react-router-dom';
import { links } from './constants';
import { StyledHeader, StyledLink } from './style';

function Navbar(): JSX.Element {
  return (
    <StyledHeader data-name="styled-header">
      {links.map((link) => {
        return (
          <StyledLink data-name="styled-link" key={link}>
            <Link to="">{link}</Link>
          </StyledLink>
        );
      })}
    </StyledHeader>
  );
}

export default memo(Navbar);
