import { memo } from 'react';
import { Static, StaticItem } from './style';
import { headerStaticElements } from './constants';
import Languages from './Languages';

function NavbarStatic(): JSX.Element {
  return (
    <Static data-name="header-static">
      {headerStaticElements.map((elem) => {
        return (
          <StaticItem
            data-name="header-static-item"
            key={elem.title}
            color={elem.color}
          >
            {elem.title}
          </StaticItem>
        );
      })}
      <Languages />
    </Static>
  );
}

export default memo(NavbarStatic);
