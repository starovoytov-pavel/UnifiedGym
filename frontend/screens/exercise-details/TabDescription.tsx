import { FC } from "react";
import { View, Text } from "react-native";

import { tabDescriptionStyle as styles } from './styles';

interface TabDescriptionProps {
  description: string;
}

export const TabDescription: FC<TabDescriptionProps> = ({ description }) => (
  <View style={styles.container}>
    <Text>{description}</Text>
  </View>
);