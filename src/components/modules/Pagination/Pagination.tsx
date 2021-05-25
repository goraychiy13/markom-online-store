import { TypeBlogData } from 'components/pages/Blog/types';
import React, { memo, useState } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { thunks } from '../../../redux/reducers/blogReducer';
import { TypeDispatch } from '../../../redux/reduxStore';
import Button from '../../uikit/Button/Button';
import {
  currentButtonStyles,
  paginationButtonStyles,
  PaginationWrapper,
  toggleButtonStyles,
} from './style';

type Props = {
  blogData: TypeBlogData[];
  currentPage: number;
  portionSize: number;
  totalCount: number;
  pageSize: number;
  dispatch: TypeDispatch;
};

const Pagination: React.FC<Props> = (props) => {
  const pagesCount = Math.ceil(props.totalCount / props.pageSize);
  const pages: number[] = [];
  for (let i = 1; i <= pagesCount; i++) pages.push(i);

  const location = useLocation();
  const [leftPortion, setLeftPortion] = useState(1);
  const [rightPortion, setRightPortion] = useState(props.portionSize);

  function onPageChange(page: number): void {
    setLeftPortion(page - (page === pages.length ? 2 : 1));
    setRightPortion(page + (page === 1 ? 2 : 1));
    props.dispatch(
      thunks.getArticlesList(page, props.pageSize, props.blogData),
    );
  }

  return (
    <PaginationWrapper data-name="pagination-wrapper">
      {props.currentPage > 1 && (
        <div onClick={() => onPageChange(props.currentPage - 1)}>
          <Link to={location.pathname + `?page=${props.currentPage - 1}`}>
            <Button {...toggleButtonStyles}>Предыдущая</Button>
          </Link>
        </div>
      )}
      {pages
        .filter((page) => page >= leftPortion && page <= rightPortion)
        .map((page) => (
          <div key={page} onClick={() => onPageChange(page)}>
            <Link to={location.pathname + `?page=${page}`}>
              {page === props.currentPage ? (
                <Button {...currentButtonStyles}>{`${page}`}</Button>
              ) : (
                <Button {...paginationButtonStyles}>{`${page}`}</Button>
              )}
            </Link>
          </div>
        ))}
      {props.currentPage < pagesCount && (
        <div onClick={() => onPageChange(props.currentPage + 1)}>
          <Link to={location.pathname + `?page=${props.currentPage + 1}`}>
            <Button {...toggleButtonStyles}>Следующая</Button>
          </Link>
        </div>
      )}
    </PaginationWrapper>
  );
};

export default memo(Pagination);
