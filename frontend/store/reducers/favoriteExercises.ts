import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const favoriteExercisesSlice = createSlice({
  name: "favoriteExercises",
  initialState,
  reducers: {
    addFavoriteExercises: (state, action) => {
      const existingItem = state.data.find(
        (exercises) => exercises.id === action.payload.id
      );

      if (!existingItem) {
        state.data.push(action.payload);
      }
    },
    removeFavoriteExercises: (state, action) => {
      state.data = state.data.filter(
        (exercises) => exercises.id !== action.payload.id
      );
    },
    addMultipleFavoriteExercises: (state, action) => {
      const newExercises = action.payload.filter(
        (newExercise) =>
          !state.data.some(
            (existingExercise) => existingExercise.id === newExercise.id
          )
      );

      state.data = [...state.data, ...newExercises];
    },
  },
});

export const {
  addFavoriteExercises,
  removeFavoriteExercises,
  addMultipleFavoriteExercises,
} = favoriteExercisesSlice.actions;

export default favoriteExercisesSlice.reducer;
