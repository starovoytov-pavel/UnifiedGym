import React from "react";

import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";

import { DefaultLayout } from "layouts/DefaultLayout";

import { EXERCISE_CATEGORIES, ExerciseCategory, Exercise } from "./constants";

import styles from "./styles";

const ExerciseList = ({ navigation }: any) => {
  const renderExercise = ({ item }: { item: Exercise }) => (
    <TouchableOpacity
      style={styles.exerciseWrapper}
      onPress={() =>
        navigation.navigate("ExerciseDetail", { id: item.id, title: item.name })
      }
    >
      {item?.uri && <Image style={styles.exerciseImg} source={item.uri} />}

      <Text style={styles.exerciseText}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderCategory = ({ item }: { item: ExerciseCategory }) => (
    <View style={styles.categoryWrapper}>
      <Text style={styles.categoryTitle}>{item.name}</Text>

      <FlatList
        data={item.exercises}
        renderItem={renderExercise}
        keyExtractor={(exercise) => String(exercise.id)}
        numColumns={2}
        key={EXERCISE_CATEGORIES.length}
      />
    </View>
  );

  return (
    <DefaultLayout>
      <FlatList
        data={EXERCISE_CATEGORIES}
        renderItem={renderCategory}
        keyExtractor={(category) => String(category.id)}
      />
    </DefaultLayout>
  );
};

export default ExerciseList;
