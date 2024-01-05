import React from "react";

import { Text, View } from "react-native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";


const Tab = createMaterialTopTabNavigator();

const TABS_CONFIG = [
  {
    title: "Overview",
    description: "Общее описание упражнения",
  },
  {
    title: "Muscle Group",
    description: "Целевые мышечные группы",
  },
  {
    title: "Difficulty Level",
    description: "Уровень сложности упражнения",
  },
  {
    title: "Technique",
    description: "Описание техники выполнения",
  },
  {
    title: "Sets Reps",
    description: "Рекомендации по количеству подходов и повторений",
  },
  {
    title: "Variations",
    description: "Вариации упражнения",
  },
  {
    title: "Visuals",
    description: "Визуальные материалы (видео)",
  },
  {
    title: "Common Mistakes",
    description: "Распространенные ошибки",
  },
  {
    title: "Tips",
    description: "Советы по выполнению",
  },
  {
    title: "Benefits",
    description: "Преимущества упражнения",
  },
];

export const ExerciseDetailsTabs = () => {
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
        tabBarActiveTintColor: '#6200EE',
        tabBarInactiveTintColor: 'gray',
        tabBarIndicatorStyle: { backgroundColor: '#6200EE' },
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: '#03DAC6' },
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
