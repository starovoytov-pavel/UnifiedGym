import React from "react";

import { useTranslation } from 'react-i18next';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Dashboard from "screens/dashboard";
import ExercisesNavigator from "./Exercises";

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  const { t } = useTranslation();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name={t('applicationTabs.dashboard')} component={Dashboard} />

      <Tab.Screen name={t('applicationTabs.exercises')} component={ExercisesNavigator} />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
