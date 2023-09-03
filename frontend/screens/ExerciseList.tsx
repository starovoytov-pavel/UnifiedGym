import React from "react";

import { View, Text, FlatList, TouchableOpacity } from "react-native";

import styles from '../styles/ExerciseList';

const ExerciseList = ({ navigation }: any) => {
  const exercises = [
    { id: "1", name: "Push-up" },
    { id: "2", name: "Squat" },
    // ...
  ];

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate("ExerciseDetail", { id: item.id })}
    >
      <Text style={styles.itemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={exercises}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ExerciseList;
