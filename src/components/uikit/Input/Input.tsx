import { memo } from 'react';
import { StyledInput } from './style';

type Props = {
  placeholder?: string;
  borderRadius?: string;
};

const Input: React.FC<Props> = (props) => {
  return (
    <StyledInput
      placeholder={props.placeholder}
      borderRadius={props.borderRadius}
      data-name="styled-input"
    />
  );
};

export default memo(Input);
