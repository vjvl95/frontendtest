import { configureStore } from '@reduxjs/toolkit';

import paginationReducer from './paginationSlice';
import searchReducer from './searchSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    pagination: paginationReducer,
  },
});
export const selectQueryParams = (state: any) => [
  state.pagination.limit,
  state.pagination.page,
  state.search.searchWord,
  state.search.filter,
];
