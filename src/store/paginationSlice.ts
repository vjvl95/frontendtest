import { createSlice } from '@reduxjs/toolkit';

interface pagination {
  limit: number;
  page: number;
}

const initialState: pagination = {
  limit: 10,
  page: 1,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    changePageNumber(state, action) {
      state.page = action.payload;
      sessionStorage.setItem('page', action.payload);
    },
    changeLimitNumber(state, action) {
      state.limit = action.payload;
      sessionStorage.setItem('limit', action.payload);
      console.log(action.payload);
    },
  },
});

export const { changePageNumber, changeLimitNumber } = paginationSlice.actions;
export default paginationSlice.reducer;
