import { memo } from 'react';
import { StyledInput } from './style';

type Props = {
  id?: string;
  placeholder?: string;
  color?: string;
  border?: string;
  borderRadius?: string;
  background?: string;
  marginRight?: string;
  height?: string;
};

const Input: React.FC<Props> = (props) => {
  return (
    <StyledInput
      data-name="styled-input"
      id={props.id}
      placeholder={props.placeholder}
      color={props.color}
      border={props.border}
      borderRadius={props.borderRadius}
      background={props.background}
      marginRight={props.marginRight}
      height={props.height}
    />
  );
};

export default memo(Input);
