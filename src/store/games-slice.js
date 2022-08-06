import { createSlice } from '@reduxjs/toolkit';

const initialGamesState = {
  games: [],
  filteredGames: [],
  // filterBy: '',
};

const gamesSlice = createSlice({
  name: 'games',
  initialState: initialGamesState,
  reducers: {
    getGames(state, action) {
      state.games = action.payload;
    },
    filteredGames(state, action) {
      let filter = [];
      console.log('payload from store', action.payload);
      const regexTitle = new RegExp(action.payload.title, 'i');
      const regexGenre = new RegExp(action.payload.genre, 'i');

      // filter by title
      if (action.payload.title && !action.payload.genre) {
        console.log('Filtering only with title');
        filter = state.games.filter((game) => {
          return regexTitle.test(game.title);
        });
      }

      // filter by genre
      else if (!action.payload.title && action.payload.genre) {
        console.log('Filtering only with genre');
        filter = state.games.filter((game) => {
          return regexGenre.test(game.genre);
        });

        // filter by both title and genre
      } else if (action.payload.title && action.payload.genre) {
        console.log('both filters');
        filter = state.games.filter((game) => {
          return regexTitle.test(game.title) && regexGenre.test(game.genre);
        });
      }

      state.filteredGames = filter;
      // console.log('state.filteredGames', state.filteredGames);
    },
  },
});

export const gamesSliceActions = gamesSlice.actions;
export default gamesSlice;
