import { memo } from 'react';
import Img from '../../uikit/Img';
import { ArticleHeader, articleImageStyles, ArticleWrapper } from './style';
import { TypeArticleInfo } from './types';

type Props = {
  articleInfo: TypeArticleInfo;
};

const Article: React.FC<Props> = (props) => {
  return (
    <ArticleWrapper>
      <Img
        src={props.articleInfo.imageUrl}
        alt="articleImage"
        {...articleImageStyles}
      />
      <ArticleHeader data-name="article-header">
        {props.articleInfo.title}
      </ArticleHeader>
      {props.articleInfo.info}
    </ArticleWrapper>
  );
};

export default memo(Article);
