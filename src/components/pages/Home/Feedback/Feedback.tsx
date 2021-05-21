import { memo } from 'react';
import { Container } from './style';

type Props = {};

function Feedback(props: Props): JSX.Element {
  return (
    <Container>
        Feedback!
    </Container>
  );
}

export default memo(Feedback);
