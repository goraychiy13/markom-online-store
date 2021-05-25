import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunks } from '../../../redux/reducers/blogReducer';
import { TypeAppState } from '../../../redux/reduxStore';
import Blog from './Blog';

const BlogContainer: React.FC = (props) => {
  const dispatch = useDispatch();
  const blogState = useSelector((state: TypeAppState) => ({
    blogData: state.blogPage.blogData,
    articlesList: state.blogPage.articlesList,
    currentPage: state.blogPage.currentPage,
    totalCount: state.blogPage.totalCount,
    pageSize: state.blogPage.pageSize,
  }));

  useEffect(() => {
    dispatch(thunks.getBlogData());
  }, [dispatch]);

  return (
    <Blog
      blogData={blogState.blogData}
      articlesList={blogState.articlesList}
      currentPage={blogState.currentPage}
      totalCount={blogState.totalCount}
      pageSize={blogState.pageSize}
      dispatch={dispatch}
    />
  );
};

export default memo(BlogContainer);
