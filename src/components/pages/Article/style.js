import styled from 'styled-components';
import { colors } from '../../../common/colors';

export const ArticleWrapper = styled.div`
  margin: 0;
  font-size: 1rem;
  line-height: 1;
  color: ${colors.darkGrey};
`;

export const ArticleHeader = styled.h1`
  margin: 0;
  padding: 2rem 0;
  font-size: 2rem;
  line-height: 1;
  color: ${colors.darkGrey};
`;

export const articleImageStyles = {
  width: '100%',
  objectFit: 'cover',
  verticalAlign: 'middle',
  aspectRatio: '2',
};
