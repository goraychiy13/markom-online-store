import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { thunks } from '../../../redux/reducers/blogReducer';
import { TypeAppState } from '../../../redux/reduxStore';
import NotFound from '../NotFound/NotFound';
import Article from './Article';

const ArticleContainer: React.FC = (props) => {
  const { id } = useParams<{ id: string }>();

  const dispatch = useDispatch();
  const articleState = useSelector((state: TypeAppState) => ({
    articleInfo: state.blogPage.articleInfo,
  }));

  useEffect(() => {
    dispatch(thunks.getArticleInfo(id));
  }, [dispatch, id]);

  return (
    <>
      {articleState.articleInfo?.id ? (
        <Article articleInfo={articleState.articleInfo} />
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default memo(ArticleContainer);
