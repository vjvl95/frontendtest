import { createSlice } from '@reduxjs/toolkit';

interface searchType {
  filter: string;
  searchWord: string;
}

const initialState: searchType = {
  filter: 'total',
  searchWord: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeFilter(state, action) {
      state.filter = action.payload;
      console.log(action.payload);
      sessionStorage.setItem('filter', action.payload);
    },
    changeSearchWord(state, action) {
      state.searchWord = action.payload;
      console.log(action.payload);
      sessionStorage.setItem('searchWord', action.payload);
    },
  },
});

export const { changeFilter, changeSearchWord } = searchSlice.actions;
export default searchSlice.reducer;
