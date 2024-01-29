import { FC, useCallback } from "react";

import { IconButton } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import {
  addFavoriteExercises,
  removeFavoriteExercises,
} from "store/reducers/favoriteExercises";

interface FavoriteIconProps {
  exerciseId: number;
}

const FavoriteIcon: FC<FavoriteIconProps> = ({ exerciseId }) => {
  const dispatch = useDispatch();
  const favoriteExercises = useSelector(
    (state) => state.favoriteExercises.data
  );

  const handleFavoriteExercise = useCallback(() => {
    const isFavoriteExercise = favoriteExercises.includes(exerciseId);

    dispatch(
      isFavoriteExercise
        ? removeFavoriteExercises(exerciseId)
        : addFavoriteExercises(exerciseId)
    );
  }, [dispatch, favoriteExercises, exerciseId]);

  const getIcon = useCallback(() => {
    const isFavoriteExercise = favoriteExercises.includes(exerciseId);

    return isFavoriteExercise ? "heart" : "heart-outline";
  }, [favoriteExercises, exerciseId]);

  return (
    <TouchableOpacity onPress={handleFavoriteExercise}>
      <IconButton
        icon={getIcon()}
        style={{ width: 25, height: 25, marginRight: 15 }}
      />
    </TouchableOpacity>
  );
};

export default FavoriteIcon;
