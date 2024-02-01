import { createAsyncThunk } from "@reduxjs/toolkit";

import { EXERCISE_CATEGORIES } from "screens/exercise-list/constants";

export const fetchAllExercises: any = createAsyncThunk(
  "exercises/fetchAll",
  async () => {
    // const response = await fetch("URL_TO_YOUR_SERVER/exercises");
    // if (!response.ok) {
    //   throw new Error("Failed to load exercise list");
    // }
    // const data = await response.json();
    
    // return data;
    return EXERCISE_CATEGORIES;
  }
);
