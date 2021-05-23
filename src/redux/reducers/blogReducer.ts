import axios from 'axios';
import { TypeDispatch } from 'redux/reduxStore';
import { TypeBlogCards } from '../../components/pages/Blog/types';
import { toPaginatedCards } from '../../utils/helpers';
import { InferActionsType, InferThunksType } from './../reduxStore';
import {
  SET_BLOG_CARDS,
  SET_CURRENT_PAGE,
  SET_PAGINATED_CARDS,
  SET_TOTAL_COUNT_CARDS,
} from './actionTypes';

type TypeInitialState = typeof initialState;
type TypeAction = InferActionsType<typeof actions>;
type TypeThunk = InferThunksType<TypeAction>;

const initialState = {
  blogCards: [] as TypeBlogCards[],
  paginatedCards: [] as TypeBlogCards[],
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
    case SET_BLOG_CARDS:
      return { ...state, blogCards: action.blogCards };
    case SET_PAGINATED_CARDS:
      return { ...state, paginatedCards: action.paginatedCards };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_TOTAL_COUNT_CARDS:
      return { ...state, totalCount: action.totalCount };
    default:
      return state;
  }
};

export const actions = {
  setBlogCards: (blogCards: TypeBlogCards[]) =>
    ({
      type: SET_BLOG_CARDS,
      blogCards,
    } as const),
  setPaginatedCards: (paginatedCards: TypeBlogCards[]) =>
    ({
      type: SET_PAGINATED_CARDS,
      paginatedCards,
    } as const),
  setCurrentPage: (currentPage: number) =>
    ({
      type: SET_CURRENT_PAGE,
      currentPage,
    } as const),
  setTotalCountCards: (totalCount: number) =>
    ({
      type: SET_TOTAL_COUNT_CARDS,
      totalCount,
    } as const),
};

export const getBlogCards = (): TypeThunk => async (dispatch: TypeDispatch) => {
  const data = await axios.get('/src/mocks/getBlogCards.json');
  dispatch(actions.setBlogCards(data.data));
  dispatch(actions.setTotalCountCards(data.data.length));

  const initialData = toPaginatedCards(1, 3, data.data);
  dispatch(actions.setPaginatedCards(initialData));
};

export const getPaginatedCards = (
  page: number,
  pageSize: number,
  cards: TypeBlogCards[],
): any => (dispatch: TypeDispatch) => {
  const data = toPaginatedCards(page, pageSize, cards);
  dispatch(actions.setPaginatedCards(data));
  dispatch(actions.setCurrentPage(page));
};

export default blogReducer;
