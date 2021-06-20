import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunks } from '../../../redux/reducers/blogSlice';
import { TypeRootState } from '../../../redux/reduxStore';
import Blog from './Blog';

const BlogContainer: React.FC = () => {
  const dispatch = useDispatch();
  const blogState = useSelector((state: TypeRootState) => ({
    blogData: state.blogSlice.blogData,
    articlesList: state.blogSlice.articlesList,
    currentPage: state.blogSlice.currentPage,
    totalCount: state.blogSlice.totalCount,
    pageSize: state.blogSlice.pageSize,
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
    />
  );
};

export default BlogContainer;
