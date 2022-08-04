import { createSlice } from '@reduxjs/toolkit';

const initialPaginationState = {
  gamesPerPage: 10,
  currPage: 1,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState: initialPaginationState,
  reducers: {
    setPage(state, action) {
      if (
        state.currPage === action.payload.lastPage &&
        action.payload.dir === 1
      ) {
        state.currPage = 1;
      } else if (state.currPage === 1 && action.payload.dir === -1) {
        state.currPage = action.payload.lastPage;
      } else {
        state.currPage += action.payload.dir;
      }
    },
  },
});

export const paginationSliceAction = paginationSlice.actions;

export default paginationSlice;
