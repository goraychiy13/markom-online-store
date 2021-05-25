import { TypeBlogData } from 'components/pages/Blog/types';

export const toArticlesList = (
  page: number,
  pageSize: number,
  array: TypeBlogData[],
): TypeBlogData[] =>
  array.filter((value, index: number) => {
    return index >= (page - 1) * pageSize && index < page * pageSize;
  });
