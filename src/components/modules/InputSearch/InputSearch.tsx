import { memo } from 'react';
import Button from '../../uikit/Button';
import Input from '../../uikit/Input';
import { buttonStyles, StyledInputSearch } from './style';

function InputSearch(): JSX.Element {
  return (
    <StyledInputSearch data-name="styled-input-search">
      <Input placeholder="Поиск" borderRadius={'5px 0 0 5px'} />
      <Button {...buttonStyles} />
    </StyledInputSearch>
  );
}

export default memo(InputSearch);
