import React, { FC, useEffect, useState } from "react";

import { View, Image } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { DefaultLayout } from "layouts/DefaultLayout";
import {
  EXERCISE_DETAILS,
  ExerciseDetails,
} from "screens/exercise-list/constants";

import { ExerciseTabs } from "./Tabs";

import styles from "./styles";

type ExerciseStackParamList = {
  ExerciseDetail: {
    id: number;
    title: string;
  };
};

type ExerciseDetailProps = {
  route: RouteProp<ExerciseStackParamList, "ExerciseDetail">;
  navigation: StackNavigationProp<ExerciseStackParamList, "ExerciseDetail">;
} & any;

const ExerciseDetail: FC<ExerciseDetailProps> = ({ route, navigation }) => {
  const { id } = route.params;
  const [data, setData] = useState<ExerciseDetails | null>(null);

  useEffect(() => {
    if (id) {
      const currentExercise = EXERCISE_DETAILS.find(
        (exercise) => exercise.id === id
      );

      setData(currentExercise || null);
    }
  }, []);

  useEffect(() => {
    if (route.params?.title) {
      navigation.setOptions({ title: route.params.title });
    }
  }, [route, navigation]);

  if (!data) {
    return null;
  }

  return (
    <DefaultLayout>
      <View style={{ flex: 1 }}>
        {data.uri && <Image style={styles.exerciseImage} source={data.uri} />}

        <ExerciseTabs data={data} />
      </View>
    </DefaultLayout>
  );
};

export default ExerciseDetail;
