import { createSlice } from "@reduxjs/toolkit";

import { fetchExerciseDetails } from "store/thunks/exerciseDetails";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const exerciseDetailsSlice = createSlice({
  name: "exerciseDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExerciseDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchExerciseDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchExerciseDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default exerciseDetailsSlice.reducer;
