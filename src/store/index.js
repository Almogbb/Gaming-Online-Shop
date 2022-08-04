import { configureStore } from '@reduxjs/toolkit';

import gamesSlice from './games-slice';
import paginationSlice from './pagination-slice';

const store = configureStore({
  reducer: {
    games: gamesSlice.reducer,
    pagination: paginationSlice.reducer,
  },
});

export default store;
