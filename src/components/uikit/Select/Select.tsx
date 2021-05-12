import { memo } from 'react';
import { StyledSelect } from './style';

type Props = { children: JSX.Element[] };

const Select: React.FC<Props> = (props) => {
  return (
    <StyledSelect data-name="styled-select">{props.children}</StyledSelect>
  );
};

export default memo(Select);
