import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { thunks } from '../../../redux/reducers/blogSlice';
import { TypeRootState } from '../../../redux/reduxStore';
import NotFound from '../NotFound/NotFound';
import Article from './Article';

const ArticleContainer: React.FC = (props) => {
  const { id } = useParams<{ id: string }>();

  const dispatch = useDispatch();
  const articleState = useSelector((state: TypeRootState) => ({
    articleInfo: state.blogSlice.articleInfo,
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
