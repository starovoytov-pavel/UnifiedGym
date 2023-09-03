import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import ExerciseList from "../screens/ExerciseList";
import ExerciseDetail from "../screens/ExerciseDetail";

const Stack = createStackNavigator();

const ExercisesNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ExerciseList" component={ExerciseList} />

      <Stack.Screen name="ExerciseDetail" component={ExerciseDetail} />
    </Stack.Navigator>
  );
};

export default ExercisesNavigator;
