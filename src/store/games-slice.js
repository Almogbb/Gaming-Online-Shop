import { createSlice } from '@reduxjs/toolkit';

const initialGamesState = {
  games: [],
};

const gamesSlice = createSlice({
  name: 'games',
  initialState: initialGamesState,
  reducers: {
    getGames(state, action) {
      state.games = action.payload;
    },
  },
});

export const gamesSliceActions = gamesSlice.actions;
export default gamesSlice;
