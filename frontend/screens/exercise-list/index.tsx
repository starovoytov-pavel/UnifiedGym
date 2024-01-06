import React from "react";

import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";

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
      {item?.path && <Image style={styles.exerciseImg} source={item.path} />}

      <Text style={styles.exerciseText}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderCategory = ({ item }: { item: ExerciseCategory }) => (
    <View>
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
    <FlatList
      data={EXERCISE_CATEGORIES}
      renderItem={renderCategory}
      keyExtractor={(category) => String(category.id)}
    />
  );
};

export default ExerciseList;
