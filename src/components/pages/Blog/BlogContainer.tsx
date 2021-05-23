import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { TypeAppState } from 'redux/reduxStore';
import {
  getBlogCards,
  getPaginatedCards,
} from '../../../redux/reducers/blogReducer';
import Blog from './Blog';
import { TypeBlogCards } from './types';

type TypeStateProps = {
  blogCards: TypeBlogCards[];
  paginatedCards: TypeBlogCards[];
  currentPage: number;
  portionSize: number;
  totalCount: number;
  pageSize: number;
};
type TypeDispatchProps = {
  getBlogCards: () => void;
  getPaginatedCards: (
    page: number,
    pageSize: number,
    cards: TypeBlogCards[],
  ) => void;
};
type Props = TypeStateProps & TypeDispatchProps;

const BlogContainer: React.FC<Props> = (props) => {
  useEffect(() => {
    props.getBlogCards();
    // eslint-disable-next-line
  }, []);

  return (
    <Blog
      blogCards={props.blogCards}
      paginatedCards={props.paginatedCards}
      currentPage={props.currentPage}
      portionSize={props.portionSize}
      totalCount={props.totalCount}
      pageSize={props.pageSize}
      getPaginatedCards={props.getPaginatedCards}
    />
  );
};

const mapStateToProps = (state: TypeAppState): TypeStateProps => {
  return {
    blogCards: state.blogPage.blogCards,
    paginatedCards: state.blogPage.paginatedCards,
    currentPage: state.blogPage.currentPage,
    portionSize: state.blogPage.portionSize,
    totalCount: state.blogPage.totalCount,
    pageSize: state.blogPage.pageSize,
  };
};
const mapDispatchToProps = {
  getBlogCards,
  getPaginatedCards,
};

export default compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
)(BlogContainer);
