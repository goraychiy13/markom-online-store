import { memo } from 'react';
import { useHistory } from 'react-router';
import { colors } from '../../../common/colors';
import { Page, paths } from '../../../core/constants';
import Button from '../../uikit/Button';
import Logo, { StyledSearchbar } from './style';

function Searchbar(): JSX.Element {
  const history = useHistory();

  function goToHome(): void {
    history.push(paths[Page.HOME]);
  }

  return (
    <StyledSearchbar data-name="styled-searchbar">
      <Logo onClick={goToHome} data-name="searchbar-logo" />
      <Button
        hasIcon
        width={'128px'}
        height={'50px'}
        iconWidth={'30px'}
        iconHeight={'30px'}
        backgroundColor={colors.darkGreen}
        colorModifier={colors.minorGreen}
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
