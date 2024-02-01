import { createSlice } from "@reduxjs/toolkit";

import {
  fetchFavoriteExercises,
  updateFavoriteExercises,
} from "store/thunks/favoriteExercises";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const favoriteExercisesSlice = createSlice({
  name: "favoriteExercises",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavoriteExercises.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFavoriteExercises.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchFavoriteExercises.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(updateFavoriteExercises.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateFavoriteExercises.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(updateFavoriteExercises.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default favoriteExercisesSlice.reducer;
