import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchAllExercises } from "store/thunks/exercises";

export const fetchFavoriteExercises = createAsyncThunk(
  "favoriteExercises/fetchFavorites",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("URL_TO_YOUR_SERVER/favoriteExercises");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateFavoriteExercises: any = createAsyncThunk(
  "favoriteExercises/updateFavorites",
  async (exerciseIds: number[], thunkAPI) => {
    try {
      const response = await fetch(
        "URL_TO_YOUR_SERVER/updateFavoriteExercises",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ exerciseIds }),
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      thunkAPI.dispatch(fetchAllExercises());
      return {};
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
