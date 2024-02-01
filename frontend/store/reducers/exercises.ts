import { createSlice } from '@reduxjs/toolkit';

import { fetchAllExercises } from 'store/thunks/exercises';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const exercisesSlice = createSlice({
  name: "exercises",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllExercises.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllExercises.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchAllExercises.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default exercisesSlice.reducer;
