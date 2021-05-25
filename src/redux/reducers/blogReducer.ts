import axios from 'axios';
import { TypeDispatch } from 'redux/reduxStore';
import { TypeArticleInfo } from '../../components/pages/Article/types';
import { TypeBlogData } from '../../components/pages/Blog/types';
import { toArticlesList } from '../../utils/helpers';
import { InferActionsType, InferThunksType } from './../reduxStore';
import {
  SET_ARTICLES_LIST,
  SET_ARTICLE_INFO,
  SET_BLOG_DATA,
  SET_CURRENT_PAGE,
  SET_TOTAL_COUNT,
} from './actionTypes';

type TypeInitialState = typeof initialState;
type TypeAction = InferActionsType<typeof actions>;
type TypeThunk = InferThunksType<TypeAction>;

const initialState = {
  blogData: [] as TypeBlogData[],
  articlesList: [] as TypeBlogData[],
  articleInfo: {} as TypeArticleInfo,
  currentPage: 1,
  portionSize: 3,
  totalCount: 0,
  pageSize: 3,
};

const blogReducer = (
  state = initialState,
  action: TypeAction,
): TypeInitialState => {
  switch (action.type) {
    case SET_BLOG_DATA:
      return { ...state, blogData: action.blogData };
    case SET_ARTICLES_LIST:
      return { ...state, articlesList: action.articlesList };
    case SET_ARTICLE_INFO:
      return { ...state, articleInfo: action.articleInfo };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_TOTAL_COUNT:
      return { ...state, totalCount: action.totalCount };
    default:
      return state;
  }
};

export const actions = {
  setBlogData: (blogData: TypeBlogData[]) =>
    ({
      type: SET_BLOG_DATA,
      blogData,
    } as const),
  setArticlesList: (articlesList: TypeBlogData[]) =>
    ({
      type: SET_ARTICLES_LIST,
      articlesList,
    } as const),
  setArticlesInfo: (articleInfo: TypeArticleInfo) =>
    ({
      type: SET_ARTICLE_INFO,
      articleInfo,
    } as const),
  setCurrentPage: (currentPage: number) =>
    ({
      type: SET_CURRENT_PAGE,
      currentPage,
    } as const),
  setTotalCount: (totalCount: number) =>
    ({
      type: SET_TOTAL_COUNT,
      totalCount,
    } as const),
};

export const thunks = {
  getBlogData: (): TypeThunk => async (dispatch: TypeDispatch) => {
    const response = await axios.get('/src/mocks/getBlogData.json');
    dispatch(actions.setBlogData(response.data));
    dispatch(actions.setTotalCount(response.data.length));

    const list = toArticlesList(1, 3, response.data);
    dispatch(actions.setArticlesList(list));
  },
  getArticlesList: (
    page: number,
    pageSize: number,
    cards: TypeBlogData[],
  ): any => (dispatch: TypeDispatch) => {
    const list = toArticlesList(page, pageSize, cards);
    dispatch(actions.setArticlesList(list));
    dispatch(actions.setCurrentPage(page));
  },
  getArticleInfo: (url: string): TypeThunk => async (
    dispatch: TypeDispatch,
  ) => {
    const response = await axios.get('/src/mocks/getArticleInfo.json');
    const currentInfo = response.data.find(
      (article: TypeArticleInfo) => article.url === url,
    );
    dispatch(actions.setArticlesInfo(currentInfo));
  },
};

export default blogReducer;
