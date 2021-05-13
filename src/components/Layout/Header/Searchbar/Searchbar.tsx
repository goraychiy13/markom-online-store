import InputSearch from '../../../modules/InputSearch';
import { memo } from 'react';
import { useHistory } from 'react-router';
import { colors } from '../../../../common/colors';
import { Page, paths } from '../../../../core/routes/constants';
import Button from '../../../uikit/Button';
import Logo, { StyledSearchbar, IconWrapper, AmountProduct, TotalPuchase } from './style';
import Icon from '../../../uikit/Icon';
import { menuIcon } from '../../../../icons';
import { userTools, userToolTitles } from './constants';

function Searchbar(): JSX.Element {
  const history = useHistory();

  function goToHome(): void {
    history.push(paths[Page.HOME]);
  }

  function handleLogin(): void {
    history.push(paths[Page.LOGIN]);
  }

  function handeCompare(): void {
    history.push();
  }

  function handeBasket(): void {
    history.push();
  }

  function getUserToolMethod(toolTitle): () => void {
    switch (toolTitle) {
      case userToolTitles.userInfo:
        return handleLogin;
      case userToolTitles.chartIcon:
        return handeCompare;
      default:
        return handeBasket;
    }
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
        icon={menuIcon}
        type="button"
      >
        Каталог
      </Button>
      <InputSearch />
      {userTools.map((tool) => {
        return (
          <IconWrapper
            marginLeft={tool.title !== userToolTitles.userInfo ? '28px' : 0}
            data-name="searchbar-icon-wrapper"
            onClick={getUserToolMethod(tool.title)}
            key={tool.title}
          >
            <Icon
              title={tool.title}
              path={tool.path}
              viewBox={tool.viewBox}
              width={tool.width}
              height={tool.height}
            />
            {tool.hasAmountProduct && <AmountProduct>0</AmountProduct>}
          </IconWrapper>
        );
      })}
      <TotalPuchase onClick={handeBasket}>
        0 руб
      </TotalPuchase>
    </StyledSearchbar>
  );
}

export default memo(Searchbar);
