import { memo } from 'react';
import { StyledInputSearch } from './style';
import Input from '../../uikit/Input';
import Button from '../../uikit/Button';
import { colors } from '../../../common/colors';
import { searchIcon } from '../../../icons';

function InputSearch(): JSX.Element {
  return (
    <StyledInputSearch>
      <Input placeholder="Поиск" borderRadius={'5px 0 0 5px'} />
      <Button
        hasIcon
        width={'50px'}
        height={'50px'}
        iconWidth={'35px'}
        iconHeight={'35px'}
        backgroundColor={colors.darkGreen}
        colorModifier={colors.minorGreen}
        icon={searchIcon}
        borderRadius={'0 5px 5px 0'}
        type="submit"
      />
    </StyledInputSearch>
  );
}

export default memo(InputSearch);
