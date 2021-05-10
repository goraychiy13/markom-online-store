import { memo } from 'react';
import { StyledInput } from './style';

type Props = {};

const Input: React.FC<Props> = (props: any): JSX.Element => {
  return <StyledInput />;
};

export default memo(Input);
