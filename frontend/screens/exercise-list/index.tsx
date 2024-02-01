import React, { useCallback, useEffect, useState } from "react";

import { Checkbox } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";

import { DefaultLayout } from "layouts/DefaultLayout";

import { fetchAllExercises } from "store/thunks/exercises";
import { exercisesSelector } from "store/selectors/exercises";
import { updateFavoriteExercises } from "store/thunks/favoriteExercises";

import { ExerciseCategory, Exercise } from "./constants";

import styles from "./styles";

const ExerciseList = ({ navigation }: any) => {
  const dispatch = useDispatch();

  const { data, loading } = useSelector(exercisesSelector);

  const [selectedExercises, setSelectedExercises] = useState<number[]>([]);

  const toggleExerciseSelection = useCallback(
    (exerciseId: number) => () => {
      if (selectedExercises.includes(exerciseId)) {
        setSelectedExercises((prevValue) =>
          prevValue.filter((id) => id !== exerciseId)
        );
      } else {
        setSelectedExercises((prevValue) => [...prevValue, exerciseId]);
      }
    },
    [selectedExercises]
  );

  const addSelectedToFavorites = useCallback(() => {
    dispatch(updateFavoriteExercises(selectedExercises));
  }, [selectedExercises]);

  const renderExercise = useCallback(
    ({ item }: { item: Exercise }) => {
      const isSelected = selectedExercises.includes(item.id);

      return (
        <TouchableOpacity
          style={[
            styles.exerciseWrapper,
            isSelected && styles.selectedExercise,
          ]}
          onPress={() =>
            navigation.navigate("ExerciseDetail", {
              id: item.id,
              title: item.name,
            })
          }
          onLongPress={toggleExerciseSelection(item.id)}
        >
          {isSelected && (
            <Checkbox status={isSelected ? "checked" : "unchecked"} />
          )}

          {item?.uri && <Image style={styles.exerciseImg} source={item.uri} />}

          <Text style={styles.exerciseText}>{item.name}</Text>
        </TouchableOpacity>
      );
    },
    [selectedExercises]
  );

  const renderCategory = useCallback(
    ({ item }: { item: ExerciseCategory }) => (
      <View style={styles.categoryWrapper}>
        <Text style={styles.categoryTitle}>{item.name}</Text>

        <FlatList
          data={item.exercises}
          renderItem={renderExercise}
          keyExtractor={(exercise) => String(exercise.id)}
          numColumns={2}
          key={data.length}
        />
      </View>
    ),
    [selectedExercises]
  );

  useEffect(() => {
    dispatch(fetchAllExercises());
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <DefaultLayout>
      <FlatList
        data={data}
        renderItem={renderCategory}
        keyExtractor={(category) => String(category.id)}
      />

      <Button title="Add to Favorites" onPress={addSelectedToFavorites} />
    </DefaultLayout>
  );
};

export default ExerciseList;
