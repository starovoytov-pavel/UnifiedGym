import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Dashboard from "screens/dashboard";
import ExercisesNavigator from "./Exercises";

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Dashboard" component={Dashboard} />

      <Tab.Screen name="Exercises" component={ExercisesNavigator} />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
