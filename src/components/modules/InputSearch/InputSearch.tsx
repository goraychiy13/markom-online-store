import { memo } from 'react';
import { StyledInputSearch, buttonStyles } from './style';
import Input from '../../uikit/Input';
import Button from '../../uikit/Button';

function InputSearch(): JSX.Element {
  return (
    <StyledInputSearch>
      <Input placeholder="Поиск" borderRadius={'5px 0 0 5px'} />
      <Button {...buttonStyles} />
    </StyledInputSearch>
  );
}

export default memo(InputSearch);
