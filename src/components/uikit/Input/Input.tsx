import { memo } from 'react';
import { StyledInput } from './style';

type Props = {
  placeholder?: string;
  borderRadius?: string;
  border?: string;
  background?: string;
  color?: string;
  marginRight?: string;
  height?: string;
};

const Input: React.FC<Props> = (props) => {
  return (
    <StyledInput
      background={props.background}
      borderRadius={props.borderRadius}
      border={props.border}
      color={props.color}
      data-name="styled-input"
      placeholder={props.placeholder}
      marginRight={props.marginRight}
      height={props.height}
    />
  );
};

export default memo(Input);
