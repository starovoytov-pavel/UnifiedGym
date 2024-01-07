import React, { FC } from "react";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { ExerciseDetails } from "screens/exercise-list/constants";
import { TabDescription } from "screens/exercise-details/TabDescription";

import { TABS_CONFIG } from "./constants";

const Tab = createMaterialTopTabNavigator();

interface TabsProps {
  data: ExerciseDetails;
}

export const ExerciseTabs: FC<TabsProps> = ({ data }) => {
  return (
    <Tab.Navigator
      style={{ flex: 1 }}
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarActiveTintColor: "#6200EE",
        tabBarInactiveTintColor: "gray",
        tabBarIndicatorStyle: { backgroundColor: "#6200EE" },
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: "#03DAC6" },
      }}
    >
      {TABS_CONFIG.map((tab) => (
        <Tab.Screen
          key={tab.key}
          name={tab.name}
          children={() => <TabDescription description={tab.description} />}
        />
      ))}
    </Tab.Navigator>
  );
};
