import { configureStore } from '@reduxjs/toolkit';

import favoriteExercisesReducer from './reducers/favoriteExercises';

export const store = configureStore({
  reducer: {
    favoriteExercises: favoriteExercisesReducer,
  },
});
