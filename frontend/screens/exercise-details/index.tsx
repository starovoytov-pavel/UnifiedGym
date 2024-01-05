import React from "react";

import { View, Text, Image } from "react-native";

import { ExerciseDetailsTabs } from "./Tabs";

import styles from "./ExerciseDetailsStyle";

const ExerciseDetail = ({ route }: any) => {
  const { id } = route.params;

  const exercise = {
    id,
    name: "Push-up",
    description: "A basic push-up exercise.",
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{exercise.name}</Text>

      <Image
        style={styles.exerciseImage}
        source={{
          uri: "https://www.armyprt.com/wp-content/uploads/2023/07/pushups-muscles-worked-1024x692-2.webp",
        }}
      />

      <ExerciseDetailsTabs />
    </View>
  );
};

export default ExerciseDetail;
