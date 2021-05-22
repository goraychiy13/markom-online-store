import { memo } from 'react';
import { StyledTextarea } from './style';

type Props = {
  placeholder?: string;
};

const Textarea: React.FC<Props> = (props) => {
  return (
    <StyledTextarea
      data-name="styled-textarea"
      placeholder={props.placeholder}
    />
  );
};

export default memo(Textarea);
