import { TypeBlogCards } from 'components/pages/Blog/types';
import React, { memo, useState } from 'react';
import { colors } from '../../../common/colors';
import Button from '../../uikit/Button/Button';
import { PaginationWrapper } from './style';

type Props = {
  blogCards: TypeBlogCards[];
  currentPage: number;
  portionSize: number;
  totalCount: number;
  pageSize: number;
  getPaginatedCards: (
    page: number,
    pageSize: number,
    cards: TypeBlogCards[],
  ) => void;
};

const Pagination: React.FC<Props> = (props) => {
  const pagesCount = Math.ceil(props.totalCount / props.pageSize);
  const pages: number[] = [];
  for (let i = 1; i <= pagesCount; i++) pages.push(i);

  const [leftPortion, setLeftPortion] = useState(1);
  const [rightPortion, setRightPortion] = useState(props.portionSize);

  function onPageChange(page: number): void {
    setLeftPortion(page - (page === pages.length ? 2 : 1));
    setRightPortion(page + (page === 1 ? 2 : 1));
    props.getPaginatedCards(page, props.pageSize, props.blogCards);
  }

  return (
    <PaginationWrapper data-name="pagination-wrapper">
      {props.currentPage > 1 && (
        <div onClick={() => onPageChange(props.currentPage - 1)}>
          <Button
            height="30px"
            margin="0 0.5rem 0 0"
            padding="0 0.8rem"
            borderRadius="6px"
            fontSize="12px"
            color={colors.darkGreen}
            boxShadowModifier={'0 0 0 1px inset' + colors.darkGreen}
            backgroundColor={colors.gray93}
          >
            Предыдущая
          </Button>
        </div>
      )}
      {pages
        .filter((page) => page >= leftPortion && page <= rightPortion)
        .map((page) => (
          <div key={page} onClick={() => onPageChange(page)}>
            <Button
              height="30px"
              margin="0 0.5rem 0 0"
              padding="0 0.8rem"
              borderRadius="6px"
              color={
                page === props.currentPage ? colors.white : colors.darkGrey
              }
              boxShadowModifier={
                page === props.currentPage
                  ? 'none'
                  : '0 0 0 1px inset' + colors.darkGreen
              }
              backgroundColor={
                page === props.currentPage ? colors.darkGreen : colors.gray93
              }
              backgroundColorModifier={
                page === props.currentPage ? colors.minorGreen : colors.gray93
              }
            >{`${page}`}</Button>
          </div>
        ))}
      {props.currentPage < pagesCount && (
        <div onClick={() => onPageChange(props.currentPage + 1)}>
          <Button
            height="30px"
            margin="0 0.5rem 0 0"
            padding="0 0.8rem"
            borderRadius="6px"
            fontSize="12px"
            color={colors.darkGreen}
            boxShadowModifier={'0 0 0 1px inset' + colors.darkGreen}
            backgroundColor={colors.gray93}
          >
            Следующая
          </Button>
        </div>
      )}
    </PaginationWrapper>
  );
};

export default memo(Pagination);
