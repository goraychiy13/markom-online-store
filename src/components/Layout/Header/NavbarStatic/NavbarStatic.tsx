import { memo } from 'react';
import { headerStaticElements } from './constants';
import Languages from './Languages';
import { Static, StaticItem } from './style';

function NavbarStatic(): JSX.Element {
  return (
    <Static data-name="header-static">
      {headerStaticElements.map((elem) => (
        <StaticItem
          key={elem.title}
          color={elem.color}
          data-name="header-static-item"
        >
          {elem.title}
        </StaticItem>
      ))}
      <Languages />
    </Static>
  );
}

export default memo(NavbarStatic);
