import { configureStore } from '@reduxjs/toolkit';

import exerciseDetailsReducer from './reducers/exerciseDetails';
import exercisesReducer from './reducers/exercises';
import favoriteExercisesReducer from './reducers/favoriteExercises';

export const store = configureStore({
  reducer: {
    exerciseDetails: exerciseDetailsReducer,
    exercises: exercisesReducer,
    favoriteExercises: favoriteExercisesReducer,
  },
});
