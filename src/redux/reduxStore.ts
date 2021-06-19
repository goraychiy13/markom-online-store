import { configureStore } from '@reduxjs/toolkit';
import blogSlice from './reducers/blogSlice';

const store = configureStore({
  reducer: {
    blogSlice: blogSlice,
  },
});

export type TypeRootState = ReturnType<typeof store.getState>;

export type TypeDispatch = typeof store.dispatch;
// export const useAppDispatch = () => useDispatch<TypeDispatch>();

export default store;
