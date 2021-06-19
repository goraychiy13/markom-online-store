import { TypeBlogData } from 'components/pages/Blog/types';
import React, { memo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { thunks } from '../../../redux/reducers/blogSlice';
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
  totalCount: number;
  pageSize: number;
};

const Pagination: React.FC<Props> = (props) => {
  const dispatch = useDispatch();

  const pagesCount = Math.ceil(props.totalCount / props.pageSize);
  const pages: number[] = [];
  for (let i = 1; i <= pagesCount; i++) pages.push(i);

  const [leftPortion, setLeftPortion] = useState(1);
  const [rightPortion, setRightPortion] = useState(3);

  function onPageChange(page: number): void {
    setLeftPortion(page - 1);
    setRightPortion(page + 1);
    dispatch(thunks.getArticlesList(page, props.pageSize, props.blogData));
  }

  return (
    <PaginationWrapper data-name="pagination-wrapper">
      {props.currentPage > 1 && (
        <div onClick={() => onPageChange(props.currentPage - 1)}>
          <Button {...toggleButtonStyles}>Предыдущая</Button>
        </div>
      )}
      {pages
        .filter((page) => page >= leftPortion && page <= rightPortion)
        .map((page) => (
          <div key={page} onClick={() => onPageChange(page)}>
            {page === props.currentPage ? (
              <Button {...currentButtonStyles}>{`${page}`}</Button>
            ) : (
              <Button {...paginationButtonStyles}>{`${page}`}</Button>
            )}
          </div>
        ))}
      {props.currentPage < pagesCount && (
        <div onClick={() => onPageChange(props.currentPage + 1)}>
          <Button {...toggleButtonStyles}>Следующая</Button>
        </div>
      )}
    </PaginationWrapper>
  );
};

export default memo(Pagination);
