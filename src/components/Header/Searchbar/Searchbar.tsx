import { memo } from 'react';
import { StyledSearchbar, Logo } from './style';
import Button from '../../uikit/Button';
import { colors } from '../../../common/colors';

function Searchbar(): JSX.Element {
  return (
    <StyledSearchbar data-name="styled-searchbar">
      <Logo />
      <Button
        hasIcon
        width={'128px'}
        height={'50px'}
        iconWidth={'30px'}
        iconHeight={'30px'}
        backgroundColor={colors.darkGreen}
        iconMargin={'0 12px 0 0'}
      >
        Каталог
      </Button>
      {/* <Button></Button>
      <Search />
      <UserTools /> */}
    </StyledSearchbar>
  );
}

export default memo(Searchbar);
