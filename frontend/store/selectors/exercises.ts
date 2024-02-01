import { createSelector } from "@reduxjs/toolkit";

export const exercisesSelector = createSelector(
  (state: any) => state.exercises.loading,
  (state: any) => state.exercises.data,
  (loading, data) => ({
    loading,
    data,
  })
);
