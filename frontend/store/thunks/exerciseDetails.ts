import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchExerciseDetails = createAsyncThunk(
  "exerciseDetails/fetchDetails",
  async (exerciseId: number) => {
    const response = await fetch(`URL_TO_YOUR_SERVER/exercises/${exerciseId}`);
    if (!response.ok) {
      throw new Error("Failed to load exercise details");
    }
    const data = await response.json();
    return data;
  }
);
