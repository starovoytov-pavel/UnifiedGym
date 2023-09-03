import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Dashboard from "../screens/Dashboard";
import ExercisesNavigator from "./Exercises";

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={Dashboard} />

      <Tab.Screen name="Exercises" component={ExercisesNavigator} />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
