import { memo } from 'react';
import { Container, StyledCheckbox, CheckboxTitle } from './style';

type Props = {
  placeholder?: string;
  title: string;
};

const Checkbox: React.FC<Props> = (props) => {
  return (
    <Container>
        <StyledCheckbox
            data-name="styled-checkbox"
            type="checkbox"
            placeholder={props.placeholder}
        />
        <CheckboxTitle>{props.title}</CheckboxTitle>
    </Container>
  );
};

export default memo(Checkbox);
