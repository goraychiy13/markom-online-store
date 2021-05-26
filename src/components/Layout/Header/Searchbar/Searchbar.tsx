import { memo } from 'react';
import { useHistory } from 'react-router';
import { Page, paths } from '../../../../core/routes/constants';
import InputSearch from '../../../modules/InputSearch';
import Button from '../../../uikit/Button';
import Icon from '../../../uikit/Icon';
import { userTools, userToolTitles } from './constants';
import Logo, {
  AmountProduct,
  buttonStyles,
  IconWrapper,
  StyledSearchbar,
  TotalPurchase,
} from './style';

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
      <Button {...buttonStyles}>Каталог</Button>
      <InputSearch />
      {userTools.map((tool) => (
        <IconWrapper
          key={tool.title}
          marginLeft={tool.title !== userToolTitles.userInfo ? '28px' : 0}
          onClick={getUserToolMethod(tool.title)}
          data-name="searchbar-icon-wrapper"
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
      ))}
      <TotalPurchase onClick={handeBasket} data-name="total-purchase">
        0 руб
      </TotalPurchase>
    </StyledSearchbar>
  );
}

export default memo(Searchbar);
