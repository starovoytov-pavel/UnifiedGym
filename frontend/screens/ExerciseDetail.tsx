import React from 'react';

import { View, Text } from 'react-native';

import styles from '../styles/ExerciseDetail';

const ExerciseDetail = ({ route }: any) => {
  const { id } = route.params;

  const exercise = { id, name: 'Push-up', description: 'A basic push-up exercise.' };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{exercise.name}</Text>
      <Text style={styles.description}>{exercise.description}</Text>
    </View>
  );
};

export default ExerciseDetail;
