import { memo } from 'react';
import { Container, CustomerReviewerName, CustomerReviewBody } from './style';

type Props = {
  reviewerName: string;
  review: string;
};

function CustomerReview(props: Props): JSX.Element {
  return (
    <Container>
        <CustomerReviewerName>{props.reviewerName}</CustomerReviewerName>
        <CustomerReviewBody>{props.review}</CustomerReviewBody>
    </Container>
  );
}

export default memo(CustomerReview);
