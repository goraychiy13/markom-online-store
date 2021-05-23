import { TypeBlogCards } from 'components/pages/Blog/types';

export const toPaginatedCards = (
  page: number,
  pageSize: number,
  array: TypeBlogCards[],
): TypeBlogCards[] =>
  array.filter((value, index: number) => {
    return index >= (page - 1) * pageSize && index < page * pageSize;
  });
