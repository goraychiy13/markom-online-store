import styled from 'styled-components';
import { colors } from '../../../common/colors';

export const BlogWrapper = styled.div`
  margin: 0 auto;
  font-family: 'Fira Sans';
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
`;

export const BlogHeader = styled.h1`
  margin: 0;
  padding: 2vw 0;
  font-size: 2rem;
  line-height: 1.2;
  color: ${colors.darkGrey};
`;

export const BlogButtons = styled.div`
  display: flex;
  padding-bottom: 1.5rem;
`;

export const BlogArticles = styled.div`
  display: grid;
  grid-row-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  padding: 1rem 0;
`;

export const BlogArticle = styled.div`
  display: grid;
  grid-template-columns: 33.33% 1fr;
`;

export const ArticleContainer = styled.div`
  padding: 0 2rem;
  background-color: ${colors.gray98};
`;

export const ArticleDate = styled.div`
  color: ${colors.grey};
`;

export const ArticleTitle = styled.div`
  cursor: pointer;
  margin: 1rem 0;
  color: ${colors.darkGrey};
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1;

  &:hover {
    color: ${colors.darkGreen};
  }
`;

export const ArticleDescription = styled.div`
  font-size: 1.1rem;
  line-height: 1.3;
`;

export const buttonStyles = {
  height: '40px',
  padding: '0 1.75rem',
  margin: '0 0.5rem 0.5rem 0',
  color: colors.darkGrey,
  colorModifier: colors.white,
  backgroundColor: colors.gray98,
  backgroundColorModifier: colors.darkGreen,
};

export const imageStyles = {
  width: '100%',
  cursor: 'pointer',
};
