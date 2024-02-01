import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

const MyExercises = () => {
  const favoriteExercisesIds = useSelector(state => state.favoriteExercises.data);

  return (
    <View>
      <FlatList
        data={favoriteExercises}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>id: {item}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default MyExercises;
