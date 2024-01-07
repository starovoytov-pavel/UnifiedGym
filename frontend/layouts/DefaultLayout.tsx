import { ReactNode } from "react";
import { View } from "react-native";

import styles from "./styles";

export const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return <View style={styles.container}>{children}</View>;
};
