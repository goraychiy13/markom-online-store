import { memo } from 'react';
import { Container, CustomerReviewBody, CustomerReviewerName } from './style';

type Props = {
  reviewerName: string;
  review: string;
};

function CustomerReview(props: Props): JSX.Element {
  return (
    <Container data-name="container">
      <CustomerReviewerName data-name="customer-reviewer-name">
        {props.reviewerName}
      </CustomerReviewerName>
      <CustomerReviewBody data-name="customer-review-body">
        {props.review}
      </CustomerReviewBody>
    </Container>
  );
}

export default memo(CustomerReview);
