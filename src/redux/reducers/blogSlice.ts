import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { TypeArticleInfo } from 'components/pages/Article/types';
import { TypeDispatch } from 'redux/reduxStore';
import { toArticlesList } from '../../utils/helpers';
import { TypeBlogData } from './../../components/pages/Blog/types';

const blogSlice = createSlice({
  name: 'blog',
  initialState: {
    blogData: [] as TypeBlogData[],
    articlesList: [] as TypeBlogData[],
    articleInfo: {} as TypeArticleInfo,
    currentPage: 1 as number,
    totalCount: 0 as number,
    pageSize: 3 as number,
  },
  reducers: {
    setBlogData: (state, action: PayloadAction<TypeBlogData[]>) => ({
      ...state,
      blogData: action.payload,
    }),
    setArticlesList: (state, action: PayloadAction<TypeBlogData[]>) => ({
      ...state,
      articlesList: action.payload,
    }),
    setArticlesInfo: (state, action: PayloadAction<TypeArticleInfo>) => ({
      ...state,
      articleInfo: action.payload,
    }),
    setCurrentPage: (state, action: PayloadAction<number>) => ({
      ...state,
      currentPage: action.payload,
    }),
    setTotalCount: (state, action: PayloadAction<number>) => ({
      ...state,
      totalCount: action.payload,
    }),
  },
});

export const thunks = {
  getBlogData: () => async (dispatch: TypeDispatch) => {
    const response = await axios.get('/src/mocks/getBlogData.json');
    dispatch(setBlogData(response.data));
    dispatch(setTotalCount(response.data.length));

    const list = toArticlesList(1, 3, response.data);
    dispatch(setArticlesList(list));
  },
  getArticlesList: (page: number, pageSize: number, cards: TypeBlogData[]) => (
    dispatch: TypeDispatch,
  ) => {
    const list = toArticlesList(page, pageSize, cards);
    dispatch(setArticlesList(list));
    dispatch(setCurrentPage(page));
  },
  getArticleInfo: (id: string) => async (dispatch: TypeDispatch) => {
    const response = await axios.get('/src/mocks/getArticleInfo.json');
    const currentInfo = response.data.find((article) => article.id === id);
    dispatch(setArticlesInfo(currentInfo));
  },
};

export const {
  setBlogData,
  setArticlesList,
  setArticlesInfo,
  setCurrentPage,
  setTotalCount,
} = blogSlice.actions;

export default blogSlice.reducer;
