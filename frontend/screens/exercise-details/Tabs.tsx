import React from "react";

import { Text, View } from "react-native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { ExerciseDetails } from "screens/exercise-list/constants";

import { TABS_CONFIG } from "./constants";

const Tab = createMaterialTopTabNavigator();

interface TabsProps {
  data: ExerciseDetails;
}

export const ExerciseTabs = ({ data }: TabsProps) => {
  const renderDescription = (description: string) => () =>
    (
      <View>
        <Text>{description}</Text>
      </View>
    );

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarActiveTintColor: "#6200EE",
        tabBarInactiveTintColor: "gray",
        tabBarIndicatorStyle: { backgroundColor: "#6200EE" },
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: "#03DAC6" },
      }}
    >
      {TABS_CONFIG.map((item) => (
        <Tab.Screen
          key={item.title}
          name={item.title}
          component={renderDescription(item.description)}
        />
      ))}
    </Tab.Navigator>
  );
};
