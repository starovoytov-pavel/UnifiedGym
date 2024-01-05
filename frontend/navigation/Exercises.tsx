import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import ExerciseList from "../screens/exercise-list";
import ExerciseDetail from "../screens/exercise-details";

const Stack = createStackNavigator();

const ExercisesNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ExerciseList"
        component={ExerciseList}
        options={{ headerShown: false }}
      />

      <Stack.Screen name="ExerciseDetail" component={ExerciseDetail} />
    </Stack.Navigator>
  );
};

export default ExercisesNavigator;
