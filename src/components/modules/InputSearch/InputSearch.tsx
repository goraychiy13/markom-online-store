import { memo } from 'react';
import Button from '../../uikit/Button';
import Input from '../../uikit/Input';
import { buttonStyles, inputSearchStyles, StyledInputSearch } from './style';

function InputSearch(): JSX.Element {
  return (
    <StyledInputSearch data-name="styled-input-search">
      <Input placeholder="Поиск" {...inputSearchStyles} />
      <Button {...buttonStyles} />
    </StyledInputSearch>
  );
}

export default memo(InputSearch);
