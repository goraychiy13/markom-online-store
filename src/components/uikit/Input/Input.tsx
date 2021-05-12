import { memo } from 'react';
import { StyledInput } from './style';

type Props = {};

const Input: React.FC<Props> = () => {
  return <StyledInput data-name="styled-input" />;
};

export default memo(Input);
